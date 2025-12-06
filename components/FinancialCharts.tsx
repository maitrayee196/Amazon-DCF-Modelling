
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart, ScatterChart, Scatter, ZAxis, PieChart, Pie, Cell
} from 'recharts';

export const chartTheme = {
  text: '#A1A1AA', // Neutral-400 for better readability on dark
  grid: '#27272A', // Neutral-800
  // Updated Palette: White, Light Grey, Medium Grey, Dark Grey, Very Dark Grey
  colors: ['#FFFFFF', '#D4D4D8', '#A1A1AA', '#71717A', '#52525B']
};

const CustomTooltip = ({ active, payload, label, prefix = '', suffix = '' }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#09090b]/95 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 min-w-[140px]">
        <p className="text-white/50 font-medium mb-2 text-[10px] tracking-widest uppercase font-sans">{label || payload[0].payload.name}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 text-xs py-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)]" style={{ backgroundColor: entry.color }}></span>
              <span className="text-gray-300 font-light capitalize">{entry.name}</span>
            </div>
            <span className="text-white font-mono font-medium tracking-tight">
              {prefix}{entry.value.toLocaleString()}{suffix}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Refined animation props for ultra-smooth Apple feel
const animationProps = {
  isAnimationActive: true,
  animationDuration: 1200,
  animationEasing: "ease-out" as const,
};

export const TrendLineChart: React.FC<{ data: any[]; xKey: string; dataKeys: { key: string; color?: string }[]; prefix?: string; suffix?: string }> = ({ data, xKey, dataKeys, prefix = '$', suffix = '' }) => (
  <ResponsiveContainer width="100%" height={320}>
    <LineChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false} 
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false} 
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />} 
        cursor={{ stroke: '#52525B', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.3 }}
        trigger="hover"
      />
      <Legend iconType="circle" iconSize={6} wrapperStyle={{ paddingTop: '20px', opacity: 0.6, fontSize: '11px', fontFamily: 'Inter' }} />
      {dataKeys.map((dk, i) => (
        <Line
          key={dk.key}
          type="monotone"
          dataKey={dk.key}
          stroke={dk.color || chartTheme.colors[i % chartTheme.colors.length]}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 2, stroke: '#FFFFFF', fill: dk.color || chartTheme.colors[i % chartTheme.colors.length], strokeOpacity: 1 }}
          {...animationProps}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export const SimpleBarChart: React.FC<{ data: any[]; xKey: string; barKey: string; color?: string; prefix?: string; suffix?: string; hideLegend?: boolean }> = ({ data, xKey, barKey, color, prefix = '$', suffix = '', hideLegend = false }) => (
  <ResponsiveContainer width="100%" height={320}>
    <BarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />} 
        cursor={{ fill: 'transparent' }} 
      />
      <Bar 
        dataKey={barKey} 
        fill={color || chartTheme.colors[0]} 
        radius={[4, 4, 0, 0]}
        maxBarSize={60}
        {...animationProps}
        fillOpacity={0.9}
        activeBar={{ fill: color || chartTheme.colors[0], fillOpacity: 1, strokeWidth: 0 }}
      />
    </BarChart>
  </ResponsiveContainer>
);

export const MultiBarChart: React.FC<{ data: any[]; xKey: string; keys: string[]; prefix?: string; suffix?: string }> = ({ data, xKey, keys, prefix = '$', suffix = '' }) => (
  <ResponsiveContainer width="100%" height={320}>
    <BarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />} 
        cursor={{ fill: 'transparent' }} 
      />
      <Legend iconType="circle" iconSize={6} wrapperStyle={{ paddingTop: '20px', opacity: 0.6, fontSize: '11px', fontFamily: 'Inter' }} />
      {keys.map((key, i) => (
        <Bar 
          key={key} 
          dataKey={key} 
          fill={chartTheme.colors[i % chartTheme.colors.length]} 
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
          fillOpacity={0.9}
          activeBar={{ fill: chartTheme.colors[i % chartTheme.colors.length], fillOpacity: 1 }}
          {...animationProps}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);

export const StackedBarChart: React.FC<{ data: any[]; xKey: string; keys: string[]; prefix?: string; suffix?: string }> = ({ data, xKey, keys, prefix = '$', suffix = '' }) => (
  <ResponsiveContainer width="100%" height={320}>
    <BarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false}
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />} 
        cursor={{ fill: 'transparent' }} 
      />
      <Legend iconType="circle" iconSize={6} wrapperStyle={{ paddingTop: '20px', opacity: 0.6, fontSize: '11px', fontFamily: 'Inter' }} />
      {keys.map((key, i) => (
        <Bar 
          key={key} 
          dataKey={key} 
          stackId="a"
          fill={chartTheme.colors[i % chartTheme.colors.length]} 
          radius={i === keys.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
          maxBarSize={60}
          fillOpacity={0.9}
          activeBar={{ fill: chartTheme.colors[i % chartTheme.colors.length], fillOpacity: 1 }}
          {...animationProps}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);

export const AreaTrendChart: React.FC<{ data: any[]; xKey: string; areaKey: string; prefix?: string; suffix?: string }> = ({ data, xKey, areaKey, prefix = '$', suffix = '' }) => (
  <ResponsiveContainer width="100%" height={320}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
      <defs>
        <linearGradient id={`color${areaKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={chartTheme.colors[0]} stopOpacity={0.3}/>
          <stop offset="95%" stopColor={chartTheme.colors[0]} stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        axisLine={false} 
        tickLine={false}
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }}
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        axisLine={false} 
        tickLine={false}
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }}
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />}
        cursor={{ stroke: '#52525B', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.3 }}
      />
      <Area 
        type="monotone" 
        dataKey={areaKey} 
        stroke={chartTheme.colors[0]} 
        strokeWidth={2}
        fillOpacity={1} 
        fill={`url(#color${areaKey})`}
        activeDot={{ r: 5, strokeWidth: 2, stroke: '#FFFFFF', fill: chartTheme.colors[0] }}
        {...animationProps}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const PeerRadarChart: React.FC<{ data: any[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={350}>
    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
      <PolarGrid stroke={chartTheme.grid} opacity={0.2} />
      <PolarAngleAxis dataKey="metric" tick={{ fill: chartTheme.text, fontSize: 10, fontWeight: 500, fontFamily: 'Inter' }} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
      <Radar 
        name="Amazon" 
        dataKey="Amazon" 
        stroke={chartTheme.colors[0]} 
        strokeWidth={2}
        fill={chartTheme.colors[0]} 
        fillOpacity={0.3}
        {...animationProps}
      />
      <Radar 
        name="Peer Avg" 
        dataKey="PeerAvg" 
        stroke={chartTheme.colors[1]} 
        strokeWidth={1}
        fill={chartTheme.colors[1]} 
        fillOpacity={0.2}
        {...animationProps}
      />
      <Legend iconType="circle" iconSize={6} wrapperStyle={{ opacity: 0.6, fontSize: '11px', marginTop: '10px', fontFamily: 'Inter' }} />
      <Tooltip content={<CustomTooltip suffix="" />} cursor={false} />
    </RadarChart>
  </ResponsiveContainer>
);

export const ComposedTrendChart: React.FC<{ data: any[]; xKey: string; bars: string[]; lines: string[]; prefix?: string; suffix?: string }> = ({ data, xKey, bars, lines, prefix = '$', suffix = '' }) => (
  <ResponsiveContainer width="100%" height={320}>
    <ComposedChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} vertical={false} opacity={0.15} />
      <XAxis 
        dataKey={xKey} 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false} 
        dy={15}
      />
      <YAxis 
        stroke={chartTheme.text} 
        tick={{ fontSize: 10, fill: chartTheme.text, fontWeight: 300, fontFamily: 'Inter' }} 
        axisLine={false} 
        tickLine={false} 
        dx={-15}
        tickFormatter={(value) => `${prefix}${value.toLocaleString()}${suffix}`}
      />
      <Tooltip 
        content={<CustomTooltip prefix={prefix} suffix={suffix} />} 
        cursor={{ fill: 'transparent' }} 
      />
      <Legend iconType="circle" iconSize={6} wrapperStyle={{ paddingTop: '20px', opacity: 0.6, fontSize: '11px', fontFamily: 'Inter' }} />
      {bars.map((key, i) => (
        <Bar 
          key={key} 
          dataKey={key} 
          fill={chartTheme.colors[i % chartTheme.colors.length]} 
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
          fillOpacity={0.9}
          activeBar={{ fill: chartTheme.colors[i % chartTheme.colors.length], fillOpacity: 1 }}
          {...animationProps}
        />
      ))}
      {lines.map((key, i) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={chartTheme.colors[(i + bars.length) % chartTheme.colors.length]}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5, strokeWidth: 2, stroke: '#FFFFFF', fill: chartTheme.colors[(i + bars.length) % chartTheme.colors.length], strokeOpacity: 1 }}
          {...animationProps}
        />
      ))}
    </ComposedChart>
  </ResponsiveContainer>
);

export const ScatterTrendChart: React.FC<{ data: any[]; xKey: string; yKey: string; nameKey: string }> = ({ data, xKey, yKey, nameKey }) => (
  <ResponsiveContainer width="100%" height={320}>
    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} opacity={0.15} />
      <XAxis type="number" dataKey={xKey} name={xKey} unit="x" stroke={chartTheme.text} tick={{ fontSize: 10, fill: chartTheme.text }} axisLine={false} tickLine={false} dy={10} />
      <YAxis type="number" dataKey={yKey} name={yKey} unit="x" stroke={chartTheme.text} tick={{ fontSize: 10, fill: chartTheme.text }} axisLine={false} tickLine={false} dx={-10} />
      <ZAxis type="number" range={[100, 500]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip prefix="" suffix="x" />} />
      <Scatter name="Peers" data={data} fill="#FFFFFF" fillOpacity={0.8} animationDuration={1000}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index === 0 ? chartTheme.colors[0] : chartTheme.colors[1]} />
        ))}
      </Scatter>
    </ScatterChart>
  </ResponsiveContainer>
);

export const DonutChart: React.FC<{ data: { name: string; value: number }[]; colors?: string[] }> = ({ data, colors }) => {
  const COLORS = colors || chartTheme.colors;
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
          {...animationProps}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip suffix="%" />} />
        <Legend iconType="circle" iconSize={6} wrapperStyle={{ opacity: 0.6, fontSize: '11px', fontFamily: 'Inter' }} />
      </PieChart>
    </ResponsiveContainer>
  );
};
