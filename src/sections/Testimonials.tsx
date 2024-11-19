'use client';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import avatar from '@/assets/images/avatar.png';
import Rating from '@/assets/icons/rating.svg';
import { Title } from '@/components/Title';
import ArrowLeftIcon from '@/assets/icons/arrowLeft.svg';
import ArrowRightIcon from '@/assets/icons/arrowRight.svg';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Amy Johnson',
    text: 'Excepteur sint occaecat cupida, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: avatar,
  },
  {
    name: 'Mike Thompson',
    text: 'Excepteur sint occaecat cupida, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: avatar,
  },
  {
    name: 'Mike Thompson',
    text: 'Excepteur sint occaecat cupida, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: avatar,
  },
  {
    name: 'Emily Carter',
    text: 'Excepteur sint occaecat cupida, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: avatar,
  },
  {
    name: 'Michael Brown',
    text: 'Excepteur sint occaecat cupida, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: avatar,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="margins py-24">
      <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
        <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
          <Title
            title="Client Testimonials"
            className="text-primary md:text-4xl md:text-left text-center text-2xl"
          />
        </div>
        <div className="lg:col-span-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-primary flex flex-col gap-3 p-5 rounded-md font-bold">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <h4 className="text-white uppercase text-xs text-left">
                          {testimonial.name}
                        </h4>
                      </div>
                      <Rating />
                    </div>
                    <p className="text-white text-xs text-left">
                      {testimonial.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex items-center lg:justify-end justify-center col-span-1">
          <div className="flex justify-center items-end md:gap-6 gap-20">
            <button className="next cursor-pointer">
              <ArrowLeftIcon className="size-17" />
            </button>
            <button className="prev cursor-pointer">
              <ArrowRightIcon className="size-17" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
