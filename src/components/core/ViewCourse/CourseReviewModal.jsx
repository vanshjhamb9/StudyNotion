import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { createRating } from '../../../services/operations/courseDetailsAPI';
import ReactStars from 'react-stars';

const CourseReviewModal = ({setReviewModal}) => {
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state) => state.auth);
    const {courseEntireData} = useSelector((state)=> state.viewCourse);

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();

    useEffect(()=> {
        setValue("courseExperience", "");
        setValue("courseRating", 0);
    },[])

    const ratingChanged = (newRating) => {
        setValue("courseRating", newRating);
    }

    const onSubmit = async(data) => {
        await createRating(
            {
                courseId:courseEntireData._id,
                rating:data.courseRating,
                review:data.courseExperience,
            },
            token
        );
        setReviewModal(false);
    }

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
    <div className='w-[665px] h-[557px] mx-auto ' >
        <div className='flex flex-col text-white'>
            {/* Modal header */}
            <div className='h-[58px] border-b-2 rounded-[8px] border-richblack-25 p-[24px] bg-richblack-700  flex justify-between  '>
                <p>Add Review</p>
                <button 
                onClick={() => setReviewModal(false)}
                >
                    Close
                </button>
            </div>

            {/* Modal Body */}
            <div className='h-[369px] p-[32px] text-center bg-richblack-800 rounded-[8px] '>

                <div className='flex justify-center gap-[12px]'>
                    <img 
                        src={user?.image}
                        alt='user Image'
                        className='aspect-square  w-[50px] rounded-full object-cover'
                    />
                    <div className='flex flex-col gap-[2px]'>
                        <p className='text-[16px] leading-[24px] text-richblack-5 font-semibold'>{user?.firstName} {user?.lastName}</p>
                        <p className='text-[14px] leading-[22px] text-richblack-50 '>Posting Publicly</p>
                    </div>
                </div>


                <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-6 flex flex-col items-center'>

                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />

                    <div className='w-[601px] h-[167px] text-start '>
                        <label className='text-[14px] leading-[22px] flex align-baseline text-richblack-50' htmlFor='courseExperience'>
                            Add Your Experience <span className='text-pink-500 text-[20px] '>*</span>
                        </label>
                        <textarea 
                            id='courseExperience'
                            placeholder='Add Your Experience here'
                            {...register("courseExperience", {required:true})}
                            className='form-style min-h-[130px] w-full rounded-[8px] p-[12px] bg-richblack-600 '
                        />
                        {
                            errors.courseExperience && (
                                <span>
                                    Please add your experience
                                </span>
                            )
                        }
                    </div>
                    {/* Cancel and Save button */}
                    <div className='flex space-x-4'>
                        <button
                        onClick={() => setReviewModal(false)}
                        >
                            Cancel
                        </button>
                        <IconBtn 
                            text="save"
                        />
                    </div>


                </form>

            </div>
            </div>
        </div>
    </div>
  )
}

export default CourseReviewModal
