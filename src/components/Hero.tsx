
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      staggerItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 bg-gradient-mesh relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 stagger-item">
            <span className="text-xs font-medium">Premium Hosting Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 stagger-item">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              High-Performance
            </span>{" "}
            Hosting for Ambitious Projects
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto stagger-item">
            Experience unparalleled speed, reliability, and security with our cutting-edge hosting infrastructure. Built for developers who demand the best.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 stagger-item">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-secondary px-6 py-6 text-lg">
              View Plans
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-item">
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized infrastructure for incredible performance and low latency.</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground">Resources that grow with your needs for uninterrupted operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Hero Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
