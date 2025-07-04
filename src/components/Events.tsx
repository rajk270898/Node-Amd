import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, ExternalLink, MapPin, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Mock upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to Node.js Streams",
    date: new Date("2025-07-15T18:00:00"),
    location: "TechHub Coworking, Ahmedabad",
    attendees: 42,
    description: "A deep dive into Node.js streams and their practical applications in building scalable applications.",
    speaker: "Ravi Patel",
    speakerRole: "Senior Backend Developer at TechCorp",
    image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Building RESTful APIs with Express",
    date: new Date("2025-07-28T17:30:00"),
    location: "DevSpace, Ahmedabad",
    attendees: 38,
    description: "Learn how to design and implement RESTful APIs using Express.js with best practices for authentication and validation.",
    speaker: "Neha Sharma",
    speakerRole: "Tech Lead at WebSolutions",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Node.js Performance Optimization",
    date: new Date("2025-08-10T18:30:00"),
    location: "InnovateHub, Ahmedabad",
    attendees: 35,
    description: "Practical techniques for optimizing Node.js applications, including profiling, memory management, and caching strategies.",
    speaker: "Ankit Desai",
    speakerRole: "Performance Engineer at ScaleTech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  }
];

// Mock past events data
const pastEvents = [
  {
    id: 4,
    title: "Node.js Security Best Practices",
    date: new Date("2025-06-20T18:00:00"),
    location: "TechHub Coworking, Ahmedabad",
  },
  {
    id: 5,
    title: "Microservices with Node.js",
    date: new Date("2025-05-15T17:30:00"),
    location: "DevSpace, Ahmedabad",
  },
  {
    id: 6,
    title: "GraphQL API Development",
    date: new Date("2025-04-25T18:30:00"),
    location: "InnovateHub, Ahmedabad",
  },
  {
    id: 7,
    title: "Testing Node.js Applications",
    date: new Date("2025-03-18T18:00:00"),
    location: "CodeLab, Ahmedabad",
  }
];

const Events = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Events</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for regular meetups, workshops, and networking events. All skill levels are welcome!
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedTab === 'upcoming' ? 'bg-emerald-500 text-white' : 'text-gray-600 hover:text-emerald-600'
              }`}
              onClick={() => setSelectedTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedTab === 'past' ? 'bg-emerald-500 text-white' : 'text-gray-600 hover:text-emerald-600'
              }`}
              onClick={() => setSelectedTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {selectedTab === 'upcoming' ? (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {upcomingEvents.map((event) => (
              <motion.div 
                key={event.id} 
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-md">
                    {format(event.date, "MMM d, yyyy")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-2 text-emerald-500" />
                      <span>{format(event.date, "h:mm a")}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2 text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={18} className="mr-2 text-emerald-500" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5">{event.description}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">{event.speaker}</div>
                      <div className="text-sm text-gray-600">{event.speakerRole}</div>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="block w-full py-3 bg-emerald-500 text-center text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resources</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pastEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{event.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {format(event.date, "MMMM d, yyyy")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <a href="#" className="text-emerald-600 hover:text-emerald-800 flex items-center">
                            <span className="mr-1">Slides</span>
                            <ExternalLink size={14} />
                          </a>
                          <a href="#" className="text-emerald-600 hover:text-emerald-800 flex items-center ml-3">
                            <span className="mr-1">Video</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to speak at one of our events or host a workshop?</p>
          <a 
            href="#join" 
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
          >
            Become a Speaker
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
