import { AboutSection } from '@/sections/About';
import { FaqSection } from '@/sections/Faq';
import { HeroSection } from '@/sections/Hero';
import { NewsletterSection } from '@/sections/Newsletter';
import { ProcessSection } from '@/sections/Process';
import { ServiceSection } from '@/sections/Service';
import { TestimonialsSection } from '@/sections/Testimonials';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
    </div>
  );
}
