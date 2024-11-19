'use client';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import WebIcon from '@/assets/icons/web.svg';
import AccountantIcon from '@/assets/icons/accountant.svg';
import ContentIcon from '@/assets/icons/content.svg';
import CustomerIcon from '@/assets/icons/customer.svg';
import GraphicsIcon from '@/assets/icons/graphics.svg';
import ProjectIcon from '@/assets/icons/project.svg';
import ArrowLeftIcon from '@/assets/icons/arrowLeft.svg';
import ArrowRightIcon from '@/assets/icons/arrowRight.svg';

const SliderContents = [
  {
    name: 'Web Development',
    Icon: WebIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Accounting Services',
    Icon: AccountantIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Content Creation',
    Icon: ContentIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Graphic Design',
    Icon: GraphicsIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Customer Support',
    Icon: CustomerIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Project Management',
    Icon: ProjectIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const ServiceSlider = () => {
  return (
    <div className="relative w-full mt-12">
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
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
      >
        {SliderContents.map((slide, index) => {
          const Icon = slide.Icon;
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center">
                <Icon className="size-48" />
              </div>
              <h2 className="text-xl font-semibold mt-6 uppercase">
                {slide.name}
              </h2>
              <p className="text-base mt-4">{slide.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="mt-12 flex justify-between items-center">
        <button className="custom-prev cursor-pointer">
          <ArrowLeftIcon className="size-17" />
        </button>
        <button className="custom-next cursor-pointer">
          <ArrowRightIcon className="size-17" />
        </button>
      </div>
    </div>
  );
};
