"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe2, Zap, Shield, Users, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      features: ["5 Team Members", "Basic Analytics", "24/7 Support", "10GB Storage"],
      popular: false
    },
    {
      name: "Professional",
      price: "99",
      features: ["25 Team Members", "Advanced Analytics", "Priority Support", "100GB Storage", "Custom Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "299",
      features: ["Unlimited Team Members", "Enterprise Analytics", "Dedicated Support", "Unlimited Storage", "Custom Solutions", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with Mobile Menu */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4 relative z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">GlobalTech</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Get Started
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                <a href="#features" onClick={toggleMenu} className="text-gray-900 hover:text-indigo-600 transition-colors">Features</a>
                <a href="#pricing" onClick={toggleMenu} className="text-gray-900 hover:text-indigo-600 transition-colors">Pricing</a>
                <a href="#testimonials" onClick={toggleMenu} className="text-gray-900 hover:text-indigo-600 transition-colors">Testimonials</a>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 animate-fade-in">
            Transform Your Business with
            <span className="text-indigo-600 inline-block animate-pulse"> Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Empower your team with cutting-edge solutions that drive growth and efficiency.
            Join thousands of satisfied customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-indigo-600 transition duration-300 transform hover:scale-105">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the tools and solutions you need to succeed in today's digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Zap className="h-10 w-10 text-indigo-600" />,
                title: "Lightning Fast",
                description: "Experience unprecedented speed and performance with our optimized platform."
              },
              {
                icon: <Shield className="h-10 w-10 text-indigo-600" />,
                title: "Secure & Reliable",
                description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee."
              },
              {
                icon: <Users className="h-10 w-10 text-indigo-600" />,
                title: "Team Collaboration",
                description: "Work seamlessly with your team using our intuitive collaboration tools."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bg-gray-50">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'border-2 border-indigo-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full transition duration-300 ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Trusted by Industry Leaders
              </h2>
              <div className="space-y-6">
                {[
                  "Advanced analytics and reporting",
                  "24/7 dedicated support",
                  "Custom integration options",
                  "Regular feature updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle2 className="h-6 w-6 text-green-500 transform group-hover:scale-110 transition-transform" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies that trust us to power their business.
            Start your free trial today.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe2 className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">GlobalTech</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with innovative solutions since 2024.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "Updates"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Partners"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "Blog", "API"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 GlobalTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}