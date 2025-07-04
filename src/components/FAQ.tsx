import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CircleHelp, MessageSquare, Send } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: <CircleHelp size={20} className="text-emerald-600" />,
    questions: [
      {
        question: 'What is NodeJS Ahmedabad?',
        answer: 'NodeJS Ahmedabad is a community of developers and enthusiasts interested in Node.js and related technologies. We organize meetups, workshops, and events to foster learning, collaboration, and networking among members.'
      },
      {
        question: 'How often do you organize events?',
        answer: 'We typically organize at least one major event each month, along with smaller workshops and online discussions throughout the month. Check our Events page for the latest schedule.'
      },
      {
        question: 'Do I need to be an expert in Node.js to join?',
        answer: 'Not at all! Our community welcomes members of all skill levels, from beginners to experts. We believe in learning together and supporting each other's growth.'
      },
      {
        question: 'Is there a membership fee?',
        answer: 'Basic membership is free. We offer different tiers of membership with additional benefits, but general participation in the community and most events is open to everyone at no cost.'
      },
      {
        question: 'Where are your events held?',
        answer: 'Our events are typically held at partner venues around Ahmedabad. The specific location for each event is announced on our Events page and in our newsletter.'
      }
    ]
  },
  {
    id: 'events',
    name: 'Events & Participation',
    icon: <CircleHelp size={20} className="text-emerald-600" />,
    questions: [
      {
        question: 'How do I register for an event?',
        answer: 'You can register for events through our Events page. Each event has a dedicated registration form. Some events may have limited spots, so we recommend registering early.'
      },
      {
        question: 'Can I speak at one of your events?',
        answer: 'Absolutely! We're always looking for speakers to share their knowledge and experience. Visit our "Become a Speaker" section on the Join page to submit your talk proposal.'
      },
      {
        question: 'Are your events recorded?',
        answer: 'Yes, most of our major events are recorded and made available on our YouTube channel after the event. Workshop materials are often shared with participants.'
      },
      {
        question: 'What should I bring to an event?',
        answer: 'For workshops, we recommend bringing your laptop. For regular meetups, just bring yourself and your enthusiasm! Specific requirements for each event will be mentioned in the event details.'
      },
      {
        question: 'Do you provide food at events?',
        answer: 'Most of our events include refreshments or light snacks. For longer workshops, lunch may be provided. Event details will specify what's included.'
      }
    ]
  },
  {
    id: 'volunteer',
    name: 'Volunteering & Contributing',
    icon: <CircleHelp size={20} className="text-emerald-600" />,
    questions: [
      {
        question: 'How can I volunteer with NodeJS Ahmedabad?',
        answer: 'We welcome volunteers for event organization, content creation, mentorship, and more. Visit our Membership page and apply for the Contributor or Organizer tier to get started.'
      },
      {
        question: 'What kind of contributions can I make?',
        answer: 'You can contribute in many ways: speaking at events, writing blog posts, creating tutorials, mentoring beginners, helping organize events, or contributing to our community projects.'
      },
      {
        question: 'Do I need to be in Ahmedabad to contribute?',
        answer: 'While being local helps for in-person events, we welcome remote contributions as well, especially for content creation, online mentorship, and virtual events.'
      },
      {
        question: 'Is there recognition for contributors?',
        answer: 'Yes! Active contributors may be featured in our Hall of Fame, nominated for Member of the Month, and receive special badges on their profile. We value and celebrate our community contributors.'
      }
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Policy',
    icon: <CircleHelp size={20} className="text-emerald-600" />,
    questions: [
      {
        question: 'How do you handle my personal data?',
        answer: 'We take data privacy seriously. Your personal information is handled according to our Privacy Policy, which complies with relevant data protection regulations. We only collect data necessary for community functions.'
      },
      {
        question: 'What happens if someone violates the Code of Conduct?',
        answer: 'We have a process for reviewing and addressing Code of Conduct violations. Depending on the severity, actions may range from a warning to temporary or permanent removal from the community.'
      },
      {
        question: 'Can I use materials from your events or website?',
        answer: 'Most of our content is shared under open licenses that allow for non-commercial use with attribution. However, specific restrictions may apply to certain materials. Please check the licensing information provided with each resource.'
      },
      {
        question: 'How can I report inappropriate behavior?',
        answer: 'You can report Code of Conduct violations or concerns to conduct@nodejsahmedabad.org. All reports are treated confidentially and reviewed by our community leaders.'
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        email: '',
        question: ''
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about NodeJS Ahmedabad community, events, and membership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-8 justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-emerald-100 text-emerald-700 font-medium' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-16">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">
                {faqCategories.find(cat => cat.id === activeCategory)?.name} Questions
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                ?.questions.map((faq, index) => {
                  const questionId = `${activeCategory}-${index}`;
                  return (
                    <div key={questionId} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 text-left">{faq.question}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-emerald-600 transition-transform ${openQuestions[questionId] ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {openQuestions[questionId] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <MessageSquare size={24} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Still Have Questions?</h2>
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
                  Your question has been submitted. We'll get back to you via email as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Ask Another Question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    value={formData.question}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="What would you like to know about our community?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors ${
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
                      <span>Submit Question</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
