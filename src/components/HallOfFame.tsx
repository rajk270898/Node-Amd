import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp, Users } from 'lucide-react';

const memberOfMonth = {
  name: "Vikram Shah",
  role: "Senior Backend Developer",
  image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop",
  company: "TechForward Solutions",
  contributions: "Led 3 workshops on Node.js performance optimization and contributed to community documentation.",
  quote: "The NodeJS Ahmedabad community has been instrumental in my growth as a developer. The collaborative environment and knowledge sharing is unparalleled."
};

const coreContributors = [
  {
    name: "Ananya Patel",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    contributions: "Workshop coordinator & content creator"
  },
  {
    name: "Rajiv Mehta",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    contributions: "Infrastructure management & mentorship"
  },
  {
    name: "Priya Desai",
    role: "Frontend Specialist",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1989&auto=format&fit=crop",
    contributions: "UI/UX guidance & workshop facilitation"
  }
];

const risingStars = [
  {
    name: "Arjun Kumar",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop",
    contributions: "Active forum participant & first-time speaker"
  },
  {
    name: "Neha Singh",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    contributions: "Community project contributor & documentation"
  },
  {
    name: "Karan Shah",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    contributions: "Debugging assistance & beginner workshops"
  },
  {
    name: "Meera Joshi",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    contributions: "Code reviews & mentorship"
  }
];

const achievements = [
  {
    name: "Workshop Guru",
    description: "Conducted 3+ workshops for the community",
    icon: <Users className="text-emerald-600" size={20} />
  },
  {
    name: "Content Creator",
    description: "Published 5+ technical articles or tutorials",
    icon: <Award className="text-emerald-600" size={20} />
  },
  {
    name: "Community Builder",
    description: "Referred 10+ new members to the community",
    icon: <Star className="text-emerald-600" size={20} />
  },
  {
    name: "Rising Contributor",
    description: "Consistently active in community discussions",
    icon: <TrendingUp className="text-emerald-600" size={20} />
  }
];

const HallOfFame = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hall of Fame</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating the outstanding contributors who make our NodeJS Ahmedabad community thrive.
          </p>
        </div>

        {/* Member of the Month */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center">
              <Star className="text-yellow-500 mr-2" size={24} />
              Member of the Month
            </h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Award className="text-white" size={32} />
                </div>
                <div className="rounded-xl overflow-hidden h-80 shadow-md border border-gray-100">
                  <img 
                    src={memberOfMonth.image} 
                    alt={memberOfMonth.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{memberOfMonth.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{memberOfMonth.role} at {memberOfMonth.company}</p>
                
                <div className="mb-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                  <p className="text-gray-700">{memberOfMonth.contributions}</p>
                </div>
                
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute -left-3 top-0 text-5xl text-emerald-200">"</div>
                    <p className="italic text-gray-600 pl-6">{memberOfMonth.quote}</p>
                    <div className="absolute -right-3 bottom-0 text-5xl text-emerald-200">"</div>
                  </div>
                </div>

                <a 
                  href="/team-profile/vikram-shah" 
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  View Full Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Contributors */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center">
              <Users className="text-emerald-500 mr-2" size={24} />
              Core Contributors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreContributors.map((contributor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={contributor.image} 
                    alt={contributor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{contributor.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{contributor.role}</p>
                  <p className="text-gray-600 mb-4">{contributor.contributions}</p>
                  <a 
                    href={`/team-profile/${contributor.name.toLowerCase().replace(' ', '-')}`}
                    className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center"
                  >
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rising Stars */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center">
              <TrendingUp className="text-emerald-500 mr-2" size={24} />
              Rising Stars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {risingStars.map((star, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={star.image} 
                    alt={star.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{star.name}</h3>
                <p className="text-gray-600 text-sm">{star.contributions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Badges & Achievements */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 inline-flex items-center">
              <Award className="text-emerald-500 mr-2" size={24} />
              Badges & Achievements
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Our community recognizes and celebrates members who go above and beyond. Earn these badges through your contributions and engagement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to be featured in our Hall of Fame? Get involved in the community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/membership" 
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Explore Membership Options
            </a>
            <a 
              href="/events" 
              className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
