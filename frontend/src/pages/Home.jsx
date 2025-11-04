import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target,
  Wallet,
  ArrowRight,
  Zap,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Star,
  Flame,
  Trophy,
  Rocket,
  Clock
} from 'lucide-react';

// DODO assets
import dodoHeroImage from '/dodo-hero.png';
import DodoLogo from '/dodo-logo.png';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatVariants = {
    initial: { y: 0, rotate: 0 },
    animate: { 
      y: [-20, 0, -20], 
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlowVariants = {
    initial: { boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" },
    animate: {
      boxShadow: [
        "0 0 30px rgba(168, 85, 247, 0.5)",
        "0 0 50px rgba(168, 85, 247, 0.8)",
        "0 0 30px rgba(168, 85, 247, 0.5)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      textShadow: [
        "0 0 20px rgba(168, 85, 247, 0.5)",
        "0 0 30px rgba(168, 85, 247, 0.8)",
        "0 0 20px rgba(168, 85, 247, 0.5)"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const heroImageVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    },
    hover: { scale: 1.05 }
  };

  const crispHighlights = [
    {
      title: "Set Goals That Stick",
      description: "Break big dreams into daily wins with smart reminders and progress tracking.",
      icon: Target,
      color: "from-purple-500 to-violet-600",
      gradient: "bg-gradient-to-br from-purple-400 to-violet-500"
    },
    {
      title: "Earn & Grow",
      description: "Complete tasks, earn points, and unlock rewards in your personal productivity bank.",
      icon: Wallet,
      color: "from-violet-500 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-400 to-purple-500"
    },
    {
      title: "Stay in Flow",
      description: "Focus mode, Pomodoro timers, and AI insights keep you productive all day.",
      icon: Flame,
      color: "from-purple-600 to-pink-600",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-white text-black relative overflow-hidden mt-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 bg-gradient-to-r from-purple-500/15 to-violet-600/15 rounded-full blur-3xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 1.5,
              duration: 10 + i * 2,
              repeat: Infinity
            }}
          />
        ))}

        <motion.div
          className="fixed w-96 h-96 pointer-events-none z-0 opacity-8"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)'
          }}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 pt-24 pb-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="text-center mb-32 flex flex-col md:flex-row items-center justify-between">
          {/* Left column: logo, text, buttons */}
          <motion.div className="mb-6 md:mb-0 md:w-1/2 flex flex-col items-center w-full" variants={slideUpVariants}>
            <motion.img 
              src={DodoLogo}
              alt="DODO"
              className="mx-auto h-20 w-auto mb-3 filter drop-shadow-2xl md:h-32 md:mb-6"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            />
            
            {/* Hero image: mobile only */}
            <motion.div 
              className="w-full md:hidden"
              variants={heroImageVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <img 
                src={dodoHeroImage} 
                alt="DODO"
                className="w-64 h-auto max-w-xs mx-auto mb-2 sm:w-80 sm:mb-3"
              />
            </motion.div>

            <p className="text-lg md:text-3xl lg:text-4xl mb-2 md:mb-3 font-light leading-tight">
              Achieve More with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 font-bold">DODO</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 max-w-xs sm:max-w-md mx-auto leading-relaxed md:text-base md:max-w-2xl md:mb-8 lg:text-lg lg:max-w-4xl lg:mb-12">
              Turn intentions into action. Set goals, earn rewards, and build habits that last — all in one beautiful app.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 md:gap-6 md:mb-16 lg:mb-20"
              variants={slideUpVariants}
            >
              <Link to="/goals">
                <motion.button 
                  className="group relative bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-2 px-5 rounded-lg text-sm sm:py-3 sm:px-6 sm:rounded-xl sm:text-base md:py-5 md:px-10 md:rounded-2xl md:text-xl shadow-xl"
                  variants={pulseGlowVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    <Target className="w-4 h-4 md:w-5 md:h-5" />
                    Set Goals
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/bank">
                <motion.button 
                  className="group bg-transparent border-2 border-purple-500/60 text-purple-600 hover:text-white hover:bg-purple-600 font-bold py-2 px-5 rounded-lg text-sm backdrop-blur-sm sm:py-3 sm:px-6 sm:rounded-xl sm:text-base md:py-5 md:px-10 md:rounded-2xl md:text-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(168, 85, 247, 0.9)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2 md:gap-3">
                    <Wallet className="w-4 h-4 md:w-5 md:h-5" />
                    Open Bank
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column: hero image for desktop */}
          <motion.div 
            className="hidden md:flex md:w-1/2 items-center justify-center"
            variants={heroImageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img 
              src={dodoHeroImage} 
              alt="DODO"
              className="w-80 h-auto max-w-md mx-auto lg:w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Crisp Highlights Section - Replaces Stats & Demo */}
        <motion.section 
          className="max-w-6xl mx-auto mb-32"
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crispHighlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-white/50 backdrop-blur-2xl rounded-3xl border border-purple-100/20 overflow-hidden"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Orb */}
                <motion.div 
                  className={`absolute -top-12 -right-12 w-32 h-32 ${item.gradient} rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 12 }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <motion.div 
                    className="mt-6 flex items-center text-purple-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 6 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          variants={slideUpVariants}
        >
      
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;