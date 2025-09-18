import React, { useState, useEffect } from 'react';
import { Proposal } from './types';
import { PROPOSALS } from './constants';
import { CostSummarySection, ProposalDetail } from './components/ProposalDetail';
import { CurrencyDollarIcon } from './components/icons';

const Header: React.FC = () => (
    <header className="bg-sapphire-dark text-white-smoke p-8 shadow-2xl header-animated-bg">
        <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-lg font-bold text-pearl-gray tracking-widest uppercase">Propuesta Estratégica</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 text-white-smoke title-animated-text">European Life Style Executive Suites & Gallery</h1>
        </div>
    </header>
);

interface ProposalSelectorProps {
    proposals: Proposal[];
    selectedProposalId: number;
    onSelectProposal: (id: number) => void;
}

const ProposalSelector: React.FC<ProposalSelectorProps> = ({ proposals, selectedProposalId, onSelectProposal }) => (
    <nav className="bg-white-smoke py-6 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-nowrap items-center md:justify-center gap-4 md:gap-6 overflow-x-auto hide-scrollbar py-4">
                {proposals.map(proposal => (
                    <button
                        key={proposal.id}
                        onClick={() => onSelectProposal(proposal.id)}
                        title={proposal.title}
                        className={`
                            group flex-shrink-0
                            w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                            rounded-2xl border-2 transition-all duration-300 transform 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-copper-metallic
                            ${selectedProposalId === proposal.id
                                ? 'bg-sapphire-dark text-white-smoke border-copper-metallic scale-110 shadow-lg'
                                : 'bg-white text-sapphire-dark border-pearl-gray hover:bg-pearl-gray/50 hover:border-sapphire-dark hover:scale-105 hover:shadow-md'
                            }
                        `}
                    >
                        <proposal.icon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110" />
                    </button>
                ))}
                <button
                    key={0}
                    onClick={() => onSelectProposal(0)}
                    title="Resumen de Inversión"
                    className={`
                        group flex-shrink-0
                        w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                        rounded-2xl border-2 transition-all duration-300 transform 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-copper-metallic
                        ${selectedProposalId === 0
                            ? 'bg-sapphire-dark text-white-smoke border-copper-metallic scale-110 shadow-lg'
                            : 'bg-white text-sapphire-dark border-pearl-gray hover:bg-pearl-gray/50 hover:border-sapphire-dark hover:scale-105 hover:shadow-md'
                        }
                    `}
                >
                    <CurrencyDollarIcon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110" />
                </button>
            </div>
        </div>
    </nav>
);

const Footer: React.FC = () => (
    <footer className="bg-sapphire-dark text-white-smoke py-12 mt-16">
        <div className="container mx-auto max-w-5xl text-center px-4">
            <p className="text-2xl md:text-3xl font-light italic text-pearl-gray">
                “European Life Style Executive Suites & Gallery: de la operación tradicional a la transformación digital.”
            </p>
        </div>
    </footer>
);

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center py-20" role="status" aria-live="polite">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-copper-metallic"></div>
        <span className="sr-only">Cargando...</span>
    </div>
);


const App: React.FC = () => {
    const [selectedProposalId, setSelectedProposalId] = useState<number>(1);
    const [activeProposal, setActiveProposal] = useState<Proposal | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // Add a small delay for a smoother transition effect
        const timer = setTimeout(() => {
            if (selectedProposalId === 0) {
                setActiveProposal(null);
            } else {
                const proposal = PROPOSALS.find(p => p.id === selectedProposalId) || null;
                setActiveProposal(proposal);
            }
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedProposalId]);

    const handleSelectProposal = (id: number) => {
        if (id !== selectedProposalId) {
            setSelectedProposalId(id);
        }
    };

    return (
        <div className="font-sans antialiased text-sapphire-dark bg-white-smoke min-h-screen">
            <Header />
            <ProposalSelector
                proposals={PROPOSALS}
                selectedProposalId={selectedProposalId}
                onSelectProposal={handleSelectProposal}
            />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="animate-fade-in">
                        {selectedProposalId !== 0 && activeProposal && <ProposalDetail proposal={activeProposal} />}
                        {selectedProposalId === 0 && <CostSummarySection allProposals={PROPOSALS} />}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;