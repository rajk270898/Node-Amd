import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Building, ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';

const currentSponsors = [
  {
    id: 1,
    name: "TechForward Solutions",
    tier: "Platinum",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Leading enterprise solutions provider specializing in cloud infrastructure and digital transformation."
  },
  {
    id: 2,
    name: "WebStack Inc",
    tier: "Gold",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Full-stack development agency focusing on modern web technologies and enterprise solutions."
  },
  {
    id: 3,
    name: "NodeFlow Systems",
    tier: "Gold",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Specialized Node.js consulting firm helping businesses scale their backend infrastructure."
  },
  {
    id: 4,
    name: "DevSpace Coworking",
    tier: "Silver",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Modern coworking space for tech professionals and startups in Ahmedabad."
  },
  {
    id: 5,
    name: "CodeCraft Academy",
    tier: "Silver",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Coding bootcamp specializing in modern JavaScript frameworks and backend technologies."
  },
  {
    id: 6,
    name: "InnovateHub",
    tier: "Bronze",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    website: "https://example.com",
    description: "Technology incubator supporting the next generation of tech startups in Gujarat."
  }
];

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "₹50,000/year",
    benefits: [
      "Logo prominently displayed on website homepage and all event materials",
      "5-minute speaking slot at each major event",
      "Dedicated booth space at all events",
      "4 social media mentions per month",
      "Logo on community t-shirts and swag",
      "First access to recruiting from community talent pool",
      "Opportunity to host one major event per year",
      "4 free tickets to all community events"
    ],
    featured: true
  },
  {
    name: "Gold",
    price: "₹30,000/year",
    benefits: [
      "Logo displayed on website and event materials",
      "2-minute speaking slot at major events",
      "Shared booth space at major events",
      "2 social media mentions per month",
      "Logo on community swag",
      "Access to community talent pool",
      "2 free tickets to all community events"
    ],
    featured: false
  },
  {
    name: "Silver",
    price: "₹15,000/year",
    benefits: [
      "Logo displayed on website",
      "Acknowledgment at events",
      "1 social media mention per month",
      "Discounted booth space at events",
      "Access to community talent pool",
      "1 free ticket to all community events"
    ],
    featured: false
  },
  {
    name: "Bronze",
    price: "₹5,000/year",
    benefits: [
      "Logo displayed on website",
      "Acknowledgment at events",
      "Quarterly social media mentions",
      "1 free ticket to quarterly major events"
    ],
    featured: false
  }
];

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tier: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        tier: '',
        message: ''
      });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're grateful to these organizations for supporting the NodeJS Ahmedabad community and helping us grow.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="h-40 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      sponsor.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                      sponsor.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      sponsor.tier === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {sponsor.tier}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Visit Website
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sponsorship Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Support our community and gain visibility with Node.js developers in Ahmedabad. Our sponsorship tiers offer various benefits to match your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border ${
                  tier.featured ? 'border-emerald-200 bg-gradient-to-b from-white to-emerald-50' : 'border-gray-100 bg-white'
                }`}
              >
                <div className={`p-6 border-b ${tier.featured ? 'border-emerald-100' : 'border-gray-100'}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name} Tier</h3>
                  <p className="text-2xl font-bold text-emerald-600">{tier.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award size={16} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a 
                    href="#inquiry-form" 
                    className={`block w-full py-2 text-center rounded-lg font-medium transition-colors ${
                      tier.featured 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50'
                    }`}
                  >
                    Become a Sponsor
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="/sponsorship-deck" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-emerald-600 bg-white hover:bg-gray-50 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Sponsorship Deck
            </a>
          </div>
        </div>

        <div id="inquiry-form" className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
              <Building size={24} className="text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Sponsorship Inquiry</h2>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                Your sponsorship inquiry has been received. Our team will contact you shortly to discuss the details.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">Interested Sponsorship Tier</label>
                <select
                  id="tier"
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select a tier</option>
                  <option value="platinum">Platinum</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="bronze">Bronze</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Tell us about your company, your goals, or any questions you have."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                  isSubmitting ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
