/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Instagram, 
  Youtube, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  User
} from "lucide-react";
import { Logo } from "./components/Logo";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-b border-brand/10 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ number, title }: { number: string, title: string }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="font-display text-2xl md:text-3xl opacity-30 font-bold tracking-tight">{number}</span>
    <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase leading-none font-black tracking-[-0.03em]">{title}</h2>
  </div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-sm border-b border-brand/5 py-6 px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-display font-black text-xl tracking-tighter">SENSYBOY</span>
        </a>
        <div className="hidden md:flex gap-10 text-[10px] uppercase font-bold tracking-[0.2em] text-brand/40">
          <a href="#about" className="hover:text-brand transition-colors">The Profile</a>
          <a href="#process" className="hover:text-brand transition-colors">The Method</a>
          <a href="#project" className="hover:text-brand transition-colors">The Archive</a>
          <a href="#contact" className="hover:text-brand transition-colors">The Inquiry</a>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="h-screen flex flex-col items-center justify-center px-6 sticky top-0 bg-surface z-0 pt-20"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Volume 01 • Issue 2024</span>
            <h1 className="text-[12vw] lg:text-[10vw] leading-[0.85] font-display font-black italic mb-8">
              Sensy<br />
              <span className="pl-[10vw]">Boy.</span>
            </h1>
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-24 bg-brand" />
              <p className="font-serif text-2xl italic opacity-60">A Creative Journey</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-brand/5 overflow-hidden border border-brand/10 p-4 relative group">
              <img 
                src="https://picsum.photos/seed/editorial/800/1000" 
                alt="SensyBoy Editorial" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Floating Rotating Logo Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Logo className="w-full h-full text-surface animate-[spin_10s_linear_infinite]" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand text-surface p-6 max-w-[200px] hidden md:block">
              <p className="text-[10px] leading-relaxed uppercase tracking-widest font-bold">
                "결국 모든 것은 '감도'의 차이에서 시작된다."
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <span className="vertical-text text-[10px] uppercase tracking-widest font-bold opacity-30">Scroll Down</span>
          <div className="w-[1px] h-24 bg-brand/10" />
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative z-10 bg-surface border-t border-brand/10">
        
        {/* About Section - Magazine Spread Style */}
        <Section id="about" className="bg-[#F9F8F4]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end border-b border-brand/10 pb-8 mb-16">
              <SectionTitle number="01" title="The Profile" />
              <div className="hidden md:block text-right">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Section: Biography</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Page: 04-07</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-12">
                <div className="relative">
                  <span className="text-8xl font-display font-black absolute -top-10 -left-6 opacity-5 text-brand">S</span>
                  <h3 className="text-4xl font-serif italic mb-6">"결국 모든 것은 <span className="text-accent">'감도'</span>의 차이에서 시작된다."</h3>
                  <p className="text-sm leading-relaxed opacity-60 font-medium">
                    일상의 평범함을 비범함으로 바꾸는 감각의 힘. SensyBoy는 그 미세한 차이를 포착하여 콘텐츠로 승화시킵니다.
                  </p>
                </div>
                
                <div className="pt-12 border-t border-brand/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-4 block">1-2 CEO Profile</span>
                  <h4 className="text-2xl font-display font-bold mb-2">강동호 (Kang Dong-ho)</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-6">한성대학교 문학문화콘텐츠학과 재학중</p>
                  <p className="text-sm font-serif italic mb-8 opacity-80">"일상을 새롭게 바라보는 사람"</p>
                  <ul className="space-y-4 text-xs uppercase tracking-widest font-bold opacity-50">
                    <li className="flex justify-between"><span>Branding Expert</span> <span>2024</span></li>
                    <li className="flex justify-between"><span>Visual Director</span> <span>2023</span></li>
                    <li className="flex justify-between"><span>Digital Artist</span> <span>2022</span></li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent">1-3 Vision & Mission</span>
                  <p className="text-lg leading-relaxed font-serif italic">
                    단순히 보는 즐거움을 넘어, 시청자의 감각을 자극하고 새로운 영감을 주는 크리에이터가 되고 싶습니다. 
                  </p>
                  <p className="text-sm leading-relaxed opacity-60">
                    왜 콘텐츠를 만드는가에 대한 답은 '연결'에 있습니다. 나의 시선이 누군가의 일상에 작은 변화를 일으키길 바랍니다.
                  </p>
                </div>
                <div className="aspect-square bg-brand/5 border border-brand/5 overflow-hidden">
                  <img src="https://picsum.photos/seed/vision/600/600" alt="Vision" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Process Section - Strategic Roadmap & Matrix */}
        <Section id="process" className="bg-brand text-surface overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end border-b border-surface/10 pb-8 mb-24">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl opacity-30 italic text-surface">02</span>
                <h2 className="text-5xl md:text-8xl uppercase font-display font-black text-surface">The Method</h2>
              </div>
              <div className="hidden lg:block text-right opacity-40">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Strategy & Execution</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Framework v1.0</p>
              </div>
            </div>

            {/* Part 1: Strategic Roadmap */}
            <div className="mb-32">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-12 block">Part A: Strategic Roadmap</span>
              <div className="relative">
                {/* Roadmap Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-surface/10 hidden lg:block" />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                  {[
                    {
                      step: "01",
                      title: "Discovery",
                      subtitle: "일상의 재발견",
                      desc: "당연하게 여겨지는 일상 속에서 '낯선 감각'을 포착합니다. 인문학적 통찰과 예술적 감각으로 사물의 이면을 관찰합니다.",
                      tags: ["Observation", "Contextualizing", "Insight"]
                    },
                    {
                      step: "02",
                      title: "Creation",
                      subtitle: "감도의 시각화",
                      desc: "포착된 영감을 독창적인 기획과 고감도 편집 기술을 통해 시각적 언어로 번역합니다. 단순한 영상이 아닌 '경험'을 설계합니다.",
                      tags: ["Planning", "Cinematography", "Editing"]
                    },
                    {
                      step: "03",
                      title: "Expansion",
                      subtitle: "브랜드의 확장",
                      desc: "콘텐츠를 넘어 하나의 브랜드로서 대중과 소통합니다. 지속 가능한 창작 생태계를 구축하고 새로운 가치를 제안합니다.",
                      tags: ["Community", "Identity", "Impact"]
                    }
                  ].map((phase, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-surface/5 border border-surface/10 p-10 space-y-6 relative group hover:bg-surface/10 transition-colors"
                    >
                      <div className="w-12 h-12 bg-accent text-brand flex items-center justify-center font-display font-black text-xl mb-8">
                        {phase.step}
                      </div>
                      <div>
                        <h3 className="text-3xl font-display italic mb-2">{phase.title}</h3>
                        <p className="text-accent text-[10px] uppercase tracking-widest font-bold mb-4">{phase.subtitle}</p>
                        <p className="text-sm opacity-60 leading-relaxed mb-8">{phase.desc}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.tags.map(tag => (
                          <span key={tag} className="text-[8px] uppercase tracking-widest border border-surface/20 px-2 py-1 opacity-40">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Part 2: Differentiation Matrix */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-12 block">Part B: Differentiation Matrix</span>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-surface/20">
                      <th className="py-6 text-[10px] uppercase tracking-widest font-bold opacity-40 w-1/4">Perspective</th>
                      <th className="py-6 text-[10px] uppercase tracking-widest font-bold opacity-40 w-1/3 text-center">Standard Content</th>
                      <th className="py-6 text-[10px] uppercase tracking-widest font-bold text-accent w-1/3 text-center">SensyBoy Approach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface/10">
                    {[
                      { label: "Viewpoint", std: "Information Delivery", sb: "Emotional Resonance" },
                      { label: "Technique", std: "Functional Editing", sb: "Cinematic Storytelling" },
                      { label: "Value", std: "Temporary Consumption", sb: "Lasting Inspiration" },
                      { label: "Identity", std: "Generic Creator", sb: "Cultural Director" }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-surface/5 transition-colors">
                        <td className="py-8 font-display italic text-xl opacity-60">{row.label}</td>
                        <td className="py-8 text-center text-xs uppercase tracking-widest opacity-30 line-through">{row.std}</td>
                        <td className="py-8 text-center text-sm uppercase tracking-[0.2em] font-bold text-accent">{row.sb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* Project Section - Gallery Spread */}
        <Section id="project">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end border-b border-brand/10 pb-8 mb-16">
              <SectionTitle number="03" title="The Archive" />
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-4">Selected Works 2022-2024</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {[
                { title: "Urban Exploration", category: "Cinematic Vlog", image: "https://picsum.photos/seed/urban/800/600", span: "md:col-span-8" },
                { title: "Tech & Lifestyle", category: "Review & Story", image: "https://picsum.photos/seed/tech/800/600", span: "md:col-span-4" },
                { title: "Artist Collaboration", category: "Music Video", image: "https://picsum.photos/seed/artist/800/600", span: "md:col-span-4" },
                { title: "Brand Film", category: "Commercial", image: "https://picsum.photos/seed/brand/800/600", span: "md:col-span-8" }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`relative aspect-video ${project.span} group overflow-hidden border border-brand/5`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                    <span className="text-accent text-[10px] uppercase tracking-widest font-bold mb-4">{project.category}</span>
                    <h4 className="text-surface text-3xl font-display italic mb-6">{project.title}</h4>
                    <div className="w-12 h-[1px] bg-surface/30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section - Minimalist Inquiry */}
        <Section id="contact" className="bg-[#F9F8F4]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-5 space-y-12">
                <SectionTitle number="04" title="The Inquiry" />
                <p className="text-3xl font-display italic leading-tight">
                  감각적인 콘텐츠로 세상을 연결하는<br />
                  <span className="text-accent">SensyBoy</span>와 함께하세요.
                </p>
                
                <div className="space-y-8 pt-12 border-t border-brand/10">
                  <a href="mailto:hello@sensyboy.com" className="block text-2xl font-display font-bold hover:text-accent transition-colors">
                    hello@sensyboy.com
                  </a>
                  <div className="flex gap-8">
                    <a href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">Instagram</a>
                    <a href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">Youtube</a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-brand/20 py-2 focus:border-brand outline-none transition-colors font-display text-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-brand/20 py-2 focus:border-brand outline-none transition-colors font-display text-xl" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-brand/20 py-2 focus:border-brand outline-none transition-colors font-display text-xl resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="px-12 py-4 bg-brand text-surface font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-colors">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 border-t border-brand/10 bg-surface">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              <span className="font-display font-black text-2xl tracking-tighter">SENSYBOY</span>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 leading-relaxed">
                A Creative Studio Dedicated to the Art of Digital Sensibility.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-20 mb-2">Navigation</span>
              <a href="#about" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">The Profile</a>
              <a href="#process" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">The Method</a>
              <a href="#project" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">The Archive</a>
            </div>
            <div className="text-right md:text-right">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">© 2024 SENSYBOY. ALL RIGHTS RESERVED.</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-20 mt-2">Designed for the Discerning Eye.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
