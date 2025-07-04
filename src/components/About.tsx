import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Code, Users } from 'lucide-react';

const features = [
  {
    icon: <Code size={24} className="text-emerald-600" />,
    title: "Technical Workshops",
    description: "Hands-on workshops on Node.js, Express, MongoDB, and related technologies."
  },
  {
    icon: <Users size={24} className="text-emerald-600" />,
    title: "Networking",
    description: "Connect with local developers, share experiences, and build your professional network."
  },
  {
    icon: <Calendar size={24} className="text-emerald-600" />,
    title: "Regular Meetups",
    description: "Monthly meetups featuring talks from community members and industry experts."
  },
  {
    icon: <BookOpen size={24} className="text-emerald-600" />,
    title: "Learning Resources",
    description: "Access to curated learning materials, tutorials, and documentation."
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Community</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2021, NodeJS Ahmedabad is a community of passionate developers dedicated to learning, sharing, and growing together in the Node.js ecosystem.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                We aim to foster a vibrant community of Node.js developers in Ahmedabad through knowledge sharing, collaboration, and continuous learning.
              </p>
              <ul className="space-y-3">
                {[
                  "Promote Node.js best practices and standards",
                  "Support beginners and experienced developers alike",
                  "Create networking opportunities for professionals",
                  "Build projects that benefit the local community"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex-shrink-0 mt-1 mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white px-3 py-1 rounded-md text-sm font-medium">Since 2021</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users size={32} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">500+</div>
                      <div className="text-gray-600">Community Members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar size={32} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">42</div>
                      <div className="text-gray-600">Events Hosted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Code size={32} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">12</div>
                      <div className="text-gray-600">Community Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
