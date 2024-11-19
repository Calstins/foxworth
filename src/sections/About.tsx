import Paragraph from '@/components/Paragraph';
import { Title } from '@/components/Title';

export const AboutSection = () => {
  return (
    <div className="margins flex flex-col gap-10 md:flex-row py-24">
      <div className="md:w-1/2 order-2 md:order-1 hidden md:block">
        <Paragraph
          className="text-4xl text-primary text-p leading-5"
          value=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et doloreprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-8 order-1 md:order-2">
        <Title
          title="About"
          className="text-primary text-center md:text-left"
        />
        <p className="text-base xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Paragraph
          className="text-2xl text-primary text-p md:hidden block mt-4"
          value=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et doloreprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        />
        <div className="flex flex-col gap-4">
          <video
            className="w-full h-[441px] object-cover -z-10 rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src="/videos/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <video
                className="h-[461px] object-cover md:w-[46%] md:flex-1 rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="/videos/vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                className="h-[461px] object-cover md:w-[46%] md:flex-1 rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
