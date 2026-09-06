import React from 'react';
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Bot, Code2 } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Ambient background blur elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 mb-8 backdrop-blur-md shadow-inner shadow-indigo-500/10">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">NexusAI v4.0 Released</span>
          <span className="text-slate-600">•</span>
          <a href="#" className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
            Explore updates <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
          Supercharge Your Workflow With <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Autonomous AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Deploy intelligent autonomous agents that seamlessly write code, analyze massive datasets, and execute complex business workflows in real time.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-semibold shadow-xl shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-3 text-base"
          >
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 text-slate-200 font-semibold transition-all duration-200 flex items-center justify-center gap-3 text-base backdrop-blur-sm">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Play className="w-3 h-3 fill-current" />
            </div>
            <span>Watch 2-Min Demo</span>
          </button>
        </div>

        {/* Trust metrics */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-400 mb-16">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>99.99% Uptime Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>No Credit Card Required</span>
          </div>
        </div>

        {/* Interactive App UI Preview Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-950 p-1.5 shadow-2xl shadow-indigo-950/50 border border-slate-800">
          <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] uppercase font-bold tracking-widest text-indigo-400 shadow-md">
            Live Agent Console
          </div>

          <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-900">
            {/* Window Top Bar */}
            <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-xs text-slate-400 font-mono bg-slate-950 px-4 py-1 rounded border border-slate-800">
                nexus-agent-v4://prod-cluster-primary
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active
              </div>
            </div>

            {/* Console Content Area */}
            <div className="p-6 md:p-8 font-mono text-left text-sm grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Terminal Logs */}
              <div className="md:col-span-2 space-y-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">Execution Stream</div>
                <div className="text-slate-300 flex items-start gap-2">
                  <span className="text-indigo-400 select-none">[10:42:01]</span>
                  <span>Initializing neural cluster model parameters...</span>
                </div>
                <div className="text-slate-300 flex items-start gap-2">
                  <span className="text-indigo-400 select-none">[10:42:02]</span>
                  <span>Ingesting user vector database (14.2M parameters)...</span>
                </div>
                <div className="text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 select-none">[10:42:03]</span>
                  <span className="text-emerald-300">✓ Autonomous workflow compiled successfully. Zero bottlenecks detected.</span>
                </div>
                <div className="text-slate-400 flex items-start gap-2 pt-2 border-t border-slate-800/60">
                  <span className="text-purple-400 select-none">AI:</span>
                  <span className="animate-pulse">Analyzing pipeline metrics and optimizing query latency..._</span>
                </div>
              </div>

              {/* Stats Card inside preview */}
              <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-4 rounded-xl border border-indigo-900/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-indigo-300 font-sans font-semibold mb-1 uppercase tracking-wider">Efficiency Boost</div>
                  <div className="text-3xl font-bold text-white font-sans">+340%</div>
                  <p className="text-xs text-slate-400 mt-1 font-sans">Average throughput observed across 10,000+ enterprise teams.</p>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-900/30 flex items-center justify-between text-xs font-sans text-slate-300">
                  <span>Model Latency</span>
                  <span className="font-mono text-emerald-400 font-bold">12ms</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
