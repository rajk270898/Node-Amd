import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Check, Star, Users } from 'lucide-react';
import { useState } from 'react';

const membershipTiers = [
  {
    id: "general",
    name: "General Member",
    icon: <Users size={24} className="text-emerald-600" />,
    description: "Perfect for anyone interested in Node.js who wants to join our community events and discussions.",
    benefits: [
      "Access to monthly meetups",
      "Join our online community forums",
      "Networking opportunities",
      "Access to learning resources",
      "Eligibility for Rising Star recognition"
    ],
    requirements: [
      "Interest in Node.js and web development",
      "Adhere to our code of conduct",
      "Create a community profile"
    ],
    cta: "Join as General Member",
    featured: false
  },
  {
    id: "contributor",
    name: "Contributor",
    icon: <Star size={24} className="text-emerald-600" />,
    description: "For active members who contribute to the growth and knowledge sharing within our community.",
    benefits: [
      "All General Member benefits",
      "Speaker opportunities at events",
      "Featured profile on our website",
      "Early access to workshops and events",
      "Eligible for Member of the Month recognition",
      "Community project participation"
    ],
    requirements: [
      "Active participation in community discussions",
      "Contribute to at least one community project or event",
      "Attend minimum 3 meetups per quarter",
      "Share knowledge through presentations or content"
    ],
    cta: "Apply as Contributor",
    featured: true
  },
  {
    id: "organizer",
    name: "Organizer",
    icon: <Award size={24} className="text-emerald-600" />,
    description: "For dedicated members who help organize events, lead projects, and guide the community's direction.",
    benefits: [
      "All Contributor benefits",
      "Leadership role in community",
      "Direct networking with sponsors",
      "Represent community at conferences",
      "Input on community roadmap",
      "Mentorship opportunities"
    ],
    requirements: [
      "Previous experience as a Contributor",
      "Demonstrated leadership skills",
      "Commitment to organizing at least 2 events per year",
      "Active mentorship of newer members",
      "Contribute to community growth strategies"
    ],
    cta: "Apply as Organizer",
    featured: false
  }
];

const Membership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'general',
    experience: '',
    interests: [],
    message: '',
    codeOfConduct: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const interests = [...(prev.interests as string[])];
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        if (index > -1) {
          interests.splice(index, 1);
        }
      }
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Your application has been submitted. We will contact you soon!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership Tiers</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our vibrant NodeJS Ahmedabad community and grow with us. We offer different levels of involvement to match your interests and availability.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {membershipTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border ${
                tier.featured ? 'border-emerald-200 relative bg-gradient-to-b from-white to-emerald-50' : 'border-gray-100 bg-white'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-medium">
                  Popular Choice
                </div>
              )}
              <div className="p-6">
                <div className={`w-16 h-16 rounded-lg ${tier.featured ? 'bg-emerald-100' : 'bg-gray-50'} flex items-center justify-center mb-4`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="#join-form"
                  className={`block w-full py-3 text-center rounded-lg font-medium transition-colors ${
                    tier.featured 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div id="join-form" className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Community</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">Membership Tier</label>
                <select
                  id="tier"
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="general">General Member</option>
                  <option value="contributor">Contributor</option>
                  <option value="organizer">Organizer</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Your Experience with Node.js</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (< 1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3-5 years)</option>
                <option value="expert">Expert (5+ years)</option>
              </select>
            </div>
            
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { value: "backend", label: "Backend Development" },
                  { value: "frontend", label: "Frontend with Node.js" },
                  { value: "devops", label: "DevOps & Deployment" },
                  { value: "databases", label: "Databases & ORMs" },
                  { value: "apis", label: "API Development" },
                  { value: "serverless", label: "Serverless Architecture" },
                  { value: "testing", label: "Testing & QA" },
                  { value: "security", label: "Security" }
                ].map((interest) => (
                  <div key={interest.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={interest.value}
                      name="interests"
                      value={interest.value}
                      onChange={handleInterestChange}
                      className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                    />
                    <label htmlFor={interest.value} className="ml-2 text-sm text-gray-700">
                      {interest.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to join our community? (For Contributor/Organizer, please mention relevant experience)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="codeOfConduct"
                  name="codeOfConduct"
                  type="checkbox"
                  checked={formData.codeOfConduct as boolean}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="codeOfConduct" className="text-gray-700">
                  I agree to abide by the <a href="/code-of-conduct" className="text-emerald-600 hover:text-emerald-700">Code of Conduct</a> and <a href="/terms" className="text-emerald-600 hover:text-emerald-700">Terms of Use</a>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about membership? Check our <a href="/faq" className="text-emerald-600 hover:text-emerald-700">FAQ page</a> or contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
