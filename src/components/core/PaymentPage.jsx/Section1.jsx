import React, { useState } from 'react'
import { categories } from '../services/apis'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { apiConnector } from '../services/apiconnector'
import { getCatalogaPageData } from '../services/operations/pageAndComponentData'


export default function Section1(catalogPageData ){
    const [catalogPageData, setCatalogPageData] = useState(null)
    const [categoryId, setCategoryId] = useState("")
    const {catalogName} = useParams();


    //Fetch all categories
    useEffect(()=> {
        const getCategories = async() => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id = 
            res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
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
    <div>
      <div className=' p-16  flex flex-col space-y-2 '>
            <p className='text-richblack-300 font-inter text-lg '>{`Home / Catalog / `}
            <span className='text-yellow-100 '>
                {catalogPageData?.data?.selectedCategory?.name}
            </span></p>
            <p className='text-[30px] leading-[38px] text-richblack-5'> {catalogPageData?.data?.selectedCategory?.name} </p>
            <p className='text-[18px] font-inter leading-[22px] text-richblack-200'> {catalogPageData?.data?.selectedCategory?.description}</p>
            </div>
    </div>
  )
}
