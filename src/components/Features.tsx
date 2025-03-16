
import { useEffect, useRef } from 'react';
import { 
  Server, 
  Shield, 
  Cpu, 
  Globe, 
  Clock, 
  Headphones, 
  Zap, 
  BarChart4 
} from 'lucide-react';

const features = [
  {
    icon: <Cpu />,
    title: "High-Performance Servers",
    description: "Powered by the latest Intel and AMD processors with NVMe SSD storage for blazing-fast load times."
  },
  {
    icon: <Globe />,
    title: "Global Network",
    description: "Strategically located data centers around the world to ensure low latency for all your visitors."
  },
  {
    icon: <Shield />,
    title: "Advanced Security",
    description: "Enterprise-grade protection against DDoS attacks and vulnerabilities with regular security audits."
  },
  {
    icon: <Server />,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, and storage resources with no overselling to ensure consistent performance."
  },
  {
    icon: <Clock />,
    title: "99.9% Uptime",
    description: "Redundant infrastructure and proactive monitoring ensure your services stay online 24/7."
  },
  {
    icon: <Headphones />,
    title: "24/7 Expert Support",
    description: "Our technical experts are available around the clock to assist with any issues or questions."
  },
  {
    icon: <Zap />,
    title: "One-Click Applications",
    description: "Deploy popular applications and frameworks with a single click using our intuitive control panel."
  },
  {
    icon: <BarChart4 />,
    title: "Detailed Analytics",
    description: "Comprehensive metrics and insights about your server's performance, traffic, and resource usage."
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const fadeElements = document.querySelectorAll('.fade-in-on-view');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" ref={featuresRef} className="section bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-on-view">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-medium">Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Cutting-Edge Features for <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Modern Hosting Needs
            </span>
          </h2>
          <p className="section-subtitle">
            Our infrastructure is designed for developers, businesses, and high-traffic websites that demand exceptional performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 fade-in-on-view transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Features;
