import * as React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
    },
}

const ServicesSwiper = () => {
    return(
        <>
            <Swiper navigation pagination={pagination} modules={[Navigation, Pagination]} className="services-swiper">
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span></span>Data driven recruitment</p>
                        <p><span></span>Monthly contracted hiring resources</p>
                        <p><span></span>Pipeline building and account management services</p>
                        <p><span></span>Successful LinkedIn campaigns</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span></span>2019: 38 staff hired across 4 locations in 12 months - USA, Spain, Japan and UK</p>
                        <p><span></span>Company entities created in the UK and an office in Madrid created in that time</p>
                        <p><span></span>Company is now formerly known as IBM after acquisition</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span></span>2022: 20 requirements to build a EMEA Engineering team in Spain and sales organisation in the USA</p>
                        <p><span></span>On track to deliver 15 headcount in the engineering team by late 2022</p>
                        <p><span></span>Building a product development team in the USA</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ServicesSwiper