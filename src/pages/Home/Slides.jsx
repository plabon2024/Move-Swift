import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

// Review card component
const ReviewCard = ({ review, name, profession, image }) => (
  <div className="bg-white  shadow-xl rounded-2xl p-6 relative w-full h-[400px] flex flex-col justify-between">
    <FaQuoteLeft className="text-4xl text-gray-300 absolute top-4 left-4" />
    <p className="mt-10 text-gray-700 text-base leading-relaxed">{review}</p>
    <hr className="my-4 border-gray-200" />
    <div className="flex items-center gap-4 mt-auto">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{profession}</p>
      </div>
    </div>
  </div>
);


const Slides = () => {
  const reviews = [
    {
      review: "This product exceeded my expectations. The quality is top-notch, and the customer service was excellent!",
      name: "Sarah Johnson",
      profession: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      review: "Amazing experience! Super easy to use and the results were fantastic. Highly recommended.",
      name: "David Lee",
      profession: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      review: "Very helpful support team. I had an issue and it was resolved within hours!",
      name: "Nina Patel",
      profession: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      review: "One of the best platforms I’ve used for my business. Everything just works seamlessly.",
      name: "Carlos Gomez",
      profession: "Business Analyst",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      review: "Excellent value for money and very easy to set up. Will use again.",
      name: "Emily Stone",
      profession: "Content Writer",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      review: "Fantastic! I’m impressed by how smooth and clean the experience is.",
      name: "Mohammed Khan",
      profession: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      review: "Reliable and easy to use. I saved a lot of time thanks to this!",
      name: "Ayesha Rahman",
      profession: "Digital Marketer",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      review: "I love the design and user experience. Everything feels premium.",
      name: "Liam Walker",
      profession: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={40}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper custom-swiper"
    >
      {reviews.map((item, index) => (
        <SwiperSlide key={index } className="my-20">
          <ReviewCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
