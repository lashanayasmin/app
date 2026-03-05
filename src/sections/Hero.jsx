import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      const orbs = heroRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] transition-transform duration-300 ease-out" />
        <div className="orb absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] transition-transform duration-300 ease-out" />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] transition-transform duration-300 ease-out" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge 
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new projects</span>
        </div>*/}

        {/* Main heading */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-white">Hi, I'm </span>
          <span className="text-gradient">Lashana</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          MERN Stack Developer & SQA Engineer
        </p>

        {/* Description */}
        <p 
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          I build robust, scalable web applications using MongoDB, Express, React, and Node.js. 
          Passionate about clean code, quality assurance, and delivering exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <Button 
            size="lg" 
            className="bg-gradient hover:opacity-90 text-white px-8 py-6 text-lg rounded-full glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        {/* Social links */}
        <div 
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
