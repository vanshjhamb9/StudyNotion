import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import Course_Card from '../components/core/Catalog/Course_Card';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import { useDispatch, useSelector } from 'react-redux';
import NewCourses from '../components/core/Catalog/NewCourses';

const Catalog = () => {
    const { step } = useSelector((state) => state.course)
    const dispatch = useDispatch();

  const steps = [
    {
      id: 1,
      title: "Most Popular",
    },
    {
      id: 2,
      title: "New",
    },
    {
      id: 3,
      title: "Trending",
    },
  ]
  const CourseStateHandler = (step) => {
    
  }

    const {catalogName} = useParams();
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    console.log("Catalog name -" +catalogName)

    //Fetch all categories
    useEffect(()=> {
        const getCategories = async() => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id = 
            res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
            console.log( "Category Id" + categoryId)
        }
        getCategories();
    },[catalogName]);

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogaPageData(categoryId);
                console.log("PRinting res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);


  return (
    <div className='text-white'>
    { console.log(catalogPageData?.data?.selectedCategory)}
        <div className='w-[1440px ] bg-richblack-800 flex justify-around space-x-[18rem]  items-baseline p-2' >
        <div className=' p-16  flex flex-col space-y-2 '>
            <p className='text-richblack-300 font-inter text-lg '>{`Home / Catalog / `}
            <span className='text-yellow-100 '>
                {catalogPageData?.data?.selectedCategory?.name}
            </span></p>
            <p className='text-[30px] leading-[38px] text-richblack-5'> {catalogPageData?.data?.selectedCategory?.name} </p>
            <p className='text-[18px] font-inter leading-[22px] text-richblack-200'> {catalogPageData?.data?.selectedCategory?.description}</p>
            </div>

            <div className='w-[282px] h-[180px] flex flex-col space-y-[12px]'>
                <p className='font-inter font-semibold text-[22px] leading-[26px] text-richblack-5 '>Related resources</p>
                <ul className='list-disc ml-5 space-y-1  '>
                    <li className='font-inter text-[18px] leading-[22px] text-richblack-100 '>Doc {catalogPageData?.data?.selectedCategory?.name}</li>
                    <li className='font-inter text-[18px] leading-[22px] text-richblack-100 '>Cheatsheets</li>
                    <li className='font-inter text-[18px] leading-[22px] text-richblack-100 '>Artices</li>
                    <li className='font-inter text-[18px] leading-[22px] text-richblack-100 '>Community Forums</li>
                    <li className='font-inter text-[18px] leading-[22px] text-richblack-100 '>Projects</li>
              
                </ul>
            </div>
        </div>

        <div >
            {/* section1 */}
            <div className='w-[1276px] h-[497px] ml-[120px] mt-16   flex flex-col space-y-4 '>
            <div className="relative mb-2 flex space-x-2 border-b-2 border-richblack-600 ">
        {steps.map((item) => (
          <>
            <div
              className="flex"
              key={item.id}
            >
              <button
                className={` ${
                  step === item.id
                    ? "border-b-2 border-yellow-50  p-4 text-yellow-50"
                    : " text-richblack-600 p-4"
                } `
                }
                onClick={CourseStateHandler(step.id)}
              >
                  {item.title}
              </button>
              
            </div>
          </>
        ))}
      </div>
                <div className='w-[1200px] h-[371px] space-x-[24px]'>
                 {step == 1 &&  <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} /> }
                 {step == 2 && <NewCourses Courses={catalogPageData?.data?.selectedCategory?.courses} />}
                 {/* {step == 3 && <TrendingCourses />} */} 
                </div>
            </div>  

            {/* section2 */}
            <div className='w-[1276px] h-[497px] ml-[120px] mt-6   flex flex-col space-y-6 '>
            <div className='font-inter text-[30px] leading-[38px] font-semibold text-richblack-5 '>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</div>
                <div className='w-[1200px] h-[371px] space-x-[24px]'>
                    <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses}/>
                </div>
            </div>

            {/* section3 */}
            <div className='ml-[120px] mt-16 flex flex-col space-y-[40px]  '>
                <div className='font-inter text-[30px] leading-[38px] font-semibold text-richblack-5 '>Frequently Bought Together</div>
                <div className='py-8 h-[1200px] items-start'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-14  '>

                        {
                            catalogPageData?.data?.mostSellingCourses?.slice(0,4)
                            .map((course, index) => (
                                <Course_Card course={course} key={index} Height={"h-[300px]"} Width={"w-[568px]"}/>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    <Footer />
    </div>
  )
}

export default Catalog
