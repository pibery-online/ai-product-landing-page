import React from 'react';
import { Cpu, Zap, Lock, RefreshCw, BarChart3, Workflow } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Autonomous Neural Agents",
      description: "Deploy self-directed AI workers capable of reasoning, planning, and executing multi-step tasks without human intervention."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Ultra-Low Latency Inference",
      description: "Optimized proprietary inference engine delivering blazing-fast responses in under 15 milliseconds globally."
    },
    {
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      title: "Infinite Workflow Integrations",
      description: "Connect effortlessly with GitHub, Jira, Slack, Salesforce, and custom REST APIs with pre-built connector blocks."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "Enterprise Security & Privacy",
      description: "SOC2 Type II certified, HIPAA compliant, with zero data retention policies guaranteeing absolute code and data privacy."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: "Real-Time Analytics & Insights",
      description: "Monitor agent token usage, success ratios, and performance bottlenecks through our comprehensive observability dashboard."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
      title: "Continuous Self-Learning",
      description: "Models continuously adapt to your team's unique coding style and domain vocabulary through secure fine-tuning loops."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Powerful Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Modern High-Growth Teams
          </p>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to automate tedious engineering and operational workloads, supercharged by next-generation artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span>Learn more</span>
                <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
