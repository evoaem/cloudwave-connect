
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and websites",
    price: "$19",
    features: [
      "2 CPU Cores",
      "4GB RAM",
      "80GB SSD Storage",
      "2TB Bandwidth",
      "Basic DDoS Protection",
      "24/7 Support",
      "99.9% Uptime Guarantee"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and applications",
    price: "$49",
    features: [
      "4 CPU Cores",
      "8GB RAM",
      "160GB SSD Storage",
      "5TB Bandwidth",
      "Advanced DDoS Protection",
      "24/7 Priority Support",
      "99.9% Uptime Guarantee",
      "Free Domain"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For high-demand applications and heavy traffic",
    price: "$99",
    features: [
      "8 CPU Cores",
      "16GB RAM",
      "320GB SSD Storage",
      "Unlimited Bandwidth",
      "Premium DDoS Protection",
      "24/7 Priority Support",
      "99.99% Uptime Guarantee",
      "Free Domain",
      "Dedicated IP"
    ],
    popular: false
  }
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

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
    <section id="pricing" ref={pricingRef} className="section bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-on-view">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-medium">Pricing</span>
          </div>
          <h2 className="section-title">
            Simple, Transparent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Pricing
            </span>
          </h2>
          <p className="section-subtitle text-white">
            Choose the plan that fits your needs. All plans include our core hosting features with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly' ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'annually' ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setBillingPeriod('annually')}
            >
              Annually <span className="text-xs ml-1 opacity-90">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 fade-in-on-view ${
                plan.popular 
                  ? 'popular-pricing-card ring-2 ring-primary shadow-xl transform hover:translate-y-[-8px]' 
                  : 'pricing-card shadow-lg hover:shadow-xl transform hover:translate-y-[-5px]'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-semibold text-center py-1.5">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-black">
                    {billingPeriod === 'annually' 
                      ? `$${parseInt(plan.price.substring(1)) * 0.8 * 12}`
                      : plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{billingPeriod === 'annually' ? 'year' : 'month'}
                  </span>
                </div>
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary border border-primary/20 text-primary hover:bg-primary/10'
                  }`}
                >
                  Get Started
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className={`h-4 w-4 ${plan.popular ? 'text-primary' : 'text-primary'}`} />
                      </div>
                      <p className="ml-2.5 text-sm text-black">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-blue-100/10 rounded-full filter blur-3xl animate-pulse-subtle opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-indigo-100/10 rounded-full filter blur-3xl animate-pulse-subtle opacity-30" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Pricing;
