
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DiscordLogo, Mail, MapPin, Phone } from 'lucide-react';

// Custom Discord logo component
const DiscordLogo = () => (
  <svg className="h-5 w-5" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
  </svg>
);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section id="contact" ref={contactRef} className="section bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-on-view">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-medium">Get in Touch</span>
          </div>
          <h2 className="section-title">
            Need Help?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Contact Us
            </span>
          </h2>
          <p className="section-subtitle">
            We're here to answer your questions and help you get the most out of our services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 fade-in-on-view">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <a href="mailto:support@highendnodes.com" className="text-lg hover:text-primary transition-colors">
                      support@highendnodes.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <a href="tel:+18001234567" className="text-lg hover:text-primary transition-colors">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Address</h4>
                    <p className="text-lg">
                      123 Tech Avenue, <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <DiscordLogo />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Discord</h4>
                    <a 
                      href="https://discord.gg/cNsCcNEheY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Join our Discord Server
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C18.46 4.28 17.8 3.9 17.06 3.67C16.32 3.45 15.54 3.39 14.78 3.49C14.01 3.6 13.29 3.87 12.68 4.29C12.06 4.7 11.56 5.24 11.22 5.87C10.88 6.5 10.71 7.2 10.72 7.9C10.72 8.29 10.76 8.58 10.84 8.87C9.28 8.8 7.76 8.39 6.38 7.68C4.99 6.97 3.79 5.98 2.84 4.79C2.49 5.38 2.31 6.05 2.32 6.73C2.32 8.06 3.01 9.26 4.08 9.95C3.5 9.94 2.94 9.78 2.44 9.5V9.55C2.44 11.11 3.41 12.47 4.79 12.92C4.47 13.01 4.13 13.05 3.79 13.05C3.56 13.05 3.33 13.03 3.1 12.98C3.57 14.29 4.7 15.21 6.07 15.25C4.96 16.14 3.6 16.58 2.21 16.58C1.91 16.58 1.62 16.56 1.33 16.53C2.75 17.47 4.41 17.94 6.11 17.94C13.37 17.94 17.38 12.17 17.38 7.21L17.37 6.66C18.4 5.99 19.26 5.1 19.9 4.07C19.01 4.47 18.06 4.73 17.09 4.84C18.1 4.19 18.84 3.18 19.19 2.01C18.23 2.59 17.17 3 16.06 3.22C15.26 2.36 14.12 1.82 12.91 1.74C11.69 1.66 10.49 2.06 9.57 2.85C8.65 3.63 8.07 4.75 8.01 5.94C7.94 7.14 8.39 8.31 9.24 9.18C7.71 9.11 6.23 8.68 4.92 7.95C3.61 7.22 2.5 6.2 1.69 4.99C1.24 5.75 1 6.62 1 7.51C1 8.36 1.21 9.2 1.61 9.94C2.01 10.68 2.58 11.31 3.28 11.76C2.55 11.75 1.84 11.54 1.21 11.17V11.22C1.21 12.25 1.6 13.25 2.29 14.02C2.99 14.79 3.94 15.28 4.98 15.39C4.31 15.58 3.59 15.6 2.9 15.46C3.18 16.35 3.76 17.12 4.53 17.65C5.29 18.19 6.21 18.46 7.15 18.42C5.63 19.6 3.77 20.25 1.85 20.24C1.55 20.24 1.25 20.22 0.96 20.19C2.9 21.43 5.15 22.1 7.44 22.08C14.68 22.08 18.7 16.31 18.7 11.35L18.69 10.8C19.73 10.13 20.6 9.24 21.24 8.21C20.33 8.63 19.36 8.92 18.37 9.04C19.4 8.39 20.14 7.39 20.5 6.22C19.54 6.8 18.48 7.2 17.37 7.43C16.58 6.56 15.43 6.02 14.21 5.94C12.99 5.87 11.79 6.26 10.86 7.05C9.94 7.83 9.35 8.96 9.3 10.15C9.24 11.35 9.7 12.51 10.54 13.38C9.01 13.31 7.53 12.88 6.21 12.15C4.9 11.42 3.79 10.4 2.98 9.19C2.52 9.95 2.29 10.82 2.29 11.71C2.29 12.56 2.5 13.4 2.9 14.14C3.3 14.88 3.87 15.51 4.57 15.95C3.84 15.95 3.12 15.74 2.49 15.37V15.42C2.49 16.45 2.89 17.44 3.58 18.21C4.27 18.99 5.23 19.47 6.26 19.59C5.6 19.78 4.89 19.8 4.19 19.66C4.47 20.55 5.05 21.32 5.82 21.85C6.58 22.38 7.49 22.66 8.44 22.62C6.91 23.8 5.06 24.45 3.14 24.44C2.84 24.44 2.54 24.43 2.24 24.4C4.17 25.65 6.41 26.32 8.71 26.3C15.95 26.3 19.97 20.53 19.97 15.57L19.96 15.02C21 14.35 21.87 13.46 22.5 12.42C21.61 12.83 20.64 13.1 19.67 13.21C20.71 12.55 21.47 11.55 21.83 10.37C20.87 10.96 19.8 11.39 18.67 11.62C17.87 10.75 16.73 10.21 15.52 10.13C14.31 10.05 13.1 10.44 12.17 11.23C11.25 12.01 10.67 13.13 10.61 14.32C10.55 15.52 11 16.69 11.84 17.56C10.31 17.49 8.83 17.06 7.51 16.33C6.2 15.61 5.09 14.59 4.28 13.37C3.82 14.13 3.59 15 3.59 15.89C3.59 16.74 3.8 17.58 4.2 18.32C4.6 19.06 5.17 19.69 5.87 20.13C5.14 20.13 4.42 19.92 3.79 19.55V19.6C3.79 20.63 4.19 21.62 4.88 22.39C5.58 23.17 6.53 23.65 7.56 23.77C6.9 23.96 6.19 23.98 5.49 23.84C5.77 24.73 6.35 25.5 7.12 26.03C7.88 26.56 8.79 26.84 9.74 26.8C8.21 27.98 6.36 28.63 4.44 28.62C4.14 28.62 3.84 28.61 3.54 28.58C5.47 29.83 7.71 30.5 10.01 30.48C17.25 30.48 21.27 24.71 21.27 19.75L21.26 19.2C22.3 18.53 23.18 17.64 23.81 16.6C22.91 17.01 21.94 17.28 20.95 17.39C21.97 16.73 22.71 15.74 23.07 14.57C22.11 15.15 21.04 15.56 19.93 15.78C19.13 14.91 17.99 14.37 16.78 14.29C15.56 14.21 14.36 14.61 13.43 15.4C12.51 16.18 11.93 17.31 11.87 18.5C11.81 19.69 12.27 20.86 13.11 21.73C11.58 21.66 10.1 21.23 8.78 20.5C7.47 19.78 6.36 18.76 5.55 17.55C5.09 18.31 4.86 19.18 4.86 20.07C4.86 20.92 5.07 21.76 5.47 22.5C5.87 23.24 6.44 23.87 7.14 24.31C6.41 24.31 5.69 24.1 5.06 23.73V23.78C5.06 24.81 5.46 25.8 6.15 26.57C6.84 27.35 7.8 27.83 8.83 27.95C8.17 28.14 7.46 28.16 6.76 28.02C7.04 28.91 7.62 29.68 8.39 30.21C9.15 30.74 10.06 31.02 11.01 30.98C9.48 32.16 7.63 32.81 5.71 32.8C5.41 32.8 5.11 32.79 4.81 32.76C6.74 34.01 8.98 34.68 11.28 34.66C18.52 34.66 22.54 28.89 22.54 23.93L22.53 23.38C23.56 22.71 24.43 21.82 25.07 20.78C24.18 21.19 23.22 21.46 22.23 21.57C23.24 20.9 23.99 19.9 24.34 18.73C23.37 19.31 22.31 19.71 21.21 19.94C20.41 19.06 19.26 18.53 18.04 18.45C16.83 18.37 15.63 18.76 14.7 19.55C13.78 20.33 13.2 21.45 13.14 22.65C13.08 23.85 13.53 25.01 14.38 25.88C12.85 25.82 11.37 25.39 10.05 24.66C8.73 23.93 7.62 22.92 6.81 21.71C6.35 22.47 6.13 23.34 6.13 24.23C6.13 25.08 6.34 25.92 6.74 26.66C7.14 27.4 7.71 28.03 8.41 28.47C7.68 28.47 6.96 28.26 6.33 27.89V27.94C6.33 28.97 6.73 29.96 7.42 30.73C8.11 31.51 9.07 31.99 10.1 32.11C9.44 32.3 8.73 32.32 8.03 32.18C8.31 33.07 8.89 33.84 9.66 34.37C10.43 34.9 11.34 35.18 12.28 35.14C10.76 36.32 8.9 36.97 6.98 36.96C6.68 36.96 6.38 36.95 6.08 36.92C8.01 38.16 10.25 38.83 12.54 38.82C19.78 38.82 23.8 33.05 23.8 28.09L23.79 27.54C24.84 26.87 25.7 25.97 26.33 24.94C25.43 25.35 24.47 25.62 23.48 25.73C24.5 25.07 25.25 24.08 25.61 22.91C24.65 23.48 23.58 23.89 22.47 24.12C21.67 23.25 20.52 22.7 19.31 22.62C18.09 22.54 16.89 22.93 15.96 23.72C15.04 24.5 14.46 25.62 14.4 26.82C14.34 28.02 14.8 29.18 15.64 30.05C14.11 29.98 12.63 29.55 11.31 28.82C10 28.09 8.89 27.07 8.08 25.86C7.62 26.62 7.39 27.49 7.39 28.38C7.39 29.23 7.6 30.07 8 30.81C8.4 31.55 8.97 32.18 9.67 32.62C8.94 32.62 8.22 32.41 7.59 32.04V32.09C7.59 33.12 7.99 34.11 8.68 34.88C9.37 35.66 10.33 36.14 11.36 36.26C10.7 36.45 9.99 36.47 9.29 36.33C9.57 37.22 10.15 37.99 10.92 38.52C11.68 39.05 12.59 39.33 13.54 39.29C12.01 40.47 10.16 41.12 8.24 41.11C7.94 41.11 7.64 41.1 7.34 41.07C9.27 42.31 11.51 42.98 13.8 42.97C21.04 42.97 25.06 37.2 25.06 32.24L25.05 31.69C26.09 31.02 26.95 30.13 27.59 29.09C26.69 29.5 25.73 29.77 24.74 29.88C25.76 29.22 26.5 28.22 26.86 27.05" fill="currentColor"/>
                    </svg>
                  </a>
                  <a 
                    href="https://discord.gg/cNsCcNEheY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Discord"
                  >
                    <DiscordLogo />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM5 8H0V21H5V8ZM12.982 8H8.014V21H12.983V14.601C12.983 9.931 19.012 9.549 19.012 14.601V21H24V13.869C24 6.989 15.078 7.276 12.982 11.155V8Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 fade-in-on-view">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="w-full p-3 rounded-lg border bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="w-full p-3 rounded-lg border bg-white/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="w-full p-3 rounded-lg border bg-white/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={5} 
                    required 
                    className="w-full p-3 rounded-lg border bg-white/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 transition-colors py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100/50 rounded-full filter blur-3xl animate-pulse-subtle opacity-70" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Contact;
