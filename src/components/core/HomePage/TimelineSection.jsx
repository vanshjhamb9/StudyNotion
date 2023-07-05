import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description:"Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description:"The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description:"Code your way to a solution",
    },
];

const TimelineSection = () => {
  return (
    <div>
      <div className='flex lg:flex-row sm:flex-col xs:flex-col sm:space-y-10 xs:space-y-10 gap-8 items-center justify-center'>

        <div className='lg:w-[45%] sm:w-[500px] xs:w-[360px] lg:flex lg:flex-col sm:grid xs:grid sm:grid-cols-2 xs:grid-cols-2  gap-5 '>
            {
                timeline.map( (element, index) => {
                    return (
                        <div className='flex flex-row gap-3 xs:w-[180px]' key={index}>

                            <div className='lg:w-[50px] lg:h-[50px] sm:h-[30px] sm:w-[30px] xs:h-[20px] xs:w-[20px] bg-white rounded-full flex items-center justify-center'>
                                <img src={element.Logo} />
                            </div>

                            <div>
                                <h2 className='font-semibold lg:text-[18px] sm:text-[14px] xs:text-[14px]'>{element.heading}</h2>
                                <p className='text-base sm:text-[12px] xs:text-[12px]'>{element.Description}</p>
                            </div>

                        </div>
                    )
                } )
            }
        </div>
        <div className='relative shadow-blue-200'>

            <img  src={timelineImage}
            alt="timelineImage"
            className='shadow-white object-cover h-fit'
            />

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                    <p className='text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                </div>

                <div className='flex gap-5 items-center px-7'>
                <p className='text-3xl font-bold'>250</p>
                    <p className='text-caribbeangreen-300 text-sm'>TYpe of Courses</p>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default TimelineSection
