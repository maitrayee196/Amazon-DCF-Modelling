export interface FinancialMetric {
  label: string;
  value: string | number;
  change?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  prefix?: string;
  suffix?: string;
}

export interface YearData {
  year: string;
  [key: string]: number | string;
}

export interface PeerData {
  company: string;
  ticker: string;
  marketCap: string;
  evRevenue: number;
  evEbitda: number;
  peRatio?: number;
}

export interface ValuationData {
  wacc: number;
  terminalGrowthRate: number;
  pvOfFcff: number;
  terminalValue: number;
  pvTerminalValue: number;
  enterpriseValue: number;
  netDebt: number;
  equityValue: number;
  sharesOutstanding: number;
  intrinsicPrice: number;
  currentPrice: number;
}
