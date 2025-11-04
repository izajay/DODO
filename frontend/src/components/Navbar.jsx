import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  List,
  Target,
  Wallet,
  Info,
  Zap,
  Menu,
  X,
  User,
  UserCircle,
  LogOut
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DodoLogo from '/dodo-logo.png'; // Updated to DODO logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Store user data for avatar
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Tasks', path: '/tasks', icon: List },
    { name: 'Goals', path: '/goals', icon: Target },
    { name: 'Bank', path: '/bank', icon: Wallet },
    { name: 'About', path: '/about', icon: Info },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    open: {
      maxHeight: 400,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const ctaButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(168, 85, 247, 0.25)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setIsProfileDropdownOpen(false);
    navigate('/login');
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl border-b border-purple-100/10"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="group"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link to="/" className="flex items-center gap-2">
                <motion.img
                  src={DodoLogo}
                  alt="DODO"
                  className="h-10 w-auto filter drop-shadow-lg"
                  variants={logoVariants}
                  initial="initial"
                  whileHover="hover"
                />
              </Link>
            </motion.div>
           
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    to={item.path}
                    key={item.name}
                    className="relative text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium group flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-purple-100/50 overflow-hidden"
                  >
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                      initial={{ width: "0%" }}
                      whileHover={{
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
             
              {/* Conditional CTA Button or Profile Dropdown */}
              {isLoggedIn ? (
                <div className="relative">
                  <motion.button
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    variants={ctaButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover border border-purple-400"
                      />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                    <span className="font-medium">{user?.username}</span>
                  </motion.button>
                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-xl rounded-lg shadow-lg border border-purple-100/20"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-purple-100/50 hover:text-purple-600 transition-colors"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <UserCircle className="w-5 h-5" />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-purple-100/50 hover:text-purple-600 transition-colors"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <UserCircle className="w-5 h-5" />
                          Profile
                        </Link>
                        <button
                          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-purple-100/50 hover:text-purple-600 transition-colors w-full text-left"
                          onClick={handleLogout}
                        >
                          <LogOut className="w-5 h-5" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login">
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 flex items-center gap-2"
                    variants={ctaButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Zap className="w-4 h-4" />
                    Login
                  </motion.button>
                </Link>
              )}
            </div>
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-600 hover:text-purple-600 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-100/50"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
          {/* Mobile Navigation Menu */}
          <motion.div
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div className="mt-4 space-y-1.5 backdrop-blur-xl bg-white/80 rounded-2xl p-4 border border-purple-100/50 max-h-[75vh] overflow-y-auto">
              {isLoggedIn && user && (
                <div className="flex items-center gap-3 mb-1.5 px-2 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100">
                  <Link to="/profile" onClick={()=> setIsOpen(false)} className="flex items-center gap-3 flex-1 min-w-0">
                    {user.avatar ? (
                      <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover border border-purple-200" />
                    ) : (
                      <UserCircle className="w-10 h-10 text-purple-500" />
                    )}
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-semibold text-gray-800 truncate">{user.fullName || user.username}</p>
                      <p className="text-[11px] uppercase tracking-wide font-medium text-purple-600">User</p>
                    </div>
                  </Link>
                  <button
                    onClick={()=> { handleLogout(); setIsOpen(false); }}
                    className="shrink-0 p-2 rounded-md text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              )}
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2.5 px-4 rounded-lg hover:bg-purple-100/50 group w-full text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
             
              {/* Mobile Conditional CTA Button or Profile Options */}
              <motion.div
                className="pt-2 mt-1 border-t border-purple-100/50"
                variants={mobileItemVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{ delay: navItems.length * 0.1 }}
              >
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2.5 px-4 rounded-lg hover:bg-purple-100/50 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 py-2.5 px-4 rounded-lg hover:bg-purple-100/50 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle className="w-5 h-5" />
                      <span>Profile</span>
                    </Link>
                    <motion.button
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 w-full"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      variants={ctaButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </motion.button>
                  </>
                ) : (
                  <Link to="/login">
                    <motion.button
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 w-full"
                      onClick={() => setIsOpen(false)}
                      variants={ctaButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Zap className="w-5 h-5" />
                      <span>Login</span>
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Background Blur Overlay for Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
              onClick={() => setIsOpen(false)}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;