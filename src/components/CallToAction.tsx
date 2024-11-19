'use client';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const CallToAction = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      className={twMerge(
        'text-white bg-accent hover:accent-accent-hover py-3 px-5 md:py-4 md:px-6  rounded-md uppercase font-bold lg:text-base text-xs',
        className
      )}
    >
      {title}
    </motion.button>
  );
};
