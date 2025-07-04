import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Calendar, Check, Clock, MapPin, Users, X } from 'lucide-react';
import { format } from 'date-fns';

// Mock event data
const event = {
  id: "node-streams-workshop-2025",
  title: "Deep Dive: Node.js Streams Workshop",
  date: new Date("2025-07-15T18:00:00"),
  endTime: new Date("2025-07-15T21:00:00"),
  location: "TechHub Coworking, Ahmedabad",
  capacity: 50,
  registered: 42,
  description: "Join us for an in-depth workshop on Node.js streams. Learn how to effectively use streams to handle large datasets, improve performance, and build scalable applications.",
  image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2787&auto=format&fit=crop",
  schedule: [
    {
      time: "18:00 - 18:15",
      title: "Welcome & Introduction",
      description: "Introduction to the workshop and overview of what will be covered."
    },
    {
      time: "18:15 - 19:00",
      title: "Streams Fundamentals",
      description: "Understanding readable, writable, duplex, and transform streams."
    },
    {
      time: "19:00 - 19:15",
      title: "Break",
      description: "Refreshments provided"
    },
    {
      time: "19:15 - 20:15",
      title: "Hands-on Coding Session",
      description: "Building applications using streams with guided exercises."
    },
    {
      time: "20:15 - 20:45",
      title: "Performance Optimization",
      description: "Tips and tricks for optimizing stream-based applications."
    },
    {
      time: "20:45 - 21:00",
      title: "Q&A and Conclusion",
      description: "Open forum for questions and workshop wrap-up."
    }
  ],
  speakers: [
    {
      name: "Ravi Patel",
      role: "Senior Backend Developer at TechCorp",
      bio: "Ravi has over 8 years of experience building high-performance Node.js applications. He specializes in system architecture and performance optimization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
    },
    {
      name: "Neha Sharma",
      role: "Tech Lead at WebSolutions",
      bio: "Neha is a JavaScript expert with a focus on modern development practices. She has contributed to several open-source Node.js projects.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
    }
  ],
  requirements: [
    "Basic knowledge of JavaScript and Node.js",
    "Laptop with Node.js installed (v14+ recommended)",
    "Code editor of your choice",
    "GitHub account for accessing workshop materials"
  ]
};

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    expectations: '',
    dietaryRestrictions: '',
    agreeToTerms: false
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistrationComplete(true);
    }, 1500);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  // Function to generate calendar links
  const generateCalendarLinks = () => {
    const startTime = event.date.toISOString();
    const endTime = event.endTime.toISOString();
    const title = encodeURIComponent(event.title);
    const location = encodeURIComponent(event.location);
    const description = encodeURIComponent(event.description);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime.replace(/[-:]/g, '').replace(/\.\d+/g, '')}/${endTime.replace(/[-:]/g, '').replace(/\.\d+/g, '')}&details=${description}&location=${location}&sf=true&output=xml`;
    
    // For Outlook/Office 365 (uses .ics file)
    const outlookCalendarUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startTime}&enddt=${endTime}&body=${description}&location=${location}`;
    
    return { googleCalendarUrl, outlookCalendarUrl };
  };

  const { googleCalendarUrl, outlookCalendarUrl } = generateCalendarLinks();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Event Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl overflow-hidden shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 text-white">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Workshop
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-3 flex-shrink-0" />
                  <span>{format(event.date, "EEEE, MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-3 flex-shrink-0" />
                  <span>{format(event.date, "h:mm a")} - {format(event.endTime, "h:mm a")}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="mr-3 flex-shrink-0" />
                  <span>{event.registered} / {event.capacity} registered</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowCalendarModal(true)}
                  className="flex items-center px-4 py-2 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <CalendarIcon size={18} className="mr-2" />
                  Add to Calendar
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
              </div>
              <div className="p-6">
                <div className="prose prose-emerald max-w-none">
                  <p>{event.description}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Schedule</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-28 flex-shrink-0 font-medium text-gray-900">{item.time}</div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Speakers</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                        <p className="text-emerald-600 text-sm mb-2">{speaker.role}</p>
                        <p className="text-gray-600 text-sm">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {event.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Registration</h2>
              </div>
              <div className="p-6">
                {registrationComplete ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Registration Complete!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for registering for {event.title}. We've sent a confirmation email with all the details to your inbox.
                    </p>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setShowCalendarModal(true)}
                        className="w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        <CalendarIcon size={18} className="mr-2" />
                        Add to Calendar
                      </button>
                      <a 
                        href="/events" 
                        className="w-full block text-center px-4 py-2 bg-white text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
                      >
                        View More Events
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
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
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                      </motion.div>
                    )}
                    
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Node.js Experience Level</label>
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
                          <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">What do you hope to learn?</label>
                          <textarea
                            id="expectations"
                            name="expectations"
                            rows={4}
                            value={formData.expectations}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          ></textarea>
                        </div>
                        
                        <div>
                          <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">Dietary Restrictions (if any)</label>
                          <input
                            type="text"
                            id="dietaryRestrictions"
                            name="dietaryRestrictions"
                            value={formData.dietaryRestrictions}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Vegetarian, vegan, gluten-free, etc."
                          />
                        </div>
                      </motion.div>
                    )}
                    
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h3 className="font-medium text-gray-900 mb-3">Registration Summary</h3>
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Name:</span> {formData.name}</p>
                            <p><span className="font-medium">Email:</span> {formData.email}</p>
                            <p><span className="font-medium">Phone:</span> {formData.phone || "Not provided"}</p>
                            <p><span className="font-medium">Company:</span> {formData.company || "Not provided"}</p>
                            <p><span className="font-medium">Experience Level:</span> {formData.experience}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="agreeToTerms"
                              name="agreeToTerms"
                              type="checkbox"
                              checked={formData.agreeToTerms as boolean}
                              onChange={handleChange}
                              required
                              className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="agreeToTerms" className="text-gray-700">
                              I agree to the <a href="/terms" className="text-emerald-600 hover:text-emerald-700">Terms of Use</a> and <a href="/code-of-conduct" className="text-emerald-600 hover:text-emerald-700">Code of Conduct</a>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="mt-6 flex justify-between">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type={step === 3 ? "submit" : "button"}
                        className={`px-6 py-2 ${
                          step === 3 ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-600 hover:bg-emerald-700"
                        } text-white rounded-lg transition-colors ${
                          isSubmitting ? "cursor-not-allowed opacity-70" : ""
                        } ml-auto`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin inline-block mr-2"></div>
                            Registering...
                          </>
                        ) : step === 3 ? (
                          "Complete Registration"
                        ) : (
                          "Next"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowCalendarModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Add to Calendar</h3>
            
            <div className="space-y-3">
              <a 
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-center"
              >
                Google Calendar
              </a>
              
              <a 
                href={outlookCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-center"
              >
                Outlook Calendar
              </a>
              
              <button
                onClick={() => setShowCalendarModal(false)}
                className="block w-full py-3 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-center mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventRegistration;
