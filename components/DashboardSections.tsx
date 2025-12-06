
import React, { useState } from 'react';
import { GlassCard, SpotlightCard, KpiCard, SectionHeader, Grid, Table, ProgressBar, AnimatedList, RangeSlider, AnimatedNumber, TabButton } from './ReactBits';
import { TrendLineChart, SimpleBarChart, MultiBarChart, ComposedTrendChart, StackedBarChart, PeerRadarChart, ScatterTrendChart, DonutChart, chartTheme } from './FinancialCharts';
import { 
  revenueData, moatPoints, forecastData, ratios, dcfValuation,
  keyFinancialMetricsPage1, keyFinancialRatiosPage1, historicalReturns, sharePriceTrend,
  incomeStatementHistory, incomeStatementForecast, profitabilitySummary, revenueProfitTrend,
  balanceSheetHistory, balanceSheetRecent, assetLiabilityTrend,
  ratioAnalysisFull, ratioVisualData, peerBetaAnalysis, costOfDebt, capitalStructure,
  waccCalculation, leveredBetaCalculation, costOfEquity, betaSensitivity,
  nopatDetailed, investedCapitalDetailed, roicCalculation, reinvestmentRateCalculation,
  fcfForecastModel, dcfValuationModel, sharePriceCalculation,
  dupontAnalysisTable, dupontVisualData, dupontTrends, peerScatterData, forecastLongTerm,
  overviewChartData, segmentRevenueData, overviewMetrics, overviewInsights,
  mergedIncomeStatement, mergedBalanceSheet, mergedCashFlow,
  peerMarketData, peerReturnsData, peerFinancialsData, peerEVStatsData, peerMultiplesData
} from '../data/amazonData';
import { AnimatePresence, motion } from 'framer-motion';

// Helper to convert object to array for Table component
const objToRow = (items: any[], headers: string[]) => {
  return items.map(item => headers.map(key => item[key] || item[key.toLowerCase()] || '-'));
};

interface MetricRowProps {
  label: string;
  value: string;
  trend?: string;
  isRed?: boolean;
  isGreen?: boolean;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, trend, isRed, isGreen }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 group hover:bg-white/5 px-3 -mx-3 rounded-lg transition-colors">
    <span className="text-xs text-textSecondary font-light group-hover:text-white/80 transition-colors tracking-wide">{label}</span>
    <div className="text-right flex items-center gap-2">
      <div className={`font-mono font-medium text-sm tracking-tight ${isRed ? 'text-zinc-500' : isGreen ? 'text-white' : 'text-textPrimary'}`}>{value}</div>
      {trend && <div className="text-[10px] text-textSecondary opacity-60 bg-white/5 px-1.5 py-0.5 rounded">{trend}</div>}
    </div>
  </div>
);

// 1. Overview
export const OverviewSection = () => {
  const [activeChartTab, setActiveChartTab] = useState<'margin' | 'eps' | 'growth'>('margin');

  return (
    <div>
      <SectionHeader title="Overview" subtitle="Key Financial Metrics & Moat Analysis" />
      
      {/* Row 1: Metrics Groups */}
      <Grid cols={3} className="mb-8">
        <GlassCard title="Valuation Metrics">
          <div className="flex flex-col gap-1">
            {overviewMetrics.valuation.map((m, i) => (
              <MetricRow key={i} {...m} />
            ))}
          </div>
        </GlassCard>
        <GlassCard title="Profitability Ratios">
          <div className="flex flex-col gap-1">
            {overviewMetrics.profitability.map((m, i) => (
              <MetricRow key={i} {...m} />
            ))}
          </div>
        </GlassCard>
        <GlassCard title="Financial Health">
          <div className="flex flex-col gap-1">
            {overviewMetrics.health.map((m, i) => (
              <MetricRow key={i} {...m} />
            ))}
          </div>
        </GlassCard>
      </Grid>

      {/* Row 2: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <SpotlightCard title="Revenue & Profitability Trends">
            <div className="flex gap-2 mb-6">
              <TabButton active={activeChartTab === 'margin'} onClick={() => setActiveChartTab('margin')}>Margins</TabButton>
              <TabButton active={activeChartTab === 'eps'} onClick={() => setActiveChartTab('eps')}>EPS Growth</TabButton>
              <TabButton active={activeChartTab === 'growth'} onClick={() => setActiveChartTab('growth')}>Revenue Growth</TabButton>
            </div>
            
            <div className="h-[300px]">
              <AnimatePresence mode="wait">
                {activeChartTab === 'margin' && (
                  <motion.div 
                    key="margin"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="h-full"
                  >
                    <TrendLineChart 
                      data={overviewChartData.margins} 
                      xKey="year" 
                      prefix="" suffix="%"
                      dataKeys={[
                        { key: 'gross', color: chartTheme.colors[0] }, 
                        { key: 'ebitda', color: chartTheme.colors[2] }, 
                        { key: 'ebit', color: chartTheme.colors[1] } 
                      ]} 
                    />
                  </motion.div>
                )}
                {activeChartTab === 'eps' && (
                  <motion.div 
                    key="eps"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="h-full"
                  >
                    <SimpleBarChart 
                      data={overviewChartData.eps} 
                      xKey="year" 
                      barKey="eps"
                      prefix="$"
                      color={chartTheme.colors[0]}
                      hideLegend={true}
                    />
                  </motion.div>
                )}
                {activeChartTab === 'growth' && (
                  <motion.div 
                    key="growth"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="h-full"
                  >
                    <TrendLineChart 
                      data={overviewChartData.growth} 
                      xKey="year" 
                      prefix="" suffix="%"
                      dataKeys={[{ key: 'growth', color: chartTheme.colors[0] }]} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SpotlightCard>
        </div>

        <GlassCard title="Revenue by Segment (2024)">
          <div className="grid grid-cols-1 gap-6 items-center">
            <div className="flex justify-center">
              <DonutChart 
                data={segmentRevenueData} 
                colors={[chartTheme.colors[0], chartTheme.colors[1], chartTheme.colors[2], chartTheme.colors[3]]} 
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {segmentRevenueData.map((seg, i) => (
                <div key={i} className="bg-white/5 rounded p-2 text-center border border-white/5">
                  <div className="text-[10px] text-textSecondary uppercase tracking-wider mb-1">{seg.name}</div>
                  <div className="text-lg font-bold text-white">{seg.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Row 3: Qualitative */}
      <Grid cols={3} className="mb-12">
        <GlassCard title="Competitive Moats">
          <AnimatedList items={moatPoints} icon={<span className="text-white text-xs">◆</span>} />
        </GlassCard>

        <GlassCard title="Capital Efficiency Metrics">
          <div className="flex flex-col gap-1">
            {overviewMetrics.capitalEfficiency.map((m, i) => (
              <MetricRow key={i} {...m} />
            ))}
          </div>
        </GlassCard>

        <SpotlightCard title="Key Insights & Strategic Drivers">
          <ul className="space-y-3">
            {overviewInsights.map((insight, i) => (
              <li key={i} className="text-xs leading-relaxed text-textSecondary border-l-2 border-white/20 pl-3 py-1 bg-white/[0.02] rounded-r-md">
                <span className="text-white/90 font-medium block mb-0.5">{insight.title}</span>
                {insight.text}
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </Grid>
    </div>
  );
};

// 2. Financials (Formerly Income Statement)
export const FinancialsSection = () => {
  const [growth2025, setGrowth2025] = useState(12.30);
  const revenue2024 = 637959; 
  const simulatedRevenue2025 = revenue2024 * (1 + growth2025 / 100);
  const impliedEBITDA2025 = simulatedRevenue2025 * 0.1935;

  return (
    <div>
      <SectionHeader title="Financial Statements" subtitle="Comprehensive Financial History & Forecasts" />
      
      {/* Merged Financial Statements */}
      <div className="space-y-8 mb-12">
        <GlassCard title="Income Statement (2020A - 2030E)">
          <div className="overflow-x-auto">
            <Table 
              headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A', 'LTM', '2025E', '2026E', '2027E', '2028E', '2029E', '2030E']}
              rows={mergedIncomeStatement.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['LTM'], i['2025E'], i['2026E'], i['2027E'], i['2028E'], i['2029E'], i['2030E']])}
              highlightRow={7} 
            />
          </div>
        </GlassCard>

        <GlassCard title="Balance Sheet Summary (2020A - Q3 2025)">
          <div className="overflow-x-auto">
            <Table 
              headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A', 'Q3-25']}
              rows={mergedBalanceSheet.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['Q3-25']])}
            />
          </div>
        </GlassCard>

        <GlassCard title="Cash Flow Statement (2020A - 2030E)">
          <div className="overflow-x-auto">
            <Table 
              headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A', 'LTM', '2025E', '2026E', '2027E', '2028E', '2029E', '2030E']}
              rows={mergedCashFlow.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['LTM'], i['2025E'], i['2026E'], i['2027E'], i['2028E'], i['2029E'], i['2030E']])}
              highlightRow={4} 
            />
          </div>
        </GlassCard>
      </div>

      <SectionHeader title="Financial Analysis" subtitle="Deep Dive & Scenarios" />
      <div className="space-y-8">
        
        <SpotlightCard title="Revenue & Profitability Trend (2020-2025E)">
          <ComposedTrendChart 
            data={revenueProfitTrend} 
            xKey="year" 
            bars={['revenue']}
            lines={['netIncome', 'ebitda']}
            prefix="$"
          />
        </SpotlightCard>

        <div className="grid grid-cols-1 gap-8">
            <GlassCard title="Long Term Forecasts (2027E - 2030E)">
            <Table 
                headers={['Item', '2027E', '2028E', '2029E', '2030E']}
                rows={forecastLongTerm.map(i => [i.item, i['2027E'], i['2028E'], i['2029E'], i['2030E']])}
            />
            </GlassCard>
        </div>

        <SpotlightCard title="Forecast Scenario Simulator (2025E)" className="border-t-2 border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-textSecondary text-sm mb-6 leading-relaxed">
                Adjust the expected revenue growth rate for 2025E to see the potential impact on Top Line Revenue and Implied EBITDA (assuming constant margins).
              </p>
              <RangeSlider 
                label="2025E Revenue Growth" 
                value={growth2025} 
                onChange={setGrowth2025} 
                min={0} 
                max={30} 
                step={0.1} 
                suffix="%" 
              />
            </div>
            <div className="space-y-6">
              <div className="bg-surfaceHighlight/20 rounded-xl p-5 border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-textSecondary mb-1">Projected Revenue 2025E</p>
                <p className="text-3xl font-bold text-white tracking-tight">
                  $<AnimatedNumber value={simulatedRevenue2025} />
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Base Estimate: $716,428
                </p>
              </div>
              <div className="bg-surfaceHighlight/20 rounded-xl p-5 border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-textSecondary mb-1">Implied EBITDA 2025E</p>
                <p className="text-3xl font-bold text-white tracking-tight">
                  $<AnimatedNumber value={impliedEBITDA2025} />
                </p>
                <p className="text-xs text-textSecondary mt-1 opacity-60">
                  @ 19.35% Margin
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

// 3. Balance Sheet
export const BalanceSheetSection = () => (
  <div>
    <SectionHeader title="Balance Sheet" subtitle="Financial Position Analysis" />
    <div className="space-y-8">
      <GlassCard title="Comprehensive Balance Sheet (2020A - Q3 2025)">
        <div className="overflow-x-auto">
          <Table 
            headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A', 'Q3-25']}
            rows={mergedBalanceSheet.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['Q3-25']])}
          />
        </div>
      </GlassCard>
      
      <SpotlightCard title="Asset & Liability Composition">
        <StackedBarChart 
          data={assetLiabilityTrend} 
          xKey="year" 
          keys={['assets', 'liabilities', 'equity']}
          prefix="$"
        />
      </SpotlightCard>
    </div>
  </div>
);

// 5. Ratio Analytics
export const RatioAnalyticsSection = () => (
  <div>
    <SectionHeader title="Ratio Analytics" subtitle="Comprehensive Ratio Analysis" />
    
    <div className="mb-8">
      <GlassCard title="Profitability Profile (Radar)">
        <PeerRadarChart data={ratioVisualData.map(d => ({ metric: d.metric, Amazon: d['2024'], PeerAvg: d['2020'] }))} />
      </GlassCard>
    </div>

    <GlassCard title="Ratio Analysis (2020A - 2024A)">
      <Table 
        headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A']}
        rows={ratioAnalysisFull.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A']])}
      />
    </GlassCard>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <SpotlightCard title="Cost of Debt">
        <Table 
          headers={['Item', 'Value']}
          rows={costOfDebt.map(i => [i.item, i.value])}
        />
      </SpotlightCard>
      <SpotlightCard title="Capital Structure">
        <Table 
          headers={['Component', 'Current', 'Target']}
          rows={capitalStructure.map(i => [i.component, i.current, i.target])}
        />
      </SpotlightCard>
    </div>
  </div>
);

// 6. ROE / DuPont
export const DuPontSection = () => (
  <div>
    <SectionHeader title="DuPont Analysis" subtitle="Decomposition of Return on Equity" />
    
    <div className="space-y-8 mb-12">
      <SpotlightCard title="Net Profit">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="netProfit" prefix="$" color={chartTheme.colors[0]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="Revenue">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="rev" prefix="$" color={chartTheme.colors[0]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="Total Assets">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="assets" prefix="$" color={chartTheme.colors[0]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="Shareholder Equity">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="equity" prefix="$" color={chartTheme.colors[0]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="ROE">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="roe" prefix="" suffix="%" color={chartTheme.colors[1]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="ROA">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="roa" prefix="" suffix="%" color={chartTheme.colors[1]} hideLegend={true} />
      </SpotlightCard>
      <SpotlightCard title="Financial Leverage">
        <SimpleBarChart data={dupontTrends} xKey="year" barKey="leverage" prefix="" suffix="x" color={chartTheme.colors[2]} hideLegend={true} />
      </SpotlightCard>
    </div>

    <SpotlightCard title="DuPont Analysis Table (2020A - 2024A)">
      <Table 
        headers={['Metric', '2020A', '2021A', '2022A', '2023A', '2024A']}
        rows={dupontAnalysisTable.map(i => [i.metric, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A']])}
      />
    </SpotlightCard>
    
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <GlassCard title="NOPAT Calculation">
        <Table 
          headers={['Item', '2020A', '2021A', '2022A', '2023A', '2024A', '2025 Q3']}
          rows={nopatDetailed.map(i => [i.item, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['2025 Q3']])}
        />
      </GlassCard>
      <GlassCard title="Invested Capital Calculation">
        <Table 
          headers={['Item', '2020A', '2021A', '2022A', '2023A', '2024A', '2025 Q3']}
          rows={investedCapitalDetailed.map(i => [i.item, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['2025 Q3']])}
        />
      </GlassCard>
    </div>
    
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <GlassCard title="ROIC Calculation">
        <Table 
          headers={['Item', '2020A', '2021A', '2022A', '2023A', '2024A', '2025 Q3']}
          rows={roicCalculation.map(i => [i.item, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['2025 Q3']])}
        />
      </GlassCard>
      <GlassCard title="Reinvestment Rate Calculation">
        <Table 
          headers={['Item', '2020A', '2021A', '2022A', '2023A', '2024A', '2025 Q3']}
          rows={reinvestmentRateCalculation.map(i => [i.item, i['2020A'], i['2021A'], i['2022A'], i['2023A'], i['2024A'], i['2025 Q3']])}
        />
      </GlassCard>
    </div>
  </div>
);

// 7. DCF Valuation
export const ValuationSection = () => {
  const [simWacc, setSimWacc] = useState(11.76);
  const [simGrowth, setSimGrowth] = useState(7.0);

  const stage1PV = 434972;
  const terminalNumerator = 150563; 
  const waccDecimal = simWacc / 100;
  const growthDecimal = simGrowth / 100;
  const denominator = Math.max(0.001, waccDecimal - growthDecimal);
  const newTerminalValue = terminalNumerator / denominator;
  const newPVTerminalValue = newTerminalValue * 0.606;
  const newEnterpriseValue = stage1PV + newPVTerminalValue;
  const netDebtAdjustment = 4764; 
  const newEquityValue = newEnterpriseValue + netDebtAdjustment;
  const sharesOutstanding = 10600;
  const newSharePrice = newEquityValue / sharesOutstanding;

  return (
    <div>
      <SectionHeader title="DCF Valuation" subtitle="Intrinsic Value Calculation" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <GlassCard title="WACC Calculation">
          <Table 
            headers={['Component', 'Cost', 'Weight', 'Weighted Cost']}
            rows={waccCalculation.map(i => [i.component, i.cost, i.weight, i.weightedCost])}
          />
        </GlassCard>
        <SpotlightCard title="Cost of Equity">
          <Table 
            headers={['Item', 'Value']}
            rows={costOfEquity.map(i => [i.item, i.value])}
          />
        </SpotlightCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <GlassCard title="Levered Beta Calculation">
          <Table 
            headers={['Item', 'Value']}
            rows={leveredBetaCalculation.map(i => [i.item, i.value])}
          />
        </GlassCard>
        <SpotlightCard title="Beta Sensitivity Visual">
          <SimpleBarChart 
            data={betaSensitivity.map(b => ({ label: b.de, beta: parseFloat(b.levBeta) }))} 
            xKey="label" 
            barKey="beta" 
            color={chartTheme.colors[0]}
            prefix=""
          />
        </SpotlightCard>
      </div>
      
      <div className="mb-8">
        <SpotlightCard title="FCF Forecast (2026E - 2030E)">
          <Table 
            headers={['Item', '2026E', '2027E', '2028E', '2029E', '2030E']}
            rows={fcfForecastModel.map(i => [i.item, i['2026E'], i['2027E'], i['2028E'], i['2029E'], i['2030E']])}
          />
        </SpotlightCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <GlassCard title="DCF Valuation Model">
          <Table 
            headers={['Item', 'Value']}
            rows={dcfValuationModel.map(i => [i.item, i.value])}
          />
        </GlassCard>
        <SpotlightCard title="Share Price Calculation">
          <Table 
            headers={['Item', 'Value']}
            rows={sharePriceCalculation.map(i => [i.item, i.value])}
          />
        </SpotlightCard>
      </div>

      <SpotlightCard title="Valuation Sensitivity Simulator" className="border-t-2 border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-textSecondary text-sm mb-6 leading-relaxed">
              Adjust WACC and Terminal Growth Rate to see how they impact the estimated Intrinsic Share Price.
            </p>
            <RangeSlider 
              label="WACC" 
              value={simWacc} 
              onChange={setSimWacc} 
              min={8} 
              max={15} 
              step={0.01} 
              suffix="%" 
            />
            <RangeSlider 
              label="Terminal Growth Rate" 
              value={simGrowth} 
              onChange={setSimGrowth} 
              min={2} 
              max={10} 
              step={0.1} 
              suffix="%" 
            />
          </div>
          <div className="space-y-6">
            <div className="bg-surfaceHighlight/20 rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] uppercase tracking-widest text-textSecondary mb-2">Estimated Share Price</p>
              <p className="text-5xl font-bold text-white tracking-tighter">
                $<AnimatedNumber value={newSharePrice} />
              </p>
              <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-white to-zinc-600 transition-all duration-500"
                  style={{ width: `${Math.min((newSharePrice / 300) * 100, 100)}%` }}
                />
              </div>
              <p className="text-xs text-textSecondary mt-3 font-mono opacity-60">
                Base Price: $222.26
              </p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

// 10. Peer Comparison
export const PeerSection = () => (
  <div>
    <SectionHeader title="Peer Comparison as of November 2025" subtitle="Market, Valuation & Performance Metrics" />
    
    <div className="space-y-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <SpotlightCard title="Valuation Matrix (EV/Revenue vs EV/EBITDA)">
          <ScatterTrendChart 
            data={peerScatterData} 
            xKey="evRev" 
            yKey="evEbitda" 
            nameKey="company"
          />
        </SpotlightCard>
      </div>

      <div className="w-full space-y-8">
        <GlassCard title="Market Overview">
          <div className="overflow-x-auto">
            <Table 
              headers={['Symbol', 'Company Name', 'Market Cap', 'Price', '% Change', 'Volume', 'PE Ratio', 'Revenue']}
              rows={peerMarketData.map(i => [i.symbol, i.name, i.mktCap, i.price, i.change, i.vol, i.pe, i.rev])}
            />
          </div>
        </GlassCard>

        <GlassCard title="Historical Returns">
          <div className="overflow-x-auto">
            <Table 
              headers={['Symbol', '1M', '6M', 'YTD', '1Y', '5Y', '10Y', '20Y']}
              rows={peerReturnsData.map(i => [i.symbol, i.ret1m, i.ret6m, i.retYtd, i.ret1y, i.ret5y, i.ret10y, i.ret20y])}
            />
          </div>
        </GlassCard>

        <GlassCard title="Financial Performance (TTM)">
          <div className="overflow-x-auto">
            <Table 
              headers={['Symbol', 'Revenue', 'Rev Growth', 'Gross Profit', 'Op. Income', 'Net Income', 'EPS', 'EPS Growth']}
              rows={peerFinancialsData.map(i => [i.symbol, i.rev, i.revGrowth, i.gross, i.opInc, i.netInc, i.eps, i.epsGrowth])}
            />
          </div>
        </GlassCard>

        <Grid cols={2}>
          <GlassCard title="Enterprise Value Stats">
            <div className="overflow-x-auto">
              <Table 
                headers={['Company', 'Ticker', 'Share Price', 'Equity Value', 'Enterprise Value']}
                rows={peerEVStatsData.map(i => [i.company, i.ticker, i.price, i.equity, i.ev])}
              />
            </div>
          </GlassCard>
          <GlassCard title="Valuation Multiples">
            <div className="overflow-x-auto">
              <Table 
                headers={['Company', 'Ticker', 'EV/Revenue', 'EV/EBITDA', 'P/E']}
                rows={peerMultiplesData.map(i => [i.company, i.ticker, i.evRev, i.evEbitda, i.pe])}
              />
            </div>
          </GlassCard>
        </Grid>
      </div>
    </div>
  </div>
);
