import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Home,
  ListTodo,
  Target,
  Wallet,
  BarChart3,
  MessageSquare,
  PenTool,
  Mail,
  Calendar,
  HelpCircle,
  Phone,
  Bug,
  Lightbulb,
  Lock,
  FileText,
  Users,
  Globe,
  Settings,
  Zap,
  Bell,
  CheckCircle
} from 'lucide-react';
import DodoLogo from '/dodo-logo.png'; // Updated to DODO logo

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Animation variants
  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(168, 85, 247, 0.3)",
        "0 0 30px rgba(168, 85, 247, 0.6)",
        "0 0 20px rgba(168, 85, 247, 0.3)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const footerLinkVariants = {
    initial: { x: 0 },
    hover: {
      x: 4,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const socialGlowVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconScaleVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'hover:shadow-blue-700/30',
      url: 'https://www.linkedin.com/company/dodo'
    },
    {
      icon: Mail,
      name: 'Email',
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'hover:shadow-purple-500/30',
      url: 'mailto:hello@dodo.app'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-400/30',
      url: 'https://twitter.com/dodoapp'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/30',
      url: 'https://www.instagram.com/dodoapp'
    },
    {
      icon: Github,
      name: 'GitHub',
      color: 'from-gray-900 to-gray-800',
      hoverColor: 'hover:shadow-gray-900/30',
      url: 'https://github.com/dodoapp'
    },
  ];

  const platformLinks = [
    { name: 'Home', icon: Home, to: '/' },
    { name: 'Tasks', icon: ListTodo, to: '/tasks' },
    { name: 'Goals', icon: Target, to: '/goals' },
    { name: 'Bank', icon: Wallet, to: '/bank' },
    { name: 'Dashboard', icon: BarChart3, to: '/dashboard' },
    { name: 'Settings', icon: Settings, to: '/settings' }
  ];

  const communityLinks = [
    { name: 'Progress', icon: BarChart3, to: '/progress' },
    { name: 'Community', icon: Users, to: '/community' },
    { name: 'Blog', icon: PenTool, to: '/blog' },
    { name: 'Newsletter', icon: Mail, to: '/newsletter' },
    { name: 'Events', icon: Calendar, to: '/events' },
    { name: 'Templates', icon: FileText, to: '/templates' }
  ];

  const supportLinks = [
    { name: 'Help Center', icon: HelpCircle, to: '/help' },
    { name: 'Contact Us', icon: Phone, to: '/contact' },
    { name: 'Report Bug', icon: Bug, to: '/report-bug' },
    { name: 'Feature Request', icon: Lightbulb, to: '/suggest' },
    { name: 'Privacy Policy', icon: Lock, to: '/privacy' },
    { name: 'Terms of Service', icon: FileText, to: '/terms' },
    { name: 'FAQ', icon: HelpCircle, to: '/faq' }
  ];

  const quickStats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { name: 'Tasks Completed', value: '1M+', icon: CheckCircle },
    { label: 'Goals Achieved', value: '250K+', icon: Target },
    { label: 'Countries', value: '120+', icon: Globe }
  ];

  return (
    <motion.footer
      className="relative bg-white/60 backdrop-blur-2xl border-t border-purple-100/10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-full blur-xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-full blur-xl"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-full blur-xl"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Quick Stats Bar */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-2xl p-6 mb-12 border border-purple-100/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={slideUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-2"
                variants={glowVariants}
                animate="animate"
              >
                <motion.img
                  src={DodoLogo}
                  alt="DODO"
                  className="h-10 w-auto filter drop-shadow-lg"
                  variants={glowVariants}
                  animate="animate"
                />
              </motion.div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Your all-in-one productivity companion. Organize tasks, set goals, track progress, and achieve more with DODO.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-black font-semibold mb-4 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>Connect With Us</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white font-bold ${social.hoverColor}`}
                      variants={socialGlowVariants}
                      initial="initial"
                      whileHover="hover"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      title={social.name}
                    >
                      <motion.div
                        variants={iconScaleVariants}
                        initial="initial"
                        animate={hoveredSocial === index ? "hover" : "initial"}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Platform Section */}
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-black font-bold mb-6 flex items-center space-x-2 text-lg">
              <ListTodo className="w-5 h-5 text-purple-400" />
              <span>Platform</span>
            </h3>
            <div className="space-y-3">
              {platformLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    variants={footerLinkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      to={link.to}
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 text-sm group relative"
                    >
                      <motion.div
                        className="absolute left-[-8px] top-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                        initial={{ width: 0, y: "-50%" }}
                        whileHover={{ width: "4px", transition: { duration: 0.3, ease: "easeOut" } }}
                      />
                      <motion.div variants={iconScaleVariants} initial="initial" whileHover="hover">
                        <IconComponent className="w-4 h-4" />
                      </motion.div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-black font-bold mb-6 flex items-center space-x-2 text-lg">
              <Users className="w-5 h-5 text-violet-400" />
              <span>Community</span>
            </h3>
            <div className="space-y-3">
              {communityLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    variants={footerLinkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      to={link.to}
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 text-sm group relative"
                    >
                      <motion.div
                        className="absolute left-[-8px] top-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                        initial={{ width: 0, y: "-50%" }}
                        whileHover={{ width: "4px", transition: { duration: 0.3, ease: "easeOut" } }}
                      />
                      <motion.div variants={iconScaleVariants} initial="initial" whileHover="hover">
                        <IconComponent className="w-4 h-4" />
                      </motion.div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-black font-bold mb-6 flex items-center space-x-2 text-lg">
              <Settings className="w-5 h-5 text-purple-400" />
              <span>Support</span>
            </h3>
            <div className="space-y-3">
              {supportLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    variants={footerLinkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      to={link.to}
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 text-sm group relative"
                    >
                      <motion.div
                        className="absolute left-[-8px] top-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                        initial={{ width: 0, y: "-50%" }}
                        whileHover={{ width: "4px", transition: { duration: 0.3, ease: "easeOut" } }}
                      />
                      <motion.div variants={iconScaleVariants} initial="initial" whileHover="hover">
                        <IconComponent className="w-4 h-4" />
                      </motion.div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-2xl p-8 mb-12 border border-purple-100/10 backdrop-blur-sm"
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-black flex items-center justify-center gap-2">
              <Bell className="w-6 h-6 text-purple-400" />
              Stay Productive
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly tips, productivity hacks, and updates on new features. Join thousands of DODO users!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 bg-white/40 border border-purple-100/20 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 backdrop-blur-sm"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-4 h-4" />
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-purple-100/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm text-center md:text-left">
              <p>© 2025 DODO. Get things done.</p>
              <div className="mt-1 flex items-center justify-center md:justify-start gap-2">
                <span>All rights reserved. Stay focused!</span>
                <Target className="w-4 h-4 text-purple-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-2">
                <motion.span
                  className="w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>System Status: Online</span>
              </span>
              <span className="hidden md:block">|</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                Ready to achieve
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;