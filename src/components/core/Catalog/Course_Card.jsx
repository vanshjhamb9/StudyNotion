import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';
import {TbCurrencyRupee} from 'react-icons/tb'
const Course_Card = ({course, Height , Width}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (
    <div className='w-full object-cover flex flex-col '>
        <Link to={`/courses/${course._id}`}>
            <div>
                <div>
                    <img 
                        src={course?.thumbnail}
                        alt='course ka thumbnail'
                        className={`${Height} ${Width} rounded-[8px] object-cover  `}
                    />
                </div>
                <div className='w-[384px] h-[150px] flex flex-col space-y-[9px] mt-6'>
                    <p className='font-inter text-[16px] leading-[24px] text-pure-greys-25   '>{course?.courseName}</p>
                    <p className='text-[16px] leading-[24px] text-richblack-300 '>{course?.instructor?.firstName} {course?.instructor?.lastName} </p>
                    <div className='flex gap-x-[8px]'>
                        <span>{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount} />
                        <span>{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p className='flex text-[20px] gap-1 leading-[28px] text-richblack-5 font-semibold'><TbCurrencyRupee/> {course?.price}</p>
                </div>
            </div>
        </Link>

      
    </div>
  )
}

export default Course_Card
