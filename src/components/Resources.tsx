import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BookOpen, Code, ExternalLink, FileText, Github, Youtube } from 'lucide-react';

const resourceCategories = [
  {
    id: 'learning',
    title: 'Learning Resources',
    description: 'Curated resources to help you master Node.js',
    icon: <BookOpen size={24} className="text-emerald-600" />,
    items: [
      {
        title: 'Node.js Official Documentation',
        description: 'Comprehensive documentation and API reference.',
        link: 'https://nodejs.org/en/docs/'
      },
      {
        title: 'Express.js Guide',
        description: 'Learn how to use Express.js for web applications.',
        link: 'https://expressjs.com/en/guide/routing.html'
      },
      {
        title: 'Asynchronous JavaScript',
        description: 'Understanding Promises, async/await, and event loops.',
        link: '#'
      },
      {
        title: 'MongoDB with Node.js',
        description: 'How to integrate MongoDB with your Node applications.',
        link: '#'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Community Projects',
    description: 'Open-source projects built by our community',
    icon: <Github size={24} className="text-emerald-600" />,
    items: [
      {
        title: 'Ahmedabad API',
        description: 'A RESTful API providing information about Ahmedabad city.',
        link: 'https://github.com'
      },
      {
        title: 'Node Workshop Starter',
        description: 'Template repository for workshop exercises and examples.',
        link: 'https://github.com'
      },
      {
        title: 'Express Boilerplate',
        description: 'Production-ready Express.js project starter with authentication.',
        link: 'https://github.com'
      }
    ]
  },
  {
    id: 'videos',
    title: 'Video Tutorials',
    description: 'Video content from our workshops and meetups',
    icon: <Youtube size={24} className="text-emerald-600" />,
    items: [
      {
        title: 'Node.js Architecture Deep Dive',
        description: 'Understanding the internals of Node.js.',
        link: '#'
      },
      {
        title: 'Building Real-time Applications',
        description: 'Using Socket.io with Node.js for real-time features.',
        link: '#'
      },
      {
        title: 'Deploying Node.js Applications',
        description: 'Best practices for deploying to production.',
        link: '#'
      }
    ]
  }
];

const Resources = () => {
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
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Resources</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expand your Node.js knowledge with our curated collection of resources, tutorials, and community projects.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <a 
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">{item.title}</h4>
                          <ExternalLink size={16} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Monthly Newsletter</h3>
              <p className="mb-6 opacity-90">
                Stay updated with the latest Node.js news, community events, and resources. Our newsletter is delivered once a month, no spam.
              </p>
              <form className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="bg-emerald-600 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-4">What's included:</h4>
              <ul className="space-y-3">
                {[
                  "Latest Node.js articles and tutorials",
                  "Upcoming community events and workshops",
                  "Project spotlights and case studies",
                  "Job opportunities in Ahmedabad",
                  "Exclusive resources and discount codes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
