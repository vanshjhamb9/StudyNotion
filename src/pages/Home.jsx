import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col lg:w-11/12 xs:w-[390px] sm:w-[530px] max-w-maxContent items-center z-40
      text-white justify-between'>

        <Link to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 lg:w-[90%] sm:w-[558px] xs:w-[368px] text-center lg:text-lg sm:text-md font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-3 relative lg:w-[1085px] lg:h-[515px] sm:w-[488px] xs-[370px] my-12 shadow-[30px_100px_7px_20px_rgb(0,0,0,0.1)] lg:shadow-white'>
        <div className='lg:w-full lg:h-[530px] sm:w-[477px] sm:h-[220px]  xs:w-[365px] xs:h-[165px] absolute -z-10 right-14 xs:top-5 rounded-full bg-gradient-to-l from-[#1432c8] to-[#0524bb] blur-3xl' />
        
           <video
            muted
            loop
            autoPlay
            className=''
            >

            <source  src={Banner} type="video/mp4" />
            </video>
           
        </div>

        {/* Code Section 1 */}
        <div className='mt-[130px] w-full self-end  '>
        <div className='bg-gradient-to-br opacity-40 from-brown-200 to-pink-400 lg:w-[300px] lg:h-[300px] sm:w-[180px] sm:h-[180px] xs:w-[180px] xs:h-[180px] absolute blur-2xl rounded-full lg:right-[170px] lg:top-[1080px] md:top-[870px] sm:right-[150px] sm:top-[1500px] xs:right-[180px] xs:top-[1530px] mt-10'></div>
            <CodeBlocks 
                position={"lg:flex-row md:flex-row sm:flex-col xs:flex-col xs:items-end "}
                heading={
                    <div className='text-4xl font-semibold w-full'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE>\n<html>\n<head>\n<title>Study Notion</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1 class="text-big" id="web">Web Technology</h1>\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
            />
        </div>

                {/* Code Section 2 */}
        <div>
        <div className='bg-gradient-to-tl opacity-40 from-caribbeangreen-50  to-caribbeangreen-900  lg:w-[300px] lg:h-[300px] sm:w-[180px] sm:h-[180px] xs:w-[180px] xs:h-[180px] absolute blur-2xl sm:text-end rounded-full lg:left-[20px] lg:top-[1510px] md:top-[1480px] md:left-[20px] sm:right-[220px] sm:top-[2400px] xs:left-[30px] xs:top-[2590px] mt-10'/>
            <CodeBlocks 
                position={"lg:flex-row-reverse  md:flex-row-reverse sm:flex-col xs:flex-col  xs:items-end w-full" }
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE>\n<html>\n<head>\n<title>Study Notion</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1 class="text-big" id="web">Pythony</h1>\n<h1 class="text-big" id="ai/ml">AI/ML</h1>\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
            />
        </div>

            <ExploreMore />
      </div>

      {/*Section 2  */}
      <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg lg:h-[310px] sm:h-[220px] xs:h-[200px]'>

                <div className='w-11/12 lg:h-[280px] sm:h-[130px] xs:h-[140px] max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row gap-7 text-white'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='mx-auto lg:w-11/12 sm:w-[680px] xs:w-[380px] max-w-maxContent flex flex-col justify-between gap-7'>

                <div className='flex lg:items-baseline lg:flex-row sm:flex-col xs:flex-col xs:text-center xs:items-center gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold lg:w-[45%] sm:w-[550] xs:w-[350px]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 lg:w-[40%] sm:w-[280px] xs:w-[280px] items-start sm:items-center xs:items-center '>
                    <div className='lg:text-[16px] sm:text-[14px] xs:text-[14px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className=' '>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                <LearningLanguageSection />

            </div>

            

      </div>


      {/*Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

            <InstructorSection />

            <h2 className='text-center text-4xl font-semobold mt-10'>review from Other Learners</h2>
            {/* Review Slider here */}
            <div className='w-full'>
                <ReviewSlider/>
            </div>
            
      </div>


      {/*Footer */}
      <Footer />

    </div>
  )
}

export default Home
