import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex lg:flex-row-reverse sm:flex-col xs:flex-col gap-20 items-center xs:justify-center'>

        <div className=' lg:w-[50%] sm:w-[450px] xs-w-[360px] flex flex-col gap-10'>
            <div className='text-4xl font-semobold w-[50%]'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>
        <div className='lg:w-[50%] sm:w-[430px] xs-w-[360px]'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white xs:h-[500px] xs:object-cover'
            />
        </div>


      </div>
    </div>
  )
}

export default InstructorSection
