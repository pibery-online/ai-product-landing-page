import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

export const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Ideal for individual developers, hobbyists, and early experimentation.",
      priceMonthly: 29,
      priceAnnual: 24,
      popular: false,
      features: [
        "1 Autonomous AI Agent",
        "10,000 requests per month",
        "Standard response speed (45ms)",
        "Community Discord support",
        "Basic API access",
        "7-day log retention"
      ],
      cta: "Start Free Trial",
      badgeColor: "bg-slate-800 text-slate-300"
    },
    {
      name: "Pro Scale",
      description: "Perfect for growing startups and professional engineering teams.",
      priceMonthly: 79,
      priceAnnual: 64,
      popular: true,
      features: [
        "Unlimited Autonomous Agents",
        "250,000 requests per month",
        "Turbo priority speed (12ms)",
        "Dedicated 24/7 Slack support",
        "Advanced API & Webhooks",
        "90-day log retention",
        "Custom fine-tuning prompts",
        "Team collaboration workspace"
      ],
      cta: "Deploy Pro Plan",
      badgeColor: "bg-indigo-600 text-white"
    },
    {
      name: "Enterprise",
      description: "Tailor-made infrastructure with maximum security and custom SLAs.",
      priceMonthly: 249,
      priceAnnual: 199,
      popular: false,
      features: [
        "Dedicated Neural Cluster",
        "Unlimited requests & tokens",
        "Real-time custom edge inference",
        "Dedicated Customer Success Manager",
        "Custom SOC2 / HIPAA compliance",
        "Unlimited log retention",
        "On-premise deployment option",
        "99.99% Uptime SLA"
      ],
      cta: "Contact Sales",
      badgeColor: "bg-slate-800 text-slate-300"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Transparent Pricing
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Invest in Speed, Scale with Confidence
          </p>
          <p className="text-slate-400 text-base sm:text-lg mb-8">
            Choose the ideal plan for your workflow. Switch or cancel anytime with zero friction.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annualBilling
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annualBilling
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-indigo-950/40 border-2 border-indigo-500 shadow-2xl shadow-indigo-600/20 scale-105 z-10'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-slate-800/80">
                    <span className="text-5xl font-extrabold text-white tracking-tight">${currentPrice}</span>
                    <span className="text-slate-400 text-sm">/ month</span>
                    {annualBilling && (
                      <span className="ml-auto text-xs text-emerald-400 font-semibold">
                        Billed annually
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      What&apos;s included:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
