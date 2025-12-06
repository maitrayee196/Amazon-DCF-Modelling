
import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// --- Utility Hooks ---

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function for smooth Apple-style deceleration (Quartic)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(progress === 1 ? end : count + (end - count) * easeOutQuart);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
};

// --- Atoms ---

export const AnimatedNumber: React.FC<{ value: string | number; className?: string; prefix?: string; suffix?: string }> = ({ value, className = "", prefix = "", suffix = "" }) => {
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]+/g, "")) : value;
  const isNumber = !isNaN(numValue);
  
  if (!isNumber) return <span className={className}>{value}</span>;

  const animatedVal = useCountUp(numValue, 1800); // Slightly longer for smoother feel
  const display = animatedVal.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return (
    <span className={className}>
      {prefix}{display}{suffix}
    </span>
  );
};

// --- List Component (New) ---

export const AnimatedList: React.FC<{ items: string[]; icon?: React.ReactNode; iconColor?: string }> = ({ items, icon, iconColor = "text-white" }) => (
  <ul className="space-y-4">
    {items.map((item, i) => (
      <motion.li 
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        className="flex items-start gap-4 group"
      >
        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white flex-shrink-0 transition-all duration-300 ${icon ? '' : 'group-hover:scale-125'}`}>
          {icon}
        </span>
        <span className="text-sm text-textSecondary font-light group-hover:text-white/90 transition-colors duration-300 leading-relaxed tracking-wide">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

// --- Card Components ---

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`bg-surface/60 backdrop-blur-2xl border border-white/5 rounded-2xl p-7 shadow-2xl shadow-black/20 hover:bg-surface/80 transition-all duration-700 ${className}`}
  >
    {title && <h3 className="text-[11px] font-semibold text-textSecondary uppercase tracking-[0.2em] mb-6 opacity-70">{title}</h3>}
    {children}
  </motion.div>
);

export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = "", title }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-surface/40 overflow-hidden rounded-2xl p-7 transition-colors duration-700 hover:border-white/15 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.04),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        {title && <h3 className="text-[11px] font-semibold text-textSecondary uppercase tracking-[0.2em] mb-6 opacity-70">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export const KpiCard: React.FC<{ label: string; value: string | number; trend?: number | string; trendLabel?: string }> = ({ label, value, trend, trendLabel }) => {
  const isNegative = String(trend).startsWith('-');
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 30, 30, 0.6)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-surfaceHighlight/30 rounded-xl p-6 border border-white/5 backdrop-blur-md relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="text-textSecondary text-[10px] font-medium mb-2 tracking-widest uppercase opacity-60">{label}</div>
      <div className="text-3xl font-bold text-textPrimary tracking-tighter">
        {typeof value === 'number' ? (
          <AnimatedNumber value={value} />
        ) : (
          value
        )}
      </div>
      {trend && (
        <div className={`text-xs mt-3 flex items-center gap-2 ${isNegative ? 'text-rose-400' : 'text-emerald-400'}`}>
          <span className={`flex items-center justify-center w-5 h-5 rounded-full ${isNegative ? 'bg-rose-400/10' : 'bg-emerald-400/10'}`}>
            {isNegative ? 
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg> : 
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            }
          </span>
          <span className="font-medium tracking-wide">{trend}%</span>
          {trendLabel && <span className="text-textSecondary/40 font-normal ml-1 border-l border-white/10 pl-2 text-[10px] uppercase tracking-wider">{trendLabel}</span>}
        </div>
      )}
    </motion.div>
  );
};

// --- Form Components (New) ---

export const RangeSlider: React.FC<{ 
  label: string; 
  value: number; 
  onChange: (val: number) => void; 
  min: number; 
  max: number; 
  step?: number; 
  suffix?: string;
  prefix?: string;
}> = ({ label, value, onChange, min, max, step = 1, suffix = '', prefix = '' }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-3">
        <label className="text-xs font-medium text-textSecondary uppercase tracking-widest opacity-80">{label}</label>
        <span className="text-sm font-mono font-medium text-white bg-white/10 px-2 py-1 rounded">
          {prefix}{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}{suffix}
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-surfaceHighlight rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-110"
      />
      <div className="flex justify-between mt-2 text-[10px] text-textSecondary opacity-50 font-mono">
        <span>{prefix}{min}{suffix}</span>
        <span>{prefix}{max}{suffix}</span>
      </div>
    </div>
  );
};

export const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${active ? 'text-white bg-white/10' : 'text-textSecondary hover:text-white hover:bg-white/5'}`}
  >
    {children}
  </button>
);

// --- Layout Components ---

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mb-12"
  >
    <h2 className="text-4xl font-semibold text-textPrimary tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">{title}</h2>
    {subtitle && <p className="text-textSecondary mt-2 text-lg font-light tracking-wide opacity-60 max-w-2xl">{subtitle}</p>}
  </motion.div>
);

export const Grid: React.FC<{ children: React.ReactNode; cols?: number; className?: string }> = ({ children, cols = 3, className = "" }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-6 ${className}`}>
    {children}
  </div>
);

// --- Data Visualization Components ---

export const ProgressBar: React.FC<{ value: number; max: number; label: string; color?: string }> = ({ value, max, label, color = 'bg-white' }) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="mb-6 group">
      <div className="flex justify-between text-xs mb-2 tracking-wide">
        <span className="text-textSecondary font-light group-hover:text-white transition-colors duration-300">{label}</span>
        <span className="font-medium text-textPrimary font-mono opacity-80">{value}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
        />
      </div>
    </div>
  );
};

export const Table: React.FC<{ headers: string[]; rows: (string | number)[][]; highlightRow?: number }> = ({ headers, rows, highlightRow }) => (
  <div className="overflow-hidden rounded-xl border border-white/5 bg-surface/20 backdrop-blur-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            {headers.map((h, i) => (
              <th key={i} className="py-4 px-6 text-textSecondary font-medium uppercase text-[10px] tracking-[0.15em] opacity-80">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xs">
          {rows.map((row, idx) => (
            <motion.tr 
              key={idx} 
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className={`border-b border-white/[0.03] hover:bg-white/[0.04] transition-colors duration-200 ${idx === highlightRow ? 'bg-white/[0.06] font-medium' : ''}`}
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`py-4 px-6 ${cIdx === 0 ? 'text-white/90 tracking-wide sticky left-0 bg-[#0c0c0c] md:bg-transparent' : 'text-textSecondary font-mono font-light'}`}>
                  {cell}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/80 border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
    {children}
  </span>
);
