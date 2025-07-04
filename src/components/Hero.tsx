import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Active & Growing Community</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ahmedabad's Premier <br /> 
            <span className="text-emerald-600">Node.js Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and grow your skills with the most active JavaScript community in Ahmedabad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#join" 
              className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/20"
            >
              Join the Community
            </a>
            <a 
              href="#events" 
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
            >
              Upcoming Events
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors">
          <ArrowDown size={20} className="text-emerald-600" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
