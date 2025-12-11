import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../assets/images/customer/imgi1.png";
import img2 from "../assets/images/customer/imgi2.png";
import img3 from "../assets/images/customer/imgi3.png";
import img4 from "../assets/images/customer/imgi4.png";

const logos = [
  { src: img1, alt: "ZASMLABS" },
  { src: img2, alt: "bhrigusoft" },
  { src: img3, alt: "Beacon42" },
  { src: img4, alt: "TMS International" },
];

// Duplicate logos for continuous scrolling effect
const extendedLogos = [...logos, ...logos, ...logos];

const HappyCustomers = () => {
  return (
    <section className="happy-customers section section--light">
      <div className="container">
        <div className="happy-customers__header">
          <h2 className="section-title">Happy Customers</h2>
          <span className="happy-customers__underline" aria-hidden="true" />
        </div>

        <div className="happy-customers__slider" aria-label="Happy Customers">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            loop
            speed={600}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {extendedLogos.map((logo, index) => (
              <SwiperSlide key={`${logo.alt}-${index}`}>
                <div className="happy-customers__card">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
