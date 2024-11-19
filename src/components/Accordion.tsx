'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Add from '@/assets/icons/add.svg';
import Minus from '@/assets/icons/minus.svg';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b h-10vh overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-medium">{item.question}</span>
            <span className="ml-2 text-gray-500">
              {activeIndex === index ? (
                <Minus className="size-12 md:size-14" />
              ) : (
                <Add className="size-12 md:size-14" />
              )}
            </span>
          </button>

          <motion.div
            initial="collapsed"
            animate={activeIndex === index ? 'expanded' : 'collapsed'}
            exit="collapsed"
            variants={{
              expanded: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white text-gray-700">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
