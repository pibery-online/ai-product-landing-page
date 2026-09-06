import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Disc as Discord, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Pre-footer Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/30 p-8 md:p-12 mb-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Transform Your Workflow? 
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Join over 10,000 engineering teams building the future with autonomous AI agents today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">NexusAI</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              The state-of-the-art autonomous AI platform empowering developers and enterprises to execute complex workflows with blazing speed and absolute security.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Discord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Agents</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Inference Engine</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers <span className="ml-1 text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-bold">We&apos;re Hiring</span></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NexusAI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
