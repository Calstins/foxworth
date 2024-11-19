export const HeroSection = () => {
  return (
    <div className="relative h-[90vh] w-[100vw] overflow-hidden -z-10 inset-0 xxl:h-[60vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 inset-0"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="margins flex items-center justify-start h-full text-white">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl xl:text-6xl md:text-5xl font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h1>
          <p className="text-lg xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dol
          </p>
        </div>
      </div>
    </div>
  );
};
