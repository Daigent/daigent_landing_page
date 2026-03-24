"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Network, Workflow, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-foreground overflow-hidden selection:bg-brand-cyan/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Daigent-03-transparent.png"
              alt="Daigent Logo"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#services" className="hover:text-brand-cyan transition-colors">Services</a>
            <a href="#process" className="hover:text-brand-cyan transition-colors">Process</a>
            <a href="#about" className="hover:text-brand-cyan transition-colors">About Us</a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
          </div>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-brand-blue/20 border border-brand-cyan/30 text-brand-cyan text-sm font-semibold hover:bg-brand-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]">
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 flex flex-col flex-1">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-cyan/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-cyan">The Future of Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue text-glow">Agentic AI</span><br />
            for Business Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-lg text-white/60 mb-10 leading-relaxed"
          >
            Daigent engineers autonomous software agents that revolutionize how you work. We build custom AI architectures that streamline workflows, reduce overhead, and scale operations exponentially.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue text-black font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 hover:gap-4 duration-300">
              Transform Your Business <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/5 transition-colors text-white font-medium text-lg flex items-center justify-center">
              Explore Services
            </a>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Autonomous Capabilities</h2>
            <p className="text-white/60 max-w-xl mx-auto">Our bespoke Agentic AI solutions are designed to handle complex logic, operate independently, and integrate seamlessly with your existing infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-8 h-8 text-brand-cyan" />,
                title: "Custom AI Agents",
                desc: "Tailor-made autonomous agents trained on your proprietary data to execute specific business functions round-the-clock."
              },
              {
                icon: <Workflow className="w-8 h-8 text-brand-blue" />,
                title: "Intelligent Workflows",
                desc: "End-to-end automation pipelines that dynamically adapt to new information and optimize processes in real-time."
              },
              {
                icon: <Network className="w-8 h-8 text-brand-cyan" />,
                title: "Ecosystem Integration",
                desc: "Seamless connectivity between your autonomous agents and your existing SaaS tools, databases, and APIs."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-white/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Deploy <br /><span className="text-brand-cyan">Intelligence</span></h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We do not just provide generic tools. Daigent operates as your dedicated AI engineering team, architecting solutions specifically for your unique operational bottlenecks.
              </p>
              <div className="space-y-6">
                {[
                  { title: "1. Architecture & Strategy", desc: "We map your current workflows and identify where Agentic AI will drive the highest ROI." },
                  { title: "2. Custom Development", desc: "Our engineers build specialized agents with custom memory, tools, and decision frameworks." },
                  { title: "3. Deployment & Scaling", desc: "Seamless launch into your infrastructure with continuous monitoring and optimization." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-white/50">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[500px] rounded-3xl border border-white/10 glass relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10 p-8">
                <Cpu className="w-48 h-48 text-brand-cyan/20 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 border border-brand-cyan/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-cyan/5 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Automate?</h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Stop managing workflows. Start deploying intelligence. Book a consultation with a Daigent AI architect today.</p>
              <a href="#contact" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-brand-cyan transition-colors shadow-xl shadow-brand-cyan/20">
                Book Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] glass border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/5 blur-[80px]" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Talk <span className="text-brand-cyan">AI</span></h2>
                <p className="text-white/60">Fill out the form below and one of our AI architects will get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white shadow-inner" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Work Email</label>
                    <input type="email" id="email" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white shadow-inner" placeholder="john@company.com" required />
                  </div>
                </div>
                
                <div className="space-y-2 text-left">
                  <label htmlFor="company" className="text-sm font-medium text-white/70 ml-1">Company Name</label>
                  <input type="text" id="company" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white shadow-inner" placeholder="Acme Inc." required />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white resize-none shadow-inner" placeholder="Briefly describe your use case or workflow challenges..." required></textarea>
                </div>

                <button type="submit" className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-blue text-black font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                  Submit Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/Daigent-01-transparent.png"
              alt="Daigent Icon"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-xl tracking-wide">DAIGENT</span>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Daigent Software Development Agency. All rights reserved.</p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
