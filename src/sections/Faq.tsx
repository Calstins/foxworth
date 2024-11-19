// pages/faq.tsx
import Accordion from '@/components/Accordion';
import Faq from '@/assets/images/faq.svg';

export const FaqSection = () => {
  const faqItems = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co',
    },
  ];

  return (
    <div className="flex justify-between items-center margins py-12">
      <Faq className="hidden md:block float" />
      <div className="md:w-[60%] w-full">
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};
