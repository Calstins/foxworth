'use client';

import { Title } from '@/components/Title';
import Facebook from '@/assets/icons/facebook.svg';
import Instagram from '@/assets/icons/instagram.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import Twitter from '@/assets/icons/twitter.svg';
import { motion } from 'framer-motion';

const links = [
  {
    header: 'Explore',
    items: [
      'Family Ent.',
      'Animation',
      'Kids’ Shows',
      'Documentaries',
      'New Releases',
    ],
  },
  {
    header: 'Account & SUPPORT',
    items: [
      'My Account',
      'Watchlist',
      'Favourites',
      'Help Centre',
      'Contact Us',
    ],
  },
  {
    header: 'COMPANY INFORMATION',
    items: ['About Us', 'Careers', 'Press', 'Documentaries', 'Blog', 'News'],
  },
];

export const Footer = () => {
  return (
    <div className="bg-accent text-white">
      <div className="margins py-12">
        <div className="flex flex-col gap-12">
          <Title title="LOGO" />
          <div className="grid md:grid-cols-3 grid-cols-1">
            {links.map((link, index) => (
              <div className="col-span-1" key={index}>
                <h3 className="uppercase font-bold text-xl mt-4">
                  {link.header}
                </h3>
                <ul className="flex flex-col gap-3 mt-3">
                  {link.items.map((item, index) => (
                    <li key={item} className="cursor-pointer">
                      {link.items[index]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-4">
            <motion.div whileHover={{ scale: 0.9 }}>
              <Facebook className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <Twitter className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <Instagram className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <LinkedIn className="cursor-pointer" />
            </motion.div>
          </div>
        </div>
        <div className="border-t border-white my-10 py-10  flex flex-col md:flex-row gap-6 justify-between md:items-center items-start uppercase text-xs font-bold">
          <p className="uppercase text-xs">
            © 2024 Foxworth. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Cookie Policy</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
