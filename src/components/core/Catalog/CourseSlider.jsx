import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
        {
            Courses?.length ? (
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={10}
                    pagination={true}
                    modules={[Autoplay,Pagination,Navigation]}
                    className="mySwiper h-[350px]"
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        1024:{slidesPerView:3,}
                    }}
                >
                    {
                        Courses?.map((course, index)=> (
                            <SwiperSlide key={index}>
                                <Course_Card course={course} Height={"h-[200px]"} Width={"w-[384px]"} />
                            </SwiperSlide>
                        ))
                    }   
                </Swiper>
            ) : (
                <p>No Course Found</p>
            )

        }
    </>
  )
}

export default CourseSlider
