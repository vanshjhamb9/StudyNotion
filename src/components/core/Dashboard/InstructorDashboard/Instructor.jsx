import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import InstructorChart from './InstructorChart';
import { Link } from 'react-router-dom';
import {MdWavingHand } from 'react-icons/md';

const Instructor = () => {
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=>state.profile);
    const [loading, setLoading] = useState(false);
    const [instructorData, setInstructorData] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(()=> {
        const getCourseDataWithStats = async() => {
            setLoading(true);
            
            const instructorApiData = await getInstructorData(token);
            const result = await fetchInstructorCourses(token);

            console.log(instructorApiData);

            if(instructorApiData.length)
                setInstructorData(instructorApiData);

            if(result) {
                setCourses(result);
            }
            setLoading(false);
        }
        getCourseDataWithStats();
    },[])

    const totalAmount = instructorData?.reduce((acc,curr)=> acc + curr.totalAmountGenerated, 0);
    const totalStudents = instructorData?.reduce((acc,curr)=>acc + curr.totalStudentsEnrolled, 0);

  return (
    <div className='text-white '>
      <div className='flex flex-col space-y-3 w-[500px] h-[105px]'>
        <h1 className='text-[33px] font-semibold leading-[24px] flex gap-2 text-richblack-5' >Hi {user?.firstName} <span className='text-yellow-50 text-[26px] '><MdWavingHand/> </span> </h1>
        <p className='text-[18px] text-richblack-500 leading-[22px]'>Let's start something new</p>
      </div>

      {loading ? (<div className='spinner'></div>)
      :courses.length > 0 
        ? (<div>
            <div className='w-full h-[570px]'>
            <div className='flex space-x-2'>
            <div className='w-[80%] h-[550px] bg-richblack-800  rounded-lg'>
                <InstructorChart  courses={instructorData}/>
                </div>
                <div className='w-[20%] p-[14px] rounded-lg flex flex-col bg-richblack-800 text-richblack-50 space-y-3'>
                    <p className='text-[24px] font-semibold'>Statistics</p>
                    <div className='flex flex-col space-y-2 mt-8  '>
                        <p className='text-richblack-500  leading-8'>Total Courses</p>
                        <p className='text-[35px] leading-[22px]'>{courses.length}</p>
                    </div>

                    <div className='flex flex-col space-y-2 mt-8 '>
                        <p className='text-richblack-500 leading-8'>Total Students</p>
                        <p className='text-[35px] leading-[22px]'>{totalStudents}</p>
                    </div>

                    <div className='flex flex-col space-y-2 mt-8 '>
                        <p className='text-richblack-500 leading-8'>Total Income</p>
                        <p className='text-[35px] leading-[22px]'>{totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col p-[30px] bg-richblack-800 rounded-lg '>
            {/* Render 3 courses */}
            <div className='flex justify-between w-full h-[34px]'>
                <p className='text-richblack-25  font-semibold text-[23px] leading-[22px]  '>Your Courses</p>
                <Link to="/dashboard/my-courses">
                    <p className='text-yellow-50 leading-5 '>View all</p>
                </Link>
            </div>
            <div className='flex space-x-5 p-4'>
                {
                    courses.slice(0,3).map((course)=> (
                        <div className='flex flex-col'>
                            <img 
                            className='rounded-md h-[209px]'
                                src={course.thumbnail}
                            />
                            <div className='flex flex-col text-richblack-5 p-1'>
                                <p className='text-[18px]'>{course.courseName}</p>
                                <div className='flex space-x-3 text-richblack-400  '>
                                    <p>{course.studentsEnrolled.length} students</p>
                                    <p> | </p>
                                    <p> Rs {course.price}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        
        )
        :(<div>
            <p>You have not created any courses yet</p>
            <Link to={"/dashboard/addCourse"}>
                Create a Course
            </Link>
        </div>)}
    </div>
  )
}

export default Instructor
