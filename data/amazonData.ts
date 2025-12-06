
import { YearData, PeerData, ValuationData } from '../types';

// --- Page 1: Overview Data ---
export const keyFinancialMetricsPage1 = [
  { metric: 'Sales Growth', '2020': '37.62%', '2021': '21.70%' },
  { metric: 'EBITDA Margin', '2020': '13.59%', '2021': '12.62%' },
  { metric: 'EBIT Margin', '2020': '6.43%', '2021': '5.30%' },
  { metric: 'Gross Profit Margin', '2020': '39.57%', '2021': '42.03%' },
  { metric: 'Net Profit Margin', '2020': '5.52%', '2021': '7.10%' },
  { metric: 'EPS $', '2020': '2.09', '2021': '3.24' },
  { metric: 'DPS $', '2020': '0', '2021': '0' }
];

export const keyFinancialRatiosPage1 = [
  { metric: 'Return on Equity %', '2020': '22.84%', '2021': '24.13%' },
  { metric: 'Return on Capital Employed', '2020': '12.74%', '2021': '8.83%' },
  { metric: 'Debt/ Equity', '2020': '34.06%', '2021': '35.26%' },
  { metric: 'CFO/ Total Assets', '2020': '20.57%', '2021': '11.02%' },
  { metric: 'Inventory Turnover', '2020': '6.71%', '2021': '-3.13%' }
];

export const historicalReturns = [
  { metric: 'Return 1M', value: '5.95%' },
  { metric: 'Return 6M', value: '42.79%' },
  { metric: 'Return YTD', value: '14.80%' },
  { metric: 'Return 1Y', value: '21.13%' },
  { metric: 'Return 5Y', value: '139.57%' },
  { metric: 'Return 10Y', value: '981.74%' },
  { metric: 'Return 20Y', value: '13227.54%' }
];

// Mock data to replicate the 5-year share price graph visual in PDF Page 23
export const sharePriceTrend = [
  { date: '2020', price: 160 },
  { date: '2021', price: 175 },
  { date: '2022', price: 145 },
  { date: '2022 Mid', price: 110 },
  { date: '2023', price: 85 },
  { date: '2023 Mid', price: 130 },
  { date: '2024', price: 155 },
  { date: '2024 Mid', price: 185 },
  { date: '2025', price: 234.42 },
];

// --- New Overview Data Matching HTML Source ---
export const overviewChartData = {
  margins: [
    { year: '2020', gross: 39.57, ebitda: 13.59, ebit: 6.43 },
    { year: '2021', gross: 42.03, ebitda: 12.62, ebit: 5.30 },
    { year: '2022', gross: 43.81, ebitda: 11.60, ebit: 2.38 },
    { year: '2023', gross: 46.98, ebitda: 17.20, ebit: 6.41 },
    { year: '2024', gross: 48.86, ebitda: 20.28, ebit: 10.75 },
  ],
  eps: [
    { year: '2020', eps: 2.09 },
    { year: '2021', eps: 3.24 },
    { year: '2022', eps: -0.27 },
    { year: '2023', eps: 2.95 },
    { year: '2024', eps: 7.32 },
  ],
  growth: [
    { year: '2020', growth: 37.62 },
    { year: '2021', growth: 21.70 },
    { year: '2022', growth: 9.40 },
    { year: '2023', growth: 11.83 },
    { year: '2024', growth: 10.99 },
  ]
};

export const segmentRevenueData = [
  { name: 'Online Stores', value: 47.5 },
  { name: 'AWS', value: 17.0 },
  { name: 'Physical Stores', value: 14.5 },
  { name: 'Other', value: 21.0 },
];

export const overviewMetrics = {
  valuation: [
    { label: 'Fair Value (DCF)', value: '$222.26' },
    { label: 'Current Price', value: '$230.84' },
    { label: 'Upside/(Downside)', value: '-3.7%', isRed: true },
    { label: 'Return on Equity', value: '26.78%' },
    { label: 'ROIC', value: '15.40%' },
  ],
  profitability: [
    { label: 'Gross Margin (2024)', value: '48.86%' },
    { label: 'EBITDA Margin (2024)', value: '20.28%' },
    { label: 'EBIT Margin (2024)', value: '10.75%' },
    { label: 'Net Profit Margin (2024)', value: '9.28%' },
    { label: 'EPS (2024A)', value: '$7.32' },
  ],
  health: [
    { label: 'Debt-to-Equity (2024)', value: '20.16%' },
    { label: 'Operating Cash Flow', value: '$115.88B' },
    { label: 'Free Cash Flow (2024)', value: '$32.88B' },
    { label: 'Capital Expenditure', value: '$83.0B' },
    { label: 'CFO/Total Assets', value: '18.54%' },
  ],
  capitalEfficiency: [
    { label: 'Sales 2024A', value: '$637.96B' },
    { label: 'Sales Growth (2024)', value: '11.0%' },
    { label: 'CapEx as % of Sales', value: '13.0%' },
    { label: 'Op. Margin Expansion', value: '+4.1pp', isGreen: true },
    { label: 'Dividend per Share', value: '$0.00' },
  ]
};

export const overviewInsights = [
  { title: "AWS Profit Engine", text: "AWS contributes 17% of revenue but over 50% of operating income with 38%+ margins, driving overall profitability." },
  { title: "Operating Leverage", text: "Operating margin expansion from 6.4% (2023) to 10.8% (2024) showing strong operational efficiency improvements." },
  { title: "Free Cash Flow Recovery", text: "FCF improved dramatically to $20.8B in 2024 from negative territory in 2021-2022." },
  { title: "North America Profitability", text: "Segment returned to profitability with improved fulfillment efficiency and cost optimization." },
  { title: "AI Infrastructure Investment", text: "CapEx of $83B (2024) focused on AWS infrastructure and fulfillment capacity for AI/ML workloads." },
  { title: "AI & Innovation", text: "AWS AI services, Trainium chips, and Amazon Nova foundation models accelerating adoption." },
  { title: "Advertising Growth", text: "Advertising revenue exceeding $50B annually, providing high-margin revenue diversification." },
  { title: "Regulatory Headwinds", text: "Increasing antitrust scrutiny globally on market dominance and labor practices." }
];

// --- Comprehensive Financial Tables (Merged) ---
export const mergedIncomeStatement = [
  { metric: 'Sales', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983', '2023A': '5,74,785', '2024A': '6,37,959', 'LTM': '6,91,330', '2025E': '7,16,428', '2026E': '8,02,399', '2027E': '8,90,663', '2028E': '9,79,730', '2029E': '10,67,905', '2030E': '11,64,017' },
  { metric: 'Growth', '2020A': '37.62%', '2021A': '21.70%', '2022A': '9.40%', '2023A': '11.83%', '2024A': '10.99%', 'LTM': '11.48%', '2025E': '12.30%', '2026E': '12.00%', '2027E': '11.00%', '2028E': '10.00%', '2029E': '9.00%', '2030E': '9.00%' },
  { metric: 'COGS', '2020A': '2,33,307', '2021A': '2,72,344', '2022A': '2,88,831', '2023A': '3,04,739', '2024A': '3,26,288', 'LTM': '3,45,348', '2025E': '3,66,421', '2026E': '4,10,392', '2027E': '4,55,535', '2028E': '5,01,089', '2029E': '5,46,187', '2030E': '5,95,343' },
  { metric: 'Gross Profit', '2020A': '1,52,757', '2021A': '1,97,478', '2022A': '2,25,152', '2023A': '2,70,046', '2024A': '3,11,671', 'LTM': '3,45,982', '2025E': '3,28,575', '2026E': '3,67,927', '2027E': '4,12,060', '2028E': '4,61,550', '2029E': '4,61,550', '2030E': '4,61,550' },
  { metric: 'OpEx', '2020A': '1,27,935', '2021A': '1,72,599', '2022A': '2,12,904', '2023A': '2,33,194', '2024A': '2,43,078', 'LTM': '2,69,781', '2025E': '2,47,271', '2026E': '2,76,944', '2027E': '3,07,407', '2028E': '3,38,148', '2029E': '3,68,581', '2030E': '4,01,754' },
  { metric: 'EBIT', '2020A': '24,822', '2021A': '24,879', '2022A': '12,248', '2023A': '36,852', '2024A': '68,593', 'LTM': '76,201', '2025E': '81,304', '2026E': '90,983', '2027E': '1,04,653', '2028E': '1,23,402', '2029E': '92,969', '2030E': '59,796' },
  { metric: 'EBITDA', '2020A': '52,483', '2021A': '59,312', '2022A': '59,620', '2023A': '98,848', '2024A': '1,29,389', 'LTM': '1,28,996', '2025E': '1,38,624', '2026E': '1,55,448', '2027E': '1,75,971', '2028E': '1,94,720', '2029E': '1,64,287', '2030E': '1,31,115' },
  { metric: 'Net Income', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719', '2023A': '30,425', '2024A': '76,589', 'LTM': '76,482', '2025E': '93,385', '2026E': '79,396', '2027E': '88,494', '2028E': '99,381', '2029E': '99,381', '2030E': '99,381' },
  { metric: 'EPS ($)', '2020A': '2.09', '2021A': '3.24', '2022A': '-0.27', '2023A': '2.95', '2024A': '7.32', 'LTM': '7.22', '2025E': '8.81', '2026E': '7.49', '2027E': '8.35', '2028E': '9.38', '2029E': '9.38', '2030E': '9.38' },
];

export const mergedBalanceSheet = [
  { metric: 'Cash & Equiv', '2020A': '42,122', '2021A': '36,220', '2022A': '53,888', '2023A': '73,890', '2024A': '73,387', 'Q3-25': '70,349' },
  { metric: 'Short Term Inv', '2020A': '42,274', '2021A': '59,829', '2022A': '16,138', '2023A': '13,393', '2024A': '22,423', 'Q3-25': '25,000' },
  { metric: 'Accts Rec', '2020A': '24,542', '2021A': '32,891', '2022A': '42,360', '2023A': '43,706', '2024A': '57,696', 'Q3-25': '61,500' },
  { metric: 'Inventory', '2020A': '23,795', '2021A': '32,640', '2022A': '34,405', '2023A': '33,318', '2024A': '34,214', 'Q3-25': '36,800' },
  { metric: 'Other Curr Assets', '2020A': '14,231', '2021A': '16,478', '2022A': '18,112', '2023A': '21,926', '2024A': '22,147', 'Q3-25': '24,500' },
  { metric: 'Total Current Assets', '2020A': '1,32,733', '2021A': '1,61,580', '2022A': '1,46,791', '2023A': '1,62,396', '2024A': '1,90,867', 'Q3-25': '2,05,000' },
  { metric: 'Gross PPE', '2020A': '1,59,281', '2021A': '1,86,715', '2022A': '2,10,697', '2023A': '2,29,478', '2024A': '2,87,906', 'Q3-25': '3,20,000' },
  { metric: 'Acc. Dep.', '2020A': '-46,167', '2021A': '-66,405', '2022A': '-84,777', '2023A': '-1,06,646', '2024A': '-1,35,241', 'Q3-25': '-1,52,000' },
  { metric: 'Net PPE', '2020A': '1,13,114', '2021A': '1,20,310', '2022A': '1,25,920', '2023A': '1,22,832', '2024A': '1,52,665', 'Q3-25': '1,68,000' },
  { metric: 'Op. Leases', '2020A': '37,553', '2021A': '48,744', '2022A': '61,356', '2023A': '67,651', '2024A': '76,141', 'Q3-25': '82,000' },
  { metric: 'Goodwill', '2020A': '15,017', '2021A': '15,371', '2022A': '19,622', '2023A': '20,288', '2024A': '23,074', 'Q3-25': '24,000' },
  { metric: 'Other Intangibles', '2020A': '3,735', '2021A': '3,650', '2022A': '4,326', '2023A': '7,375', '2024A': '8,602', 'Q3-25': '9,000' },
  { metric: 'Other LT Assets', '2020A': '19,043', '2021A': '70,894', '2022A': '1,04,660', '2023A': '1,47,312', '2024A': '1,73,545', 'Q3-25': '1,90,000' },
  { metric: 'Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675', '2023A': '5,27,854', '2024A': '6,24,894', 'Q3-25': '6,78,000' },
  { metric: 'Accts Payable', '2020A': '72,539', '2021A': '78,664', '2022A': '79,470', '2023A': '84,981', '2024A': '94,363', 'Q3-25': '1,01,000' },
  { metric: 'Accrued Exp', '2020A': '44,138', '2021A': '51,775', '2022A': '62,566', '2023A': '61,696', '2024A': '73,769', 'Q3-25': '78,000' },
  { metric: 'Current Debt', '2020A': '2,102', '2021A': '2,022', '2022A': '2,254', '2023A': '8,494', '2024A': '6,392', 'Q3-25': '7,000' },
  { metric: 'Total Current Liab', '2020A': '1,26,385', '2021A': '1,38,827', '2022A': '1,54,310', '2023A': '1,61,685', '2024A': '1,79,431', 'Q3-25': '1,92,000' },
  { metric: 'Long-Term Debt', '2020A': '31,816', '2021A': '48,744', '2022A': '67,651', '2023A': '67,150', '2024A': '57,640', 'Q3-25': '55,000' },
  { metric: 'Op. Lease Liab', '2020A': '34,513', '2021A': '47,786', '2022A': '60,149', '2023A': '65,766', '2024A': '69,050', 'Q3-25': '72,000' },
  { metric: 'Other LT Liab', '2020A': '35,077', '2021A': '46,947', '2022A': '32,101', '2023A': '31,419', '2024A': '32,803', 'Q3-25': '35,000' },
  { metric: 'Total Liabilities', '2020A': '2,27,791', '2021A': '2,82,304', '2022A': '3,14,211', '2023A': '3,25,979', '2024A': '3,38,924', 'Q3-25': '3,54,000' },
  { metric: 'Common Stock', '2020A': '5', '2021A': '5', '2022A': '5', '2023A': '104', '2024A': '111', 'Q3-25': '115' },
  { metric: 'Retained Earnings', '2020A': '52,551', '2021A': '85,915', '2022A': '85,915', '2023A': '1,16,340', '2024A': '1,72,866', 'Q3-25': '2,29,300' },
  { metric: 'AOCI', '2020A': '599', '2021A': '366', '2022A': '-4,487', '2023A': '-1,411', '2024A': '-34', 'Q3-25': '1,200' },
  { metric: 'Treasury Stock', '2020A': '-1,837', '2021A': '-1,837', '2022A': '-7,837', '2023A': '-7,837', '2024A': '-7,837', 'Q3-25': '-7,837' },
  { metric: 'Add. Paid-In Cap', '2020A': '42,865', '2021A': '53,888', '2022A': '74,868', '2023A': '94,679', '2024A': '1,20,864', 'Q3-25': '1,36,000' },
  { metric: 'Total Equity', '2020A': '93,404', '2021A': '1,38,245', '2022A': '1,46,043', '2023A': '2,01,875', '2024A': '2,85,970', 'Q3-25': '3,58,778' },
  { metric: 'Total Liab & Eq', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,60,254', '2023A': '5,27,854', '2024A': '6,24,894', 'Q3-25': '7,12,778' }
];

export const mergedCashFlow = [
  { metric: 'Net Income', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,722', '2023A': '30,425', '2024A': '59,248', 'LTM': '76,482', '2025E': '93,385', '2026E': '79,396', '2027E': '88,494', '2028E': '99,381', '2029E': '99,381', '2030E': '99,381' },
  { metric: '(+) Dep & Amort', '2020A': '25,180', '2021A': '34,296', '2022A': '48,686', '2023A': '62,613', '2024A': '52,795', 'LTM': '54,200', '2025E': '59,289', '2026E': '61,315', '2027E': '66,033', '2028E': '67,918', '2029E': '72,146', '2030E': '74,411' },
  { metric: '(+) Stock-Based Comp', '2020A': '9,208', '2021A': '12,757', '2022A': '19,621', '2023A': '24,023', '2024A': '22,011', 'LTM': '24,500', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: '(+) Other Op. Act', '2020A': '3,454', '2021A': '4,019', '2022A': '-16,966', '2023A': '2,028', '2024A': '3,600', 'LTM': '3,800', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Change in WC', '2020A': '6,891', '2021A': '-37,809', '2022A': '-1,867', '2023A': '-14,143', '2024A': '-23,777', 'LTM': '-19,500', '2025E': '-26,702', '2026E': '-29,906', '2027E': '-33,195', '2028E': '-36,515', '2029E': '-39,801', '2030E': '-43,383' },
  { metric: 'Operating Cash Flow', '2020A': '66,064', '2021A': '46,327', '2022A': '46,752', '2023A': '84,946', '2024A': '1,15,877', 'LTM': '1,39,482', '2025E': '1,25,972', '2026E': '1,10,805', '2027E': '1,21,332', '2028E': '1,30,784', '2029E': '1,31,726', '2030E': '1,30,409' },
  { metric: 'Capital Expenditure', '2020A': '-40,140', '2021A': '-61,053', '2022A': '-58,321', '2023A': '-52,729', '2024A': '-82,999', 'LTM': '-95,000', '2025E': '-97,939', '2026E': '-1,09,691', '2027E': '-1,21,758', '2028E': '-1,33,933', '2029E': '-1,45,987', '2030E': '-1,59,126' },
  { metric: 'Acquisitions', '2020A': '-1,050', '2021A': '-1,900', '2022A': '-2,500', '2023A': '-2,800', '2024A': '-3,500', 'LTM': '-4,000', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Sale of Inv.', '2020A': '4,600', '2021A': '7,200', '2022A': '3,100', '2023A': '2,500', '2024A': '3,800', 'LTM': '4,200', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Purchase of Inv.', '2020A': '-1,800', '2021A': '-4,500', '2022A': '-2,200', '2023A': '-1,500', '2024A': '-2,500', 'LTM': '-3,000', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Other Inv. Act.', '2020A': '1,839', '2021A': '-4,437', '2022A': '9,916', '2023A': '5,696', '2024A': '-9,143', 'LTM': '-8,500', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Investing Cash Flow', '2020A': '-36,551', '2021A': '-64,690', '2022A': '-50,005', '2023A': '-48,833', '2024A': '-94,342', 'LTM': '-1,06,300', '2025E': '-97,939', '2026E': '-1,09,691', '2027E': '-1,21,758', '2028E': '-1,33,933', '2029E': '-1,45,987', '2030E': '-1,59,126' },
  { metric: 'Short-Term Debt', '2020A': '1,800', '2021A': '12,000', '2022A': '8,000', '2023A': '15,000', '2024A': '5,000', 'LTM': '6,000', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Long-Term Debt', '2020A': '10,000', '2021A': '18,699', '2022A': '24,127', '2023A': '3,129', '2024A': '2,142', 'LTM': '2,500', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Debt Repayment', '2020A': '-3,200', '2021A': '-22,000', '2022A': '-15,000', '2023A': '-20,000', '2024A': '-12,800', 'LTM': '-14,000', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Stock Issued', '2020A': '800', '2021A': '1,500', '2022A': '1,200', '2023A': '1,000', '2024A': '1,200', 'LTM': '1,300', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Stock Repurchased', '2020A': '0', '2021A': '0', '2022A': '-6,000', '2023A': '0', '2024A': '0', 'LTM': '0', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Other Fin. Act.', '2020A': '-9,927', '2021A': '-4,208', '2022A': '-3,077', '2023A': '-14,954', '2024A': '-6,245', 'LTM': '-7,500', '2025E': '-', '2026E': '-', '2027E': '-', '2028E': '-', '2029E': '-', '2030E': '-' },
  { metric: 'Financing Cash Flow', '2020A': '-527', '2021A': '5,991', '2022A': '9,250', '2023A': '-15,825', '2024A': '-10,703', 'LTM': '-11,700', '2025E': '0', '2026E': '0', '2027E': '0', '2028E': '0', '2029E': '0', '2030E': '0' },
  { metric: 'Net Change in Cash', '2020A': '28,986', '2021A': '-12,372', '2022A': '5,997', '2023A': '20,288', '2024A': '-502', 'LTM': '21,482', '2025E': '28,033', '2026E': '1,114', '2027E': '-426', '2028E': '-3,149', '2029E': '-14,261', '2030E': '-28,717' },
  { metric: 'Beginning Cash', '2020A': '42,122', '2021A': '71,108', '2022A': '36,220', '2023A': '53,888', '2024A': '73,890', 'LTM': '73,387', '2025E': '94,869', '2026E': '122,902', '2027E': '124,016', '2028E': '123,590', '2029E': '120,441', '2030E': '106,180' },
  { metric: 'Ending Cash', '2020A': '71,108', '2021A': '36,220', '2022A': '42,217', '2023A': '73,890', '2024A': '73,387', 'LTM': '94,869', '2025E': '122,902', '2026E': '124,016', '2027E': '123,590', '2028E': '120,441', '2029E': '106,180', '2030E': '77,463' },
];

export const incomeStatementHistory = [
  { metric: 'Sales', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983' },
  { metric: 'Sales Growth', '2020A': '37.62%', '2021A': '21.70%', '2022A': '9.40%' },
  { metric: 'COGS', '2020A': '2,33,307', '2021A': '2,72,344', '2022A': '2,88,831' },
  { metric: 'Gross Profit', '2020A': '1,52,757', '2021A': '1,97,478', '2022A': '2,25,152' },
  { metric: 'Gross Margin', '2020A': '39.57%', '2021A': '42.03%', '2022A': '43.81%' },
  { metric: 'Operating Expenses', '2020A': '1,27,935', '2021A': '1,72,599', '2022A': '2,12,904' },
  { metric: 'EBIT', '2020A': '24,822', '2021A': '24,879', '2022A': '12,248' },
  { metric: 'EBIT Margin', '2020A': '6.43%', '2021A': '5.30%', '2022A': '2.38%' },
  { metric: 'EBITDA', '2020A': '52,483', '2021A': '59,312', '2022A': '59,620' },
  { metric: 'Net Income', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719' },
  { metric: 'EPS ($)', '2020A': '2.09', '2021A': '3.24', '2022A': '-0.27' }
];

export const incomeStatementForecast = [
  { metric: 'Sales', '2023A': '5,74,785', '2024A': '6,37,959', 'LTM': '6,91,330', '2025E': '7,16,428', '2026E': '8,02,399' },
  { metric: 'Growth', '2023A': '11.83%', '2024A': '10.99%', 'LTM': '11.48%', '2025E': '12.30%', '2026E': '12.00%' },
  { metric: 'Gross Profit', '2023A': '2,70,046', '2024A': '3,11,671', 'LTM': '3,45,982', '2025E': '3,28,575', '2026E': '3,67,927' },
  { metric: 'EBIT', '2023A': '36,852', '2024A': '68,593', 'LTM': '76,201', '2025E': '81,304', '2026E': '90,983' },
  { metric: 'EBITDA', '2023A': '98,848', '2024A': '1,29,389', 'LTM': '1,28,996', '2025E': '1,38,624', '2026E': '1,55,448' },
  { metric: 'Net Income', '2023A': '30,425', '2024A': '76,589', 'LTM': '76,482', '2025E': '93,385', '2026E': '79,396' },
  { metric: 'EPS ($)', '2023A': '2.95', '2024A': '7.32', 'LTM': '7.22', '2025E': '8.81', '2026E': '7.49' }
];

export const revenueProfitTrend = [
  { year: '2020', revenue: 386064, ebitda: 52483, netIncome: 21331 },
  { year: '2021', revenue: 469822, ebitda: 59312, netIncome: 33364 },
  { year: '2022', revenue: 513983, ebitda: 59620, netIncome: -2719 },
  { year: '2023', revenue: 574785, ebitda: 98848, netIncome: 30425 },
  { year: '2024', revenue: 637959, ebitda: 129389, netIncome: 76589 },
  { year: '2025E', revenue: 716428, ebitda: 138624, netIncome: 93385 },
];

export const profitabilitySummary = [
  { gross: '195.20B', opInc: '133.05B', netInc: '112.01B', eps: '7.46', growth: '22.70%' },
  { gross: '345.98B', opInc: '78.70B', netInc: '76.48B', eps: '7.08', growth: '51.31%' },
  { gross: '228.10B', opInc: '125.87B', netInc: '124.25B', eps: '10.14', growth: '34.51%' },
  { gross: '202.04B', opInc: '135.94B', netInc: '104.91B', eps: '14.06', growth: '16.10%' },
  { gross: '131.09B', opInc: '110.12B', netInc: '99.20B', eps: '4.04', growth: '59.73%' },
  { gross: '41.11B', opInc: '18.58B', netInc: '12.44B', eps: '4.32', growth: '11.29%' }
];

export const balanceSheetHistory = [
  { metric: 'Cash & Equiv', '2020A': '42,122', '2021A': '36,220', '2022A': '53,888' },
  { metric: 'Short Term Inv', '2020A': '42,274', '2021A': '59,829', '2022A': '16,138' },
  { metric: 'Total Current Assets', '2020A': '1,32,733', '2021A': '1,61,580', '2022A': '1,46,791' },
  { metric: 'Net PPE', '2020A': '1,13,114', '2021A': '1,20,310', '2022A': '1,25,920' },
  { metric: 'Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675' },
  { metric: 'Total Current Liab', '2020A': '1,26,385', '2021A': '1,38,827', '2022A': '1,54,310' },
  { metric: 'Long-Term Debt', '2020A': '31,816', '2021A': '48,744', '2022A': '67,651' },
  { metric: 'Total Liabilities', '2020A': '2,27,791', '2021A': '2,82,304', '2022A': '3,14,211' },
  { metric: 'Retained Earnings', '2020A': '52,551', '2021A': '85,915', '2022A': '85,915' },
  { metric: 'Total Equity', '2020A': '93,404', '2021A': '1,38,245', '2022A': '1,46,043' }
];

export const balanceSheetRecent = [
  { metric: 'Cash & Equiv', '2023A': '73,890', '2024A': '73,387', 'Q3-25': '70,349' },
  { metric: 'Short Term Inv', '2023A': '13,393', '2024A': '22,423', 'Q3-25': '25,000' },
  { metric: 'Total Current Assets', '2023A': '1,62,396', '2024A': '1,90,867', 'Q3-25': '2,05,000' },
  { metric: 'Total Assets', '2023A': '5,27,854', '2024A': '6,24,894', 'Q3-25': '6,78,000' },
  { metric: 'Total Liabilities', '2023A': '3,25,979', '2024A': '3,38,924', 'Q3-25': '3,54,000' },
  { metric: 'Total Equity', '2023A': '2,01,875', '2024A': '2,85,970', 'Q3-25': '3,58,778' }
];

export const assetLiabilityTrend = [
  { year: '2020A', assets: 321195, liabilities: 227791, equity: 93404 },
  { year: '2021A', assets: 420549, liabilities: 282304, equity: 138245 },
  { year: '2022A', assets: 462675, liabilities: 314211, equity: 146043 },
  { year: '2023A', assets: 527854, liabilities: 325979, equity: 201875 },
  { year: '2024A', assets: 624894, liabilities: 338924, equity: 285970 },
  { year: 'Q3-25', assets: 678000, liabilities: 354000, equity: 358778 },
];

// --- Page 4: Ratio Analysis ---
export const ratioAnalysisFull = [
  // Growth Metrics
  { metric: 'Sales Growth', '2020A': '37.62%', '2021A': '21.70%', '2022A': '9.40%', '2023A': '11.83%', '2024A': '10.99%' },
  { metric: 'EBITDA Growth', '2020A': '41.85%', '2021A': '13.01%', '2022A': '0.52%', '2023A': '65.80%', '2024A': '30.90%' },
  { metric: 'EBIT Growth', '2020A': '40.93%', '2021A': '0.23%', '2022A': '-50.77%', '2023A': '200.88%', '2024A': '86.13%' },
  { metric: 'Net Income Growth', '2020A': '84.07%', '2021A': '56.41%', '2022A': '-108.15%', '2023A': '-1218.98%', '2024A': '151.73%' },
  // Profitability Margins
  { metric: 'Gross Margin', '2020A': '39.57%', '2021A': '42.03%', '2022A': '43.81%', '2023A': '46.98%', '2024A': '48.85%' },
  { metric: 'EBITDA Margin', '2020A': '13.59%', '2021A': '12.62%', '2022A': '11.60%', '2023A': '17.20%', '2024A': '20.28%' },
  { metric: 'EBIT Margin', '2020A': '6.43%', '2021A': '5.30%', '2022A': '2.38%', '2023A': '6.41%', '2024A': '10.75%' },
  { metric: 'EBT Margin', '2020A': '5.32%', '2021A': '8.12%', '2022A': '-1.15%', '2023A': '6.53%', '2024A': '14.59%' },
  { metric: 'Net Margin', '2020A': '5.53%', '2021A': '7.10%', '2022A': '-0.53%', '2023A': '5.29%', '2024A': '12.01%' },
  { metric: 'Operating Expense %', '2020A': '33.14%', '2021A': '36.74%', '2022A': '41.42%', '2023A': '40.57%', '2024A': '38.10%' },
  // Returns
  { metric: 'ROE %', '2020A': '22.84%', '2021A': '24.13%', '2022A': '-1.86%', '2023A': '15.07%', '2024A': '26.78%' },
  { metric: 'ROA %', '2020A': '6.64%', '2021A': '7.93%', '2022A': '-0.59%', '2023A': '5.76%', '2024A': '12.26%' },
  { metric: 'ROIC %', '2020A': '12.74%', '2021A': '8.83%', '2022A': '4.00%', '2023A': '10.06%', '2024A': '15.40%' },
  // Leverage
  { metric: 'Debt/Equity %', '2020A': '34.06%', '2021A': '35.26%', '2022A': '46.32%', '2023A': '33.26%', '2024A': '20.16%' },
  { metric: 'Interest Coverage', '2020A': '15.07', '2021A': '13.75', '2022A': '47.47', '2023A': '-16.23', '2024A': '-29.39' },
  // Efficiency
  { metric: 'Asset Turnover', '2020A': '1.20', '2021A': '1.12', '2022A': '1.11', '2023A': '1.09', '2024A': '1.02' },
  { metric: 'Inventory Turnover', '2020A': '9.80', '2021A': '8.34', '2022A': '8.40', '2023A': '9.15', '2024A': '9.54' },
  { metric: 'Receivable Turnover', '2020A': '15.73', '2021A': '14.28', '2022A': '12.13', '2023A': '13.15', '2024A': '11.06' },
  // Liquidity
  { metric: 'Current Ratio', '2020A': '1.05', '2021A': '1.16', '2022A': '0.95', '2023A': '1.00', '2024A': '1.06' },
  { metric: 'Quick Ratio', '2020A': '0.86', '2021A': '0.93', '2022A': '0.73', '2023A': '0.80', '2024A': '0.87' },
  { metric: 'Cash Conversion Cycle', '2020A': '-9.2', '2021A': '-19.4', '2022A': '-10.8', '2023A': '-13.5', '2024A': '-11.2' },
  // Cash Flow
  { metric: 'CFO/Sales', '2020A': '17.11%', '2021A': '9.86%', '2022A': '9.10%', '2023A': '14.78%', '2024A': '18.16%' },
  { metric: 'CFO/Total Assets', '2020A': '20.57%', '2021A': '11.02%', '2022A': '10.10%', '2023A': '16.09%', '2024A': '18.54%' },
  { metric: 'Free CF/Sales', '2020A': '6.71%', '2021A': '-3.13%', '2022A': '-2.25%', '2023A': '5.61%', '2024A': '5.15%' }
];

export const ratioVisualData = [
  { metric: 'Gross Margin', '2020': 39.57, '2021': 42.03, '2022': 43.81, '2023': 46.98, '2024': 48.85 },
  { metric: 'EBITDA Margin', '2020': 13.59, '2021': 12.62, '2022': 11.60, '2023': 17.20, '2024': 20.28 },
  { metric: 'Net Margin', '2020': 5.53, '2021': 7.10, '2022': 0, '2023': 5.29, '2024': 12.01 }, 
  { metric: 'ROE', '2020': 22.84, '2021': 24.13, '2022': 0, '2023': 15.07, '2024': 26.78 },
  { metric: 'ROIC', '2020': 12.74, '2021': 8.83, '2022': 4.00, '2023': 10.06, '2024': 15.40 },
];

// --- Page 5: Peer & Cost of Debt ---
export const peerBetaAnalysis = [
  { company: 'Amazon', country: 'USA', totalDebt: '135', equity: '370' },
  { company: 'Apple', country: 'USA', totalDebt: '112', equity: '74' },
  { company: 'Microsoft', country: 'USA', totalDebt: '43', equity: '363' },
  { company: 'Alphabet', country: 'USA', totalDebt: '44', equity: '387' },
  { company: 'Meta', country: 'USA', totalDebt: '51', equity: '183' }
];

export const costOfDebt = [
  { item: 'Pre-Tax Cost of Debt', value: '1.84%' },
  { item: 'Bond YTM Avg', value: '4.25%' },
  { item: 'Tax Rate', value: '17.69%' },
  { item: 'Post-Tax Cost of Debt', value: '1.51%' }
];

export const capitalStructure = [
  { component: 'Total Debt', current: '1,33,639', target: '5.06%' },
  { component: 'Market Cap', current: '25,06,000', target: '94.94%' },
  { component: 'Total Capital', current: '26,39,639', target: '100.00%' },
  { component: 'Debt/Equity', current: '5.33%', target: '3.26%' }
];

// --- Page 6 & 16: WACC, Beta, Cost of Equity ---
export const leveredBetaCalculation = [
  { item: 'Comps Median Unlevered Beta', value: '0.96' },
  { item: 'Target Debt/Equity', value: '3.26%' },
  { item: 'Tax Rate', value: '14.72%' },
  { item: 'Levered Beta', value: '1.35' }
];

export const costOfEquity = [
  { item: 'Risk-Free Rate (10Y US Treasury)', value: '4.09%' },
  { item: 'Equity Risk Premium', value: '6.00%' },
  { item: 'Levered Beta', value: '1.37' },
  { item: 'Cost of Equity', value: '12.31%' }
];

export const betaSensitivity = [
  { taxRate: '14.72%', de: '0.37', levBeta: '1.37', unlevBeta: '1.04' },
  { taxRate: '14.72%', de: '1.52', levBeta: '1.21', unlevBeta: '0.53' },
  { taxRate: '14.72%', de: '0.12', levBeta: '0.89', unlevBeta: '0.81' },
  { taxRate: '14.72%', de: '0.11', levBeta: '1.05', unlevBeta: '0.96' },
  { taxRate: '14.72%', de: '0.28', levBeta: '1.24', unlevBeta: '1.00' },
  { taxRate: '14.72%', de: '0.48', levBeta: '1.15', unlevBeta: '0.87' },
  { taxRate: '14.72%', de: '0.28', levBeta: '1.21', unlevBeta: '0.96' }
];

export const waccCalculation = [
  { component: 'Debt', cost: '1.51%', weight: '5.06%', weightedCost: '0.08%' },
  { component: 'Equity', cost: '12.31%', weight: '94.94%', weightedCost: '11.69%' },
  { component: 'WACC', cost: '-', weight: '100.00%', weightedCost: '11.76%' }
];

// --- Page 7: ROIC & Reinvestment ---
export const nopatDetailed = [
  { item: 'Operating Income', '2020A': '20,556', '2021A': '38,151', '2022A': '(5,936)', '2023A': '37,557', '2024A': '93,055', '2025 Q3': '93,055' },
  { item: 'Tax Rate', '2020A': '-2.46%', '2021A': '12.55%', '2022A': '-54.20%', '2023A': '18.99%', '2024A': '17.69%', '2025 Q3': '17.81%' },
  { item: 'NOPAT', '2020A': '24,822', '2021A': '24,879', '2022A': '12,248', '2023A': '36,852', '2024A': '68,593', '2025 Q3': '76,201' }
];

export const investedCapitalDetailed = [
  { item: 'Total Debt', '2020A': '1,01,406', '2021A': '1,43,477', '2022A': '1,59,901', '2023A': '1,64,335', '2024A': '1,59,493', '2025 Q3': '1,62,000' },
  { item: 'Total Equity', '2020A': '93,404', '2021A': '1,38,245', '2022A': '1,46,043', '2023A': '2,01,875', '2024A': '2,85,970', '2025 Q3': '3,58,778' },
  { item: 'Invested Capital', '2020A': '1,94,810', '2021A': '2,81,722', '2022A': '3,05,944', '2023A': '3,66,210', '2024A': '4,45,463', '2025 Q3': '5,20,778' }
];

export const roicCalculation = [
  { item: 'NOPAT', '2020A': '24,822', '2021A': '24,879', '2022A': '12,248', '2023A': '36,852', '2024A': '68,593', '2025 Q3': '76,201' },
  { item: 'Invested Capital', '2020A': '1,94,810', '2021A': '2,81,722', '2022A': '3,05,944', '2023A': '3,66,210', '2024A': '4,45,463', '2025 Q3': '5,20,778' },
  { item: 'ROIC', '2020A': '12.74%', '2021A': '8.83%', '2022A': '4.00%', '2023A': '10.06%', '2024A': '15.40%', '2025 Q3': '14.63%' }
];

export const reinvestmentRateCalculation = [
  { item: 'Net Capex', '2020A': '-40,140', '2021A': '-61,053', '2022A': '-58,321', '2023A': '-52,729', '2024A': '-82,999', '2025 Q3': '-95,000' },
  { item: 'Depreciation', '2020A': '25,180', '2021A': '34,296', '2022A': '48,686', '2023A': '62,613', '2024A': '52,795', '2025 Q3': '54,200' },
  { item: 'Change in WC', '2020A': '6,891', '2021A': '-37,809', '2022A': '-1,867', '2023A': '-14,143', '2024A': '-23,777', '2025 Q3': '-19,500' },
  { item: 'EBIT', '2020A': '24,822', '2021A': '24,879', '2022A': '12,248', '2023A': '36,852', '2024A': '68,593', '2025 Q3': '76,201' },
  { item: 'Marginal Tax Rate', '2020A': '14.72%', '2021A': '14.72%', '2022A': '14.72%', '2023A': '14.72%', '2024A': '14.72%', '2025 Q3': '14.72%' },
  { item: 'Reinvestment', '2020A': '103%', '2021A': '-52%', '2022A': '74%', '2023A': '-76%', '2024A': '11%', '2025 Q3': '33%' }
];

// --- Page 8: DCF Forecast & Valuation ---
export const fcfForecastModel = [
  { item: 'Revenue', '2026E': '8,02,399', '2027E': '8,90,663', '2028E': '9,79,730', '2029E': '10,67,905', '2030E': '11,64,017' },
  { item: 'EBITDA', '2026E': '1,54,803', '2027E': '1,75,971', '2028E': '1,94,720', '2029E': '1,64,287', '2030E': '1,31,115' },
  { item: 'NOPAT', '2026E': '79,396', '2027E': '88,494', '2028E': '99,381', '2029E': '99,381', '2030E': '99,381' },
  { item: 'Capex (-)', '2026E': '-1,09,691', '2027E': '-1,21,758', '2028E': '-1,33,933', '2029E': '-1,45,987', '2030E': '-1,59,126' },
  { item: 'D&A (-)', '2026E': '61,315', '2027E': '66,033', '2028E': '67,918', '2029E': '72,146', '2030E': '74,411' },
  { item: 'Change in WC (-)', '2026E': '-29,906', '2027E': '-33,195', '2028E': '-36,515', '2029E': '-39,801', '2030E': '-43,383' },
  { item: 'FCF', '2026E': '97,867', '2027E': '1,11,023', '2028E': '1,28,881', '2029E': '1,33,421', '2030E': '1,40,713' },
  { item: 'Discount Factor', '2026E': '1.12', '2027E': '0.80', '2028E': '0.72', '2029E': '0.64', '2030E': '0.57' },
  { item: 'PV of FCF', '2026E': '87,566', '2027E': '88,882', '2028E': '92,319', '2029E': '85,512', '2030E': '80,693' }
];

export const dcfValuationModel = [
  { item: 'PV of FCFF (Stage 1)', value: '4,34,972' },
  { item: 'Long term Growth Rate', value: '7%' },
  { item: 'WACC', value: '11.76%' },
  { item: 'Final Year FCF * (1+g)', value: '1,50,563' },
  { item: 'Terminal Value', value: '31,60,849' },
  { item: 'PV of Terminal Value (Stage 2)', value: '19,16,268' },
  { item: 'Total Enterprise Value', value: '23,51,240' }
];

export const sharePriceCalculation = [
  { item: 'Total Enterprise Value', value: '23,51,240' },
  { item: 'Less: Total Debt', value: '54,600' },
  { item: 'Plus: Cash & Equiv', value: '59,364' },
  { item: 'Equity Value', value: '23,56,005' },
  { item: 'No of Shares (M)', value: '10,600' },
  { item: 'Equity Value per Share', value: '$222.26' }
];

// --- Page 9 & 10: DuPont Analysis (Updated to 2024A) ---
export const dupontAnalysisTable = [
  // Return on Equity Section
  { metric: 'Net Profit', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719', '2023A': '30,425', '2024A': '76,589' },
  { metric: 'Avg Shareholder Equity', '2020A': '93,404', '2021A': '1,38,245', '2022A': '1,46,043', '2023A': '2,01,875', '2024A': '2,85,970' },
  { metric: 'ROE', '2020A': '22.84%', '2021A': '24.13%', '2022A': '-1.86%', '2023A': '15.07%', '2024A': '26.78%' },
  
  // ROE - Dupont Equation Section
  { metric: 'Net Profit', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719', '2023A': '30,425', '2024A': '76,589' },
  { metric: 'Revenue', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983', '2023A': '5,74,785', '2024A': '6,37,959' },
  { metric: 'Net Profit Margin (A)', '2020A': '5.53%', '2021A': '7.10%', '2022A': '-0.53%', '2023A': '5.29%', '2024A': '12.01%' },
  
  { metric: 'Revenue', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983', '2023A': '5,74,785', '2024A': '6,37,959' },
  { metric: 'Avg Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675', '2023A': '5,27,854', '2024A': '6,24,894' },
  { metric: 'Asset Turnover Ratio (B)', '2020A': '1.20', '2021A': '1.12', '2022A': '1.11', '2023A': '1.09', '2024A': '1.02' },
  
  { metric: 'Avg Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675', '2023A': '5,27,854', '2024A': '6,24,894' },
  { metric: 'Avg Shareholder Equity', '2020A': '93,404', '2021A': '1,38,245', '2022A': '1,46,043', '2023A': '2,01,875', '2024A': '2,85,970' },
  { metric: 'Equity Multiplier (C)', '2020A': '3.44', '2021A': '3.04', '2022A': '3.17', '2023A': '2.61', '2024A': '2.19' },
  
  { metric: 'Return on Equity (A*B*C)', '2020A': '22.84%', '2021A': '24.13%', '2022A': '-1.86%', '2023A': '15.07%', '2024A': '26.78%' },

  // Return on Assets Section
  { metric: 'Net Profit', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719', '2023A': '30,425', '2024A': '76,589' },
  { metric: 'Avg Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675', '2023A': '5,27,854', '2024A': '6,24,894' },
  { metric: 'ROA', '2020A': '6.6%', '2021A': '7.9%', '2022A': '-0.6%', '2023A': '5.8%', '2024A': '12.3%' },

  // Return on Assets - Dupont Equation Section
  { metric: 'Net Profit', '2020A': '21,331', '2021A': '33,364', '2022A': '-2,719', '2023A': '30,425', '2024A': '76,589' },
  { metric: 'Revenue', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983', '2023A': '5,74,785', '2024A': '6,37,959' },
  { metric: 'Net Profit Margin (A)', '2020A': '5.53%', '2021A': '7.10%', '2022A': '-0.53%', '2023A': '5.29%', '2024A': '12.01%' },

  { metric: 'Revenue', '2020A': '3,86,064', '2021A': '4,69,822', '2022A': '5,13,983', '2023A': '5,74,785', '2024A': '6,37,959' },
  { metric: 'Avg Total Assets', '2020A': '3,21,195', '2021A': '4,20,549', '2022A': '4,62,675', '2023A': '5,27,854', '2024A': '6,24,894' },
  { metric: 'Asset Turnover Ratio (B)', '2020A': '1.20', '2021A': '1.12', '2022A': '1.11', '2023A': '1.09', '2024A': '1.02' },

  { metric: 'Return on Assets - (A*B)', '2020A': '6.6%', '2021A': '7.9%', '2022A': '-0.6%', '2023A': '5.8%', '2024A': '12.3%' }
];

export const dupontVisualData = [
  { year: '2020A', margin: 5.53, turnover: 1.20, multiplier: 3.44, roe: 22.84 },
  { year: '2021A', margin: 7.10, turnover: 1.12, multiplier: 3.04, roe: 24.13 },
  { year: '2022A', margin: -0.53, turnover: 1.11, multiplier: 3.17, roe: -1.86 },
  { year: '2023A', margin: 5.29, turnover: 1.09, multiplier: 2.61, roe: 15.07 },
  { year: '2024A', margin: 12.01, turnover: 1.02, multiplier: 2.19, roe: 26.78 },
];

export const dupontTrends = [
  { year: '2020A', rev: 386064, netProfit: 21331, assets: 321195, equity: 93404, roe: 22.84, roa: 6.6, leverage: 3.44 },
  { year: '2021A', rev: 469822, netProfit: 33364, assets: 420549, equity: 138245, roe: 24.13, roa: 7.9, leverage: 3.04 },
  { year: '2022A', rev: 513983, netProfit: -2719, assets: 462675, equity: 146043, roe: -1.86, roa: -0.6, leverage: 3.17 },
  { year: '2023A', rev: 574785, netProfit: 30425, assets: 527854, equity: 201875, roe: 15.07, roa: 5.8, leverage: 2.61 },
  { year: '2024A', rev: 637959, netProfit: 76589, assets: 624894, equity: 285970, roe: 26.78, roa: 12.3, leverage: 2.19 },
];

// --- Peer Comparison Data Sets (Nov 2025) ---

export const peerMarketData = [
  { symbol: 'AAPL', name: 'Apple Inc.', mktCap: '4.23T', price: '286.19', change: '1.09%', vol: '54,211,889', pe: '38.36', rev: '416.16B' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', mktCap: '2.51T', price: '234.42', change: '0.23%', vol: '45,668,590', pe: '33.13', rev: '691.33B' },
  { symbol: 'GOOG', name: 'Alphabet Inc.', mktCap: '3.81T', price: '316.02', change: '0.29%', vol: '24,643,631', pe: '30.67', rev: '385.48B' },
  { symbol: 'MSFT', name: 'Microsoft Corp', mktCap: '3.64T', price: '490', change: '0.67%', vol: '19,542,574', pe: '34.85', rev: '293.81B' },
  { symbol: 'NVDA', name: 'NVIDIA Corp', mktCap: '4.41T', price: '181.46', change: '0.86%', vol: '455,535,889', pe: '44.88', rev: '187.14B' },
  { symbol: 'ORCL', name: 'Oracle Corp', mktCap: '573.29B', price: '201.1', change: '0.08%', vol: '19,818,437', pe: '46.57', rev: '59.02B' },
];

export const peerReturnsData = [
  { symbol: 'AAPL', ret1m: '5.95%', ret6m: '42.79%', retYtd: '14.80%', ret1y: '21.13%', ret5y: '139.57%', ret10y: '981.74%', ret20y: '13227.54%' },
  { symbol: 'AMZN', ret1m: '-4.01%', ret6m: '14.35%', retYtd: '6.85%', ret1y: '12.76%', ret5y: '45.60%', ret10y: '590.43%', ret20y: '9468.16%' },
  { symbol: 'GOOG', ret1m: '12.14%', ret6m: '83.21%', retYtd: '66.48%', ret1y: '86.17%', ret5y: '253.91%', ret10y: '729.64%', ret20y: '-' },
  { symbol: 'MSFT', ret1m: '-5.19%', ret6m: '6.81%', retYtd: '17.11%', ret1y: '16.57%', ret5y: '136.19%', ret10y: '913.42%', ret20y: '2419.64%' },
  { symbol: 'NVDA', ret1m: '-10.39%', ret6m: '34.30%', retYtd: '35.16%', ret1y: '31.29%', ret5y: '1259.33%', ret10y: '22613.70%', ret20y: '64820.99%' },
  { symbol: 'ORCL', ret1m: '-23.42%', ret6m: '21.96%', retYtd: '21.88%', ret1y: '9.88%', ret5y: '267.04%', ret10y: '496.30%', ret20y: '1850.68%' },
];

export const peerFinancialsData = [
  { symbol: 'AAPL', rev: '416.16B', revGrowth: '6.43%', gross: '195.20B', opInc: '133.05B', netInc: '112.01B', eps: '7.46', epsGrowth: '22.70%' },
  { symbol: 'AMZN', rev: '691.33B', revGrowth: '11.48%', gross: '345.98B', opInc: '78.70B', netInc: '76.48B', eps: '7.08', epsGrowth: '51.31%' },
  { symbol: 'GOOG', rev: '385.48B', revGrowth: '13.42%', gross: '228.10B', opInc: '125.87B', netInc: '124.25B', eps: '10.14', epsGrowth: '34.51%' },
  { symbol: 'MSFT', rev: '293.81B', revGrowth: '15.59%', gross: '202.04B', opInc: '135.94B', netInc: '104.91B', eps: '14.06', epsGrowth: '16.10%' },
  { symbol: 'NVDA', rev: '187.14B', revGrowth: '65.22%', gross: '131.09B', opInc: '110.12B', netInc: '99.20B', eps: '4.04', epsGrowth: '59.73%' },
  { symbol: 'ORCL', rev: '59.02B', revGrowth: '9.67%', gross: '41.11B', opInc: '18.58B', netInc: '12.44B', eps: '4.32', epsGrowth: '11.29%' },
];

export const peerEVStatsData = [
  { company: 'Amazon', ticker: 'AMZN', price: '234.42', shares: '10.69', equity: '2506', ev: '~2,350', rev: '~691', ebitda: '~128', netInc: '~76' },
  { company: 'Apple', ticker: 'AAPL', price: '286.19', shares: '14.8', equity: '4236', ev: '~4,100', rev: '~416', ebitda: '~190', netInc: '~112' },
  { company: 'Alphabet', ticker: 'GOOG', price: '316.02', shares: '12.06', equity: '3811', ev: '~3,700', rev: '~385', ebitda: '~152', netInc: '~124' },
  { company: 'Microsoft', ticker: 'MSFT', price: '490', shares: '7.43', equity: '3641', ev: '~3,500', rev: '~294', ebitda: '~180', netInc: '~105' },
  { company: 'Nvidia', ticker: 'NVDA', price: '181.46', shares: '24.35', equity: '4419', ev: '~4,450', rev: '~187', ebitda: '~200', netInc: '~99' },
  { company: 'Oracle', ticker: 'ORCL', price: '201.1', shares: '2.85', equity: '573', ev: '~640', rev: '~59', ebitda: '~30', netInc: '~12' },
];

export const peerMultiplesData = [
  { company: 'Amazon', ticker: 'AMZN', evRev: '~3.4x', evEbitda: '~18x', pe: '33.1x' },
  { company: 'Apple', ticker: 'AAPL', evRev: '~9.9x', evEbitda: '~21x', pe: '38.4x' },
  { company: 'Alphabet', ticker: 'GOOG', evRev: '~9.6x', evEbitda: '~24x', pe: '31.2x' },
  { company: 'Microsoft', ticker: 'MSFT', evRev: '~11.9x', evEbitda: '~19x', pe: '34.9x' },
  { company: 'Nvidia', ticker: 'NVDA', evRev: '~23.8x', evEbitda: '~22x', pe: '44.8x' },
  { company: 'Oracle', ticker: 'ORCL', evRev: '~10.8x', evEbitda: '~21x', pe: '46.6x' },
];

export const peerScatterData = [
  { company: 'Amazon', evRev: 3.4, evEbitda: 18 },
  { company: 'Apple', evRev: 9.9, evEbitda: 21 },
  { company: 'Alphabet', evRev: 9.6, evEbitda: 24 },
  { company: 'Microsoft', evRev: 11.9, evEbitda: 19 },
  { company: 'Nvidia', evRev: 23.8, evEbitda: 22 },
  { company: 'Oracle', evRev: 10.8, evEbitda: 21 }
];

// --- Page 24: Long Term Forecast ---
export const forecastLongTerm = [
  { item: 'Revenue', '2027E': '8,90,663', '2028E': '9,79,730', '2029E': '10,67,905', '2030E': '11,64,017' },
  { item: 'Revenue Growth', '2027E': '11.00%', '2028E': '10.00%', '2029E': '9.00%', '2030E': '9.00%' },
  { item: 'EBITDA', '2027E': '1,75,971', '2028E': '1,94,720', '2029E': '1,64,287', '2030E': '1,31,115' },
  { item: 'NOPAT', '2027E': '88,494', '2028E': '99,381', '2029E': '99,381', '2030E': '99,381' },
  { item: 'Capex', '2027E': '-1,33,933', '2028E': '-1,21,758', '2029E': '-1,45,987', '2030E': '-1,59,126' },
  { item: 'FCF', '2027E': '66,033', '2028E': '67,918', '2029E': '72,146', '2030E': '74,411' }
];

// Re-export existing for chart compatibility where needed
export const revenueData = [
  { year: '2020A', revenue: 386064, ebitda: 52483, netIncome: 21331 },
  { year: '2021A', revenue: 469822, ebitda: 59312, netIncome: 33364 },
  { year: '2022A', revenue: 513983, ebitda: 59620, netIncome: -2719 },
  { year: '2023A', revenue: 574785, ebitda: 98848, netIncome: 30425 },
  { year: '2024A', revenue: 637959, ebitda: 129389, netIncome: 76589 },
  { year: '2025E', revenue: 716428, ebitda: 138624, netIncome: 70609 },
  { year: '2026E', revenue: 802399, ebitda: 154803, netIncome: 79396 },
];

export const incomeStatementDetailed = [
  { metric: 'Revenue', '2020A': 386064, '2021A': 469822, '2022A': 513983, '2023A': 574785, '2024A': 637959 },
  { metric: 'Net Income', '2020A': 21331, '2021A': 33364, '2022A': -2719, '2023A': 30425, '2024A': 76589 },
];

export const balanceSheetSummary = [
  { metric: 'Cash & Equiv', '2020A': 42122, '2021A': 36220, '2022A': 53888 },
  { metric: 'Total Assets', '2020A': 321195, '2021A': 420549, '2022A': 462675 },
];

export const cashFlowSummary = [
  { metric: 'Operating CF', '2020A': 66064, '2021A': 46327, '2022A': 46752 },
  { metric: 'Free Cash Flow', '2020A': 25924, '2021A': -14726, '2022A': -11569 },
];

export const ratios = {
  profitability: [
    { label: 'Gross Margin (2024)', value: '48.85%' },
    { label: 'EBITDA Margin (2024)', value: '20.28%' },
    { label: 'Net Margin (2024)', value: '12.01%' },
    { label: 'ROE (2024)', value: '26.78%' },
    { label: 'ROIC (2024)', value: '15.40%' },
  ],
  liquidity: [
    { label: 'Current Ratio (2022)', value: '0.95' },
    { label: 'Quick Ratio (2022)', value: '0.73' },
    { label: 'Cash Conv. Cycle (2022)', value: '-10.8' },
  ],
  leverage: [
    { label: 'Debt/Equity (2022)', value: '46.32%' },
    { label: 'Interest Coverage (2022)', value: '47.47' },
  ],
  efficiency: [
    { label: 'Asset Turnover (2022)', value: '1.11' },
    { label: 'Inventory Turnover (2022)', value: '8.40' },
  ]
};

export const dcfValuation: ValuationData = {
  wacc: 11.76,
  terminalGrowthRate: 7.0,
  pvOfFcff: 434972,
  terminalValue: 3160849,
  pvTerminalValue: 1916268,
  enterpriseValue: 2351240,
  netDebt: -4764, 
  equityValue: 2356005,
  sharesOutstanding: 10600,
  intrinsicPrice: 222.26,
  currentPrice: 234.42,
};

export const peerComparison: PeerData[] = [
  { company: 'Amazon', ticker: 'AMZN', marketCap: '2.51T', evRevenue: 3.4, evEbitda: 18 },
  { company: 'Apple', ticker: 'AAPL', marketCap: '4.23T', evRevenue: 9.9, evEbitda: 21 },
  { company: 'Alphabet', ticker: 'GOOG', marketCap: '3.81T', evRevenue: 9.6, evEbitda: 24 },
  { company: 'Microsoft', ticker: 'MSFT', marketCap: '3.64T', evRevenue: 11.9, evEbitda: 19 },
  { company: 'Nvidia', ticker: 'NVDA', marketCap: '4.41T', evRevenue: 23.8, evEbitda: 22 },
  { company: 'Oracle', ticker: 'ORCL', marketCap: '573B', evRevenue: 10.8, evEbitda: 21 },
];

export const moatPoints = [
  "Dominant Market Position in E-commerce",
  "AWS Leadership - Market leader in cloud infrastructure",
  "Prime Membership - 200M+ subscribers globally",
  "Logistics Network - Unmatched fulfillment infrastructure",
  "Technology & Innovation - AI, Alexa, AWS innovations",
  "Economies of Scale - Cost advantages from massive scale",
  "Data & Analytics - Proprietary customer insights"
];

export const forecastData: YearData[] = [
  { year: '2024A', fcf: 105334 },
  { year: '2025E', fcf: 83016 },
  { year: '2026E', fcf: 97867 },
  { year: '2027E', fcf: 66033 },
  { year: '2028E', fcf: 67918 },
  { year: '2029E', fcf: 72146 },
  { year: '2030E', fcf: 74411 },
];
