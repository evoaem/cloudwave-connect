
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "HighEnd Nodes has been a game-changer for our e-commerce platform. The speed improvement was immediately noticeable, and our conversion rates have increased by 18% since migrating.",
    author: "Alex Thompson",
    role: "CTO, ShopWave",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a game server host, reliability and performance are critical. Since switching to HighEnd Nodes, our players have reported much smoother gameplay and fewer latency issues.",
    author: "Sarah Chen",
    role: "Founder, GameServe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Their support team is exceptional. When we faced a sudden traffic spike, they helped us scale our resources within minutes, preventing any downtime for our users.",
    author: "Michael Rodriguez",
    role: "Developer, TechFlow",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    quote: "I've tried many hosting providers before, but HighEnd Nodes offers the perfect balance of performance, reliability and value. Couldn't be happier with the service.",
    author: "Emma Wilson",
    role: "Founder, DesignCollective",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

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

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" ref={testimonialsRef} className="section bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-on-view">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-medium">Testimonials</span>
          </div>
          <h2 className="section-title">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our customers have to say about their experience with HighEnd Nodes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto fade-in-on-view">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className={`transition-transform duration-500 ease-in-out flex ${
                  isAnimating ? 'opacity-80' : 'opacity-100'
                }`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full">
                    <div className="glass-card rounded-2xl p-8 md:p-12">
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl font-display mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white shadow-lg rounded-full p-3 opacity-90 hover:opacity-100 transition-opacity z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white shadow-lg rounded-full p-3 opacity-90 hover:opacity-100 transition-opacity z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-2.5 w-2.5 rounded-full mx-1.5 transition-all ${
                  activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-blue-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-indigo-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Testimonials;
