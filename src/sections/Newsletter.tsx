import { CallToAction } from '../components/CallToAction';

export const NewsletterSection = () => {
  return (
    <div className=" bg-primary">
      <div className="margins py-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
          <div className="text-white">
            <h3 className="text-2xl font-bold uppercase">
              Join our Newsletter
            </h3>
            <p className="text-base mt-3">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex gap-1 md:justify-end">
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your email"
              className="rounded-md md:w-[300px] p-4"
            />
            <CallToAction
              className="bg-secondary text-white"
              title="Get started"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
