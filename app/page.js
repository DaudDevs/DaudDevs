'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Github, Instagram, Mail, Code, Briefcase, Star, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

export default function PortfolioApp() {
  const portfolioData = {
    name: "Daud Hanafi",
    title: "Web Developer",
    bio: "Saat ini saya menempuh pendidikan di SMK Muhammadiyah 1 Playen sambil merintis karier sebagai web developer. Saya bersemangat untuk terus belajar, berkolaborasi, dan berkontribusi dalam proyek-proyek yang menantang di masa depan.",
    contact: {
      email: "daudhanafi@outlook.com",
      github: "https://github.com/DaudDevs",
      instagram: "https://instagram.com/daudhanafi_",
    },
    projects: [
      { year: "2025", title: "[Coming Soon]", description: "[Coming Soon]", tags: ["Coming Soon"], link: "#", repo: "#" },
      { year: "2025", title: "[Coming Soon]", description: "[Coming Soon]", tags: ["Coming Soon"], link: "#", repo: "#" },
      { year: "2025", title: "[Coming Soon]", description: "[Coming Soon]", tags: ["Coming Soon"], link: "#", repo: "#" },
      { year: "2025", title: "[Coming Soon]", description: "[Coming Soon]", tags: ["Coming Soon"], link: "#", repo: "#" },
    ],
    skills: [
      "PHP", "Laravel", "JavaScript", "MySQL", "React / Next.js", "Tailwind CSS"
    ],
  };

  // Animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body { 
          font-family: 'Inter', sans-serif; 
          background-color: #0d1117;
        }
        html { scroll-behavior: smooth; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .scroll-animate { opacity: 0; }
        
        .aurora-bg {
          position: relative;
          background-color: #0d1117;
          overflow: hidden;
        }
        .aurora-bg::before,
        .aurora-bg::after {
          content: "";
          position: absolute;
          z-index: 0;
          width: 60vw;
          height: 60vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          will-change: transform;
        }
        .aurora-bg::before {
          top: -20vw;
          left: -20vw;
          background-image: radial-gradient(circle at center, rgba(249, 115, 22, 0.25) 0%, transparent 70%);
          animation: move-glow-1 25s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
        }
        .aurora-bg::after {
          bottom: -20vw;
          right: -20vw;
          background-image: radial-gradient(circle at center, rgba(239, 68, 68, 0.25) 0%, transparent 70%);
          animation: move-glow-2 30s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
        }

        @keyframes move-glow-1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          100% { transform: translate(15vw, 20vw) rotate(180deg) scale(1.2); }
        }

        @keyframes move-glow-2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1.2); }
          100% { transform: translate(-15vw, -20vw) rotate(-180deg) scale(1); }
        }
      `}</style>
      
      <div className="min-h-screen aurora-bg text-gray-200">
        <div className="relative z-10 max-w-4xl mx-auto py-20 px-6">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row items-center gap-10 md:gap-12 mb-20 scroll-animate">
            <div className="flex-shrink-0">
              <Image
                src="/profile.png"
                alt="Foto Profil"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full border-4 border-slate-700/50 shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{portfolioData.name}</h1>
              <p className="text-lg sm:text-xl text-orange-400 mt-2 font-medium">{portfolioData.title}</p>
              <p className="max-w-xl mt-4 text-slate-300">{portfolioData.bio}</p>
              <div className="flex justify-center md:justify-start gap-x-5 mt-6">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"><Github size={26} /></a>
                <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={26} /></a>
                <a href={`mailto:${portfolioData.contact.email}`}><Mail size={26} /></a>
              </div>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Saya <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </header>

          <main>
            {/* Projects */}
            <section id="projects">
              <h2 className="text-3xl font-bold text-white mb-10 text-center scroll-animate flex items-center justify-center gap-3">
                <Briefcase className="text-orange-400"/> Proyek Unggulan
              </h2>
              <div className="space-y-10">
                {portfolioData.projects.map((project, index) => (
                  <div key={index} className="bg-slate-800/40 p-6 rounded-xl shadow-lg scroll-animate">
                    <span className="text-sm font-semibold text-orange-400 mb-2 inline-flex items-center">
                      <Calendar className="mr-2" size={16} /> {project.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-orange-900/60 text-orange-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-x-4">
                        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={22} /></a>}
                        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={22} /></a>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="mt-20 py-10 scroll-animate">
              <h2 className="text-3xl font-bold text-white text-center mb-10 flex items-center justify-center gap-3">
                <Code className="text-orange-400" /> Keahlian
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.map((skill) => (
                  <div key={skill} className="flex items-center bg-slate-800/70 text-slate-300 px-4 py-2 rounded-lg shadow-sm">
                    <Star size={16} className="text-orange-400 mr-2" />
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <footer className="text-center py-10 mt-12 border-t border-slate-800/50">
            <p className="text-sm text-slate-500">Created By ©Daud Hanafi</p>
          </footer>

        </div>
      </div>
    </>
  );
}
