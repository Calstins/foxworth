import Paragraph from '@/components/Paragraph';
import { Title } from '@/components/Title';
import { CallToAction } from '../components/CallToAction';
import SpeakerPhoto from '@/assets/icons/speaker.svg';

export const ProcessSection = () => {
  return (
    <div className="bg-primary py-12">
      <div className="margins flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="md:flex-1">
          <Title
            title="Our tailored process focused on unlocking your brand’s potential"
            className="text-accent text-xl"
          />
          <Paragraph
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            className="text-p text-white mt-5"
          />
          <CallToAction title="Get started" className="mt-6" />
        </div>
        <div className="md:flex-1 flex items-center justify-end">
          <SpeakerPhoto className="float" />
        </div>
      </div>
    </div>
  );
};
