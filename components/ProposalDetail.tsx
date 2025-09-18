import React, { useState, useEffect, useRef, RefObject } from 'react';
import { Proposal, KeyComponent, Kpi, BeforeAfter, ObjectivePoint, BenefitPoint, ExecutiveSummaryData } from '../types';
import { ThumbsUpIcon, ThumbsDownIcon, SparklesIcon, FinancialDashboardIcon } from './icons';
import { PROPOSALS } from '../constants';

// Custom Hook to detect when an element is in the viewport
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  // FIX: Added default empty object to make options parameter optional.
  { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
};

// Wrapper for components that need scroll-triggered animation
const AnimatedWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref);
    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}>
            {children}
        </div>
    );
};


// Reusable Section Component, now with scroll animation
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
    return (
        <section ref={ref} className={`mb-12 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="text-3xl font-bold text-sapphire-dark border-b-2 border-copper-metallic pb-2 mb-6">{title}</h3>
            {children}
        </section>
    );
};


// Individual Section Components
const ImpactClaim: React.FC<{ claim: string }> = ({ claim }) => (
    <div className="bg-sapphire-dark text-center py-6 px-4 rounded-xl shadow-lg mb-10 transition-transform duration-300 hover:scale-[1.01]">
        <p className="text-3xl md:text-4xl font-extrabold text-copper-metallic tracking-tight">"{claim}"</p>
    </div>
);

const ExecutiveSummary: React.FC<{ summary: ExecutiveSummaryData }> = ({ summary }) => (
    <div className="grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl shadow-lg border border-pearl-gray">
      {/* Hero Stat */}
      <div className="md:col-span-1 text-center border-r-0 md:border-r md:border-pearl-gray pr-0 md:pr-8">
        <p className="text-6xl md:text-7xl font-extrabold text-copper-metallic leading-none">{summary.heroStat.value}</p>
        <p className="text-lg font-semibold text-sapphire-dark mt-2">{summary.heroStat.label}</p>
        <p className="text-gray-600 mt-4 text-center text-lg font-light italic">"{summary.mainGoal}"</p>
      </div>
      {/* Narrative */}
      <div className="md:col-span-2 space-y-6">
        {summary.points.map((point, index) => (
          <div key={index} className="group flex items-start space-x-4">
            <div className="flex-shrink-0 bg-emerald-sober/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
              <point.icon className="h-8 w-8 text-emerald-sober" />
            </div>
            <div>
                <h4 className="font-bold text-lg text-sapphire-dark">{point.title}</h4>
                <p className="text-gray-700 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
);


const Objective: React.FC<{ points: ObjectivePoint[] }> = ({ points }) => (
    <div className="grid md:grid-cols-2 gap-6">
        {points.map((point, index) => (
            <div key={index} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4">
                <div className="flex-shrink-0 bg-emerald-sober/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                    <point.icon className="h-8 w-8 text-emerald-sober" />
                </div>
                <div>
                    <p className="text-gray-800 text-lg leading-relaxed">{point.text}</p>
                </div>
            </div>
        ))}
    </div>
);


const Investment: React.FC<{ total: string; usd: string }> = ({ total, usd }) => (
    <div className="bg-white border-l-8 border-copper-metallic p-6 rounded-lg shadow-xl my-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <h4 className="text-sm font-semibold text-copper-metallic uppercase tracking-wider">Inversión Propuesta</h4>
        <p className="text-3xl font-extrabold text-sapphire-dark mt-2">{total}</p>
        <p className="text-md text-gray-600 mt-1">Equivalente en USD: {usd}</p>
    </div>
);

const VerticalTimelineComponents: React.FC<{ components: KeyComponent[] }> = ({ components }) => {
    return (
        <div className="relative py-8">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pearl-gray hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
                {components.map((comp, index) => (
                    <div key={index} className="md:grid md:grid-cols-2 md:gap-x-12 relative">
                        {/* Component Card */}
                        <div className={`
                            group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                            border-2 border-transparent hover:border-copper-metallic hover:-translate-y-1
                            ${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}
                        `}>
                            <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <h4 className={`text-xl font-bold text-sapphire-dark flex-grow ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>{comp.title}</h4>
                            </div>
                            <div className="text-gray-600">{comp.value}</div>
                            <p className="text-sm font-semibold text-emerald-sober mt-4 pt-4 border-t border-pearl-gray">Inversión: {comp.investment}</p>
                        </div>
                        
                        {/* Icon Node on the Timeline */}
                        <div className={`
                            absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                            w-20 h-20 bg-white border-4 border-pearl-gray rounded-full
                            flex items-center justify-center transition-all duration-300 group-hover:border-copper-metallic
                            hidden md:flex
                        `}>
                             <div className="w-16 h-16 bg-emerald-sober/10 rounded-full flex items-center justify-center">
                                <comp.icon className="h-9 w-9 text-copper-metallic" />
                             </div>
                        </div>

                        {/* Mobile Icon */}
                         <div className="flex md:hidden items-center my-4">
                            <div className="w-12 h-12 bg-emerald-sober/10 rounded-full flex items-center justify-center border-2 border-pearl-gray">
                                <comp.icon className="h-6 w-6 text-copper-metallic" />
                            </div>
                            <div className="flex-grow border-t-2 border-dashed border-pearl-gray mx-4"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const StrategicBenefits: React.FC<{ benefits: BenefitPoint[] }> = ({ benefits }) => (
    <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-emerald-sober flex items-start">
                <div className="flex-shrink-0 bg-emerald-sober/10 p-3 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110">
                    <benefit.icon className="h-8 w-8 text-emerald-sober" />
                </div>
                <p className="text-gray-800 text-lg mt-1">{benefit.text}</p>
            </div>
        ))}
    </div>
);

const KpiDashboard: React.FC<{ kpis: Kpi[] }> = ({ kpis }) => (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
        {kpis.map((kpi, index) => (
            <div key={index} className="group flex items-center bg-white p-3 pr-6 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-md">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-sober/10 to-white rounded-full flex items-center justify-center border-2 border-pearl-gray transition-colors duration-300 group-hover:border-copper-metallic">
                    <kpi.icon className="h-10 w-10 text-emerald-sober opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                </div>
                <div className="ml-5">
                    <h4 className="text-lg font-bold text-sapphire-dark">{kpi.metric}</h4>
                    <p className="text-gray-600 mt-1 text-sm">{kpi.description}</p>
                </div>
            </div>
        ))}
    </div>
);


const BeforeAfterCard: React.FC<{ data: BeforeAfter }> = ({ data }) => {
    return (
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
            {/* Diagonal Background */}
            <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-red-50 via-white-smoke to-emerald-sober/20 transition-transform duration-500 ease-in-out group-hover:skew-y-0"></div>

            <div className="absolute hidden md:flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-white rounded-full shadow-2xl border-2 border-pearl-gray z-20">
                <SparklesIcon className="h-10 w-10 text-copper-metallic transition-transform duration-500 group-hover:scale-125 group-hover:rotate-180" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-start p-8 md:p-12 z-10">
                {/* BEFORE */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-red-800 text-center md:text-left">{data.before.title}</h4>
                    <ul className="space-y-3">
                        {data.before.points.map((point, i) => (
                            <li key={i} className="flex items-start bg-white/50 p-3 rounded-lg shadow-sm">
                                <ThumbsDownIcon className="h-6 w-6 mr-3 text-red-500 flex-shrink-0 mt-1" /> 
                                <span className="text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* AFTER */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-emerald-sober text-center md:text-right">{data.after.title}</h4>
                    <ul className="space-y-3">
                        {data.after.points.map((point, i) => (
                            <li key={i} className="flex items-start md:flex-row-reverse bg-white/50 p-3 rounded-lg shadow-sm">
                                <ThumbsUpIcon className="h-6 w-6 md:ml-3 mr-3 md:mr-0 text-emerald-sober flex-shrink-0 mt-1 md:mt-0" />
                                <span className="text-gray-800 text-left md:text-right flex-grow">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Main Detail Component
export const ProposalDetail: React.FC<{ proposal: Proposal }> = ({ proposal }) => {
    return (
        <div className="bg-white-smoke/50 p-6 sm:p-8 md:p-12 rounded-2xl shadow-inner">
            <header className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-sapphire-dark leading-tight">{proposal.title}</h2>
            </header>
            
            <AnimatedWrapper>
                <ImpactClaim claim={proposal.impactClaim} />
            </AnimatedWrapper>

            <div className="space-y-16">
                 <Section title="Resumen Ejecutivo">
                    <ExecutiveSummary summary={proposal.executiveSummary} />
                </Section>
                
                <Section title="Objetivo de la Propuesta">
                    <Objective points={proposal.objective} />
                </Section>

                <AnimatedWrapper>
                    <Investment total={proposal.investment.total} usd={proposal.investment.usd} />
                </AnimatedWrapper>

                <Section title="Componentes Clave y su Valor">
                    <VerticalTimelineComponents components={proposal.keyComponents} />
                </Section>

                <Section title="Beneficios Estratégicos">
                    <StrategicBenefits benefits={proposal.strategicBenefits} />
                </Section>

                <Section title="Métricas de Éxito (KPIs)">
                    <KpiDashboard kpis={proposal.kpis} />
                </Section>
                
                <Section title="Comparativo: Antes vs Después">
                    <BeforeAfterCard data={proposal.beforeAfter} />
                </Section>
            </div>
        </div>
    );
};

const calculateTotalInvestment = (proposals: Proposal[]): { mxn: string; usd: string } => {
    let minTotalMxn = 0;
    let maxTotalMxn = 0;
    let minTotalUsd = 0;
    let maxTotalUsd = 0;

    proposals.forEach(proposal => {
        const mxnParts = proposal.investment.total
            .replace(/\$|,|MXN/g, '')
            .trim()
            .split(' - ');
        if (mxnParts.length === 2) {
            minTotalMxn += parseInt(mxnParts[0], 10) || 0;
            maxTotalMxn += parseInt(mxnParts[1], 10) || 0;
        }

        const usdParts = proposal.investment.usd
            .replace(/\$|,|USD/g, '')
            .trim()
            .split(' - ');
        if (usdParts.length === 2) {
            minTotalUsd += parseInt(usdParts[0], 10) || 0;
            maxTotalUsd += parseInt(usdParts[1], 10) || 0;
        }
    });
    
    const mxnFormatter = new Intl.NumberFormat('es-MX', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    const usdFormatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return {
        mxn: `$${mxnFormatter.format(minTotalMxn)} - $${mxnFormatter.format(maxTotalMxn)} MXN`,
        usd: `$${usdFormatter.format(minTotalUsd)} - $${usdFormatter.format(maxTotalUsd)} USD`,
    };
};


export const CostSummarySection: React.FC<{ allProposals: Proposal[] }> = ({ allProposals }) => {
    const totalInvestment = calculateTotalInvestment(allProposals);

    return (
        <section className="mb-12">
            <h3 className="flex items-center text-3xl font-bold text-sapphire-dark border-b-2 border-copper-metallic pb-2 mb-6">
                <FinancialDashboardIcon className="h-8 w-8 mr-3 text-copper-metallic" />
                Resumen de Inversión del Proyecto Integral
            </h3>
             <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-pearl-gray overflow-x-auto">
                <table className="w-full min-w-[800px] text-left">
                    <thead className="border-b-2 border-sapphire-dark">
                        <tr>
                            <th className="p-4 text-lg font-bold text-sapphire-dark w-1/3">Propuesta Estratégica</th>
                            <th className="p-4 text-lg font-bold text-sapphire-dark w-1/3">Componentes Clave Incluidos</th>
                            <th className="p-4 text-lg font-bold text-sapphire-dark text-right">Inversión Estimada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProposals.map((p) => (
                            <tr key={p.id} className="border-b border-pearl-gray last:border-b-0 hover:bg-white-smoke/50 transition-colors duration-200">
                                <td className="p-4 font-semibold text-sapphire-dark align-top">{p.title}</td>
                                <td className="p-4 text-gray-700 align-top text-sm">
                                    <ul className="space-y-1">
                                        {p.keyComponents.map((c) => <li key={c.title}>{c.title}</li>)}
                                    </ul>
                                </td>
                                <td className="p-4 text-right align-top whitespace-nowrap">
                                    <div className="font-medium text-gray-800">{p.investment.total}</div>
                                    <div className="text-sm text-gray-500">{p.investment.usd}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-sapphire-dark text-white-smoke">
                            <td colSpan={3} className="p-4 rounded-b-lg">
                                <div className="grid grid-cols-3 items-center">
                                    <span />
                                    <span className="text-xl font-extrabold text-center">
                                        Total General del Proyecto
                                    </span>
                                    <div className="text-right whitespace-nowrap">
                                        <div className="text-2xl font-extrabold text-copper-metallic">{totalInvestment.mxn}</div>
                                        <div className="text-lg font-semibold text-pearl-gray">{totalInvestment.usd}</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    );
};