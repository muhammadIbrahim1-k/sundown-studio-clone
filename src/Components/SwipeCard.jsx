import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';

export default function SwipeCard() {

  return (
    <>
      

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='pb-4' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" alt="NIke Logo" />
          <p>Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img className='pb-4' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg" alt="converse Logo" />
          <p>Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[157px] w-[157px]' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-500.png" alt="north Logo" />
          <p>Creative Concepting, 2D & 3D Design, Design Management for work in NYC and across the country.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img className='pb-4' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg" alt="NIke Logo" />
          <p>Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg" alt="NIke Logo" />
          <p>Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg" alt="NIke Logo" />
          <p>Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg" alt="NIke Logo" />
          <p>Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.</p>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
