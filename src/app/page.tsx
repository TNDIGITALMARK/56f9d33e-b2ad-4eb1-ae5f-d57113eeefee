"use client";

import { useState } from "react";

export const dynamic = 'force-dynamic'

export default function MVPArchitectPage() {
  const [formData, setFormData] = useState({
    projectType: '',
    problem: '',
    features: '',
    designPreferences: '',
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Project inquiry submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background tech-pattern">
      {/* Header Navigation */}
      <header className="relative z-50 glass-effect border-b border-border/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent">
              MVP Architect
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-foreground/80 hover:text-primary transition-colors">Solutions</a>
              <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity tech-glow">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">UNLOCK UNLIMITED</span><br />
                <span className="tech-gradient bg-clip-text text-transparent">CREATIVE POSSIBILITIES</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your vision into reality with our MVP Architect service. We create stunning 3-page MVP prototypes that showcase your core concept with beautiful UI mockups, realistic mock data, and a clear vision for future growth.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity tech-glow">
                Start Your Project
              </button>
            </div>
            <div className="relative">
              <div className="holographic-border p-8 floating-animation">
                <div className="glass-effect rounded-lg p-6 space-y-4">
                  <div className="w-full h-4 bg-primary/30 rounded animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-primary/20 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1/2 h-4 bg-primary/10 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded"></div>
                    <div className="h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">OUR EXPERTISE</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-effect rounded-xl p-8 hover-lift">
              <div className="w-16 h-16 tech-gradient rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">HOLOGRAPHIC INTERFACES</h3>
              <p className="text-muted-foreground">Create stunning, futuristic interfaces that captivate users and showcase your product's cutting-edge nature.</p>
            </div>
            <div className="glass-effect rounded-xl p-8 hover-lift">
              <div className="w-16 h-16 tech-gradient rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">DYNAMIC VISUALS</h3>
              <p className="text-muted-foreground">Bring your concepts to life with interactive animations and responsive design elements that engage and inspire.</p>
            </div>
            <div className="glass-effect rounded-xl p-8 hover-lift">
              <div className="w-16 h-16 tech-gradient rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">AI-POWERED DESIGN</h3>
              <p className="text-muted-foreground">Leverage artificial intelligence to create intelligent, adaptive user experiences that evolve with your users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">SUCCESS STORIES</h2>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">READY TO START YOUR PROJECT?</h3>
              <div className="flex gap-4 ml-8">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                  GET FREE CONSULTATION
                </button>
                <button className="border border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary/10 transition-colors">
                  VIEW PRICING
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "FinTech Platform", subtitle: "Digital Banking Solution", image: "bg-gradient-to-br from-blue-600 to-purple-700" },
              { title: "AI Healthcare App", subtitle: "Medical Diagnosis Tool", image: "bg-gradient-to-br from-green-500 to-blue-600" },
              { title: "E-Commerce Portal", subtitle: "Next-Gen Shopping Experience", image: "bg-gradient-to-br from-orange-500 to-red-600" },
              { title: "Crypto Trading Bot", subtitle: "Automated Trading System", image: "bg-gradient-to-br from-purple-600 to-pink-600" }
            ].map((project, index) => (
              <div key={index} className="glass-effect rounded-xl overflow-hidden hover-lift">
                <div className={`h-32 ${project.image} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Let's Create Your MVP</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Tell us about your project and we'll create a 3-page MVP prototype that showcases your core concept with beautiful UI mockups, realistic mock data, and a clear vision for future growth.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 glass-effect rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="fintech">FinTech</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="social">Social Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What problem does your project solve?</label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe the problem your project addresses..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Key features you want to showcase</label>
                <textarea
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="List the main features you want to highlight in your MVP..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Design preferences and style</label>
                <textarea
                  name="designPreferences"
                  value={formData.designPreferences}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe your preferred design style, colors, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity tech-glow"
              >
                Get Your MVP Prototype
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent">
                MVP Architect
              </div>
              <p className="text-muted-foreground">
                Creating stunning MVP prototypes that bring your vision to life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">MVP Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Prototype Creation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@mvparchitect.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MVP Architect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}