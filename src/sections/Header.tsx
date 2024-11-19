'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CallToAction } from '../components/CallToAction';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Our Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
};

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //console.log('Current pathname:', pathname);

  return (
    <div className="bg-white">
      <header className="margins h-[10vh]">
        <nav className="flex items-center justify-between  my-3 w-full h-full">
          <a href="#" className="text-3xl font-extrabold uppercase md:w-[20%]">
            LOGO
          </a>

          {/* Menu for Desktop */}
          <div className="flex items-between justify-end flex-grow gap-6 md:w-[80%] p-0">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    'text-accent border-b-2 border-accent'
                  } capitalize font-semibold hidden lg:flex items-center text-center hover-text-accent transition-all duration-300`}
                >
                  <motion.div whileHover={{ scale: 0.9 }}>
                    {link.name}
                  </motion.div>
                </Link>
              );
            })}

            <CallToAction title="Get started" className="hidden lg:block" />
          </div>

          {/* Hamburger Icon */}
          <button
            className="flex flex-col items-center justify-center lg:hidden space-y-1"
            onClick={toggleMenu}
          >
            <div
              className={`w-8 h-0.5 bg-black transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-black transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-black transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></div>
          </button>

          {/* Mobile Menu */}
          <motion.ul
            initial="hidden"
            animate={isMenuOpen ? 'visible' : 'hidden'}
            exit="hidden"
            variants={mobileMenuVariants}
            className="absolute top-16 right-0 w-2/3 bg-white text-center space-y-6 py-6 lg:hidden h-full z-40"
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={`${
                  link.path === pathname && 'text-accent border-accent'
                } uppercase font-bold lg:text-base text-xs text-center hover-text-accent transition-all duration-300`}
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
