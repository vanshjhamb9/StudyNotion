import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import {IoIosArrowDropdownCircle ,IoIosArrowDropupCircle} from 'react-icons/io'

const VideoDetailsSidebar = ({setReviewModal}) => {

    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {sectionId, subSectionId} = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state)=>state.viewCourse);

    useEffect(()=> {
        const setActiveFlags = () => {
            if(!courseSectionData.length)
                return;
            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            )
            const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
                (data) => data._id === subSectionId
            )
            const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;
            //set current section here
            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            //set current sub-section here
            setVideoBarActive(activeSubSectionId);
        }
        setActiveFlags();
    },[courseSectionData, courseEntireData, location.pathname])

    const handleAddReview = () => {
        console.log("I am inside Add handleAddReview")
        setReviewModal(true);
    }

  return (
    <>
        <div className='flex flex-col space-y-20 border-r-2 border-richblack-400 h-[1337px] w-[320px] '>
            {/* for buttons and headings */}
                {/* for buttons */}
                <div className='h-[112px] pb-[24px] pr-[24px] text-richblack-100 flex flex-col space-y-3 w-[320px] p-5'>
                    <div className='cursor-pointer text-richblack-200 '
                    onClick={()=> {
                        navigate("/dashboard/enrolled-courses")
                    }}
                    >
                        Back
                    </div>
                      {/* for heading or title */}
                <div className='flex pr-5 gap-2'>
                    <p className='font-semibold text-[14px] leading-[22px] w-[200px] text-richblack-25 '>{courseEntireData?.courseName}</p>
                    <p className='font-bold text-[18px] leading-[26px] text-caribbeangreen-100 '>{completedLectures?.length} / {totalNoOfLectures}</p>
                </div>
                <div>
                        <IconBtn 
                            text="Add Review"
                            onclick={() => handleAddReview()}
                        />
                    </div>

                </div>
              
          

            {/* for sections and subSections */}
            <div className='flex flex-col mt-20 h-[244px] '>
                {
                    courseSectionData.map((course, index)=> (
                        <div
                        onClick={() => setActiveStatus(course?._id)}
                        key={index}
                        >

                            {/* section */}

                            <div className='h-[54p text-[14px] p-[18px] text flex gap-[12px] bg-richblack-700 text-richblack-5  border-b-richblack-600 space-x-20  justify-between items-center'>
                                <div className='leading-[22px]'>
                                    {course?.sectionName}
                                </div>
                                {/* HW- add icon here and handle rotate 180 logic */}
                              <div className=' w-[20px] h-[20px] text-[18px] transition-all duration-250'>
                                {
                                    activeStatus === course?._id ? (
                                        <IoIosArrowDropdownCircle className='transition-all duration-250 animate-pulse '/>
                                    ) : ( 
                                        <IoIosArrowDropupCircle className='transition-all duration-250 '/>
                                    )
                                }
                              </div>  
                            </div>

                            {/* subSections */}
                            <div>
                                {
                                    activeStatus === course?._id && (
                                        <div className='flex flex-col p-5'>
                                            {
                                                course.subSection.map((topic, index) => (
                                                    <div
                                                    className={`flex gap-5 cursor-pointer p-4 ${
                                                        videoBarActive === topic._id
                                                        ? "bg-yellow-200 text-richblack-900 flex gap-[8px] leading-[22px] text-14px rounded-md"
                                                        : "flex gap-[8px] leading-[22px] text-richblack-400 text-14px"
                                                    }`}
                                                    key={index}
                                                    onClick={() => {
                                                        navigate(
                                                            `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                                                        )
                                                        setVideoBarActive(topic?._id);
                                                    }}
                                                    >
                                                        <input
                                                        type='checkbox'
                                                        checked= {completedLectures.includes(topic?._id)}
                                                        onChange={() => {}}
                                                        className='bg-richblack-100 text-richblack-300 '
                                                        />
                                                        <span>
                                                            {topic.title}
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        
        </div>
    </>
  )
}

export default VideoDetailsSidebar
