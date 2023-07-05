import React, { useState } from 'react'
import CourseSlider from './CourseSlider'


const NewCourses = (Courses) => {

    const [course,setCourse] = useState("");


    const courses = Courses?.Date.filter(d => new Date(d) - new Date() > 0);
  return (
    <div>
      <CourseSlider Courses={courses} /> 
    </div>
  )
}

export default NewCourses
