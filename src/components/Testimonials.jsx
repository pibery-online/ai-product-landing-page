import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "VP of Engineering at FinScale",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "NexusAI completely revolutionized our internal CI/CD pipelines and PR code reviews. We cut our release cycle time by over 65% in the first month alone. Unbelievable performance!",
      rating: 5,
      company: "FinScale"
    },
    {
      name: "Alexandre Dubois",
      role: "Lead AI Architect at NeuroCloud",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "The ultra-low latency inference engine is second to none. We migrated our entire customer support agent stack to NexusAI and saw an instant 99.9% uptime with zero glitches.",
      rating: 5,
      company: "NeuroCloud"
    },
    {
      name: "Elena Rostova",
      role: "Founder & CEO at DataPulse",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      content: "As a startup founder, velocity is our only currency. NexusAI acts like having three senior developers on the team 24/7. The ROI has been astronomical.",
      rating: 5,
      company: "DataPulse"
    },
    {
      name: "Marcus Thorne",
      role: "Head of DevOps at CyberShield",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Security was our primary concern before adopting AI tools. NexusAI's SOC2 compliance and zero-retention policies gave our compliance team total peace of mind.",
      rating: 5,
      company: "CyberShield"
    },
    {
      name: "Priya Patel",
      role: "Senior Frontend Engineer at CodeCraft",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      content: "The UI code generation and instant component refactoring are magical. It writes clean, idiomatic Tailwind and React code that matches our internal style guide perfectly.",
      rating: 5,
      company: "CodeCraft"
    },
    {
      name: "David Kim",
      role: "CTO at MetricFlow",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      content: "We tested five different LLM orchestration platforms before choosing NexusAI. None came close to their developer ergonomics, SDK quality, and prompt reliability.",
      rating: 5,
      company: "MetricFlow"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Customer Testimonials
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved by Industry Leaders
          </p>
          <p className="text-slate-400 text-base sm:text-lg">
            Discover how forward-thinking engineering teams and enterprise organizations accelerate innovation with NexusAI.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-indigo-950/30 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="absolute top-6 right-6 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
