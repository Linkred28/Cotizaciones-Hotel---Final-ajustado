import React from 'react';

export interface ExecutiveSummaryData {
  heroStat: {
    value: string;
    label: string;
  };
  mainGoal: string;
  points: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
  }[];
}

export interface ObjectivePoint {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export interface KeyComponent {
  title: string;
  value: React.ReactNode;
  investment: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface BenefitPoint {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export interface Kpi {
  metric: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface BeforeAfter {
  before: {
    title: string;
    points: string[];
  };
  after: {
    title: string;
    points: string[];
  };
}

export interface Proposal {
  id: number;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  impactClaim: string;
  executiveSummary: ExecutiveSummaryData;
  objective: ObjectivePoint[];
  investment: {
    total: string;
    usd: string;
  };
  keyComponents: KeyComponent[];
  strategicBenefits: BenefitPoint[];
  kpis: Kpi[];
  beforeAfter: BeforeAfter;
}
