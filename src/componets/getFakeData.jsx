import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useState } from "react"
import Course from "./course"

export default function Fetchingfakedata({showcardHandler}){


const[courses,setCourses]=useState([])

useEffect(()=>{

 fetch('data.json')
 .then(res=>res.json())
 .then(data=>setCourses(data));

},[])






return(
    <div className="grid grid-cols-1 lg:grid-cols-3 p-8  mt-4">
      
       {
        courses.map((course,idx)=><Course showcardHandler={showcardHandler} course={course} key={idx}></Course>)
       }

    </div>
)

}


Fetchingfakedata.propTypes={
showcardHandler:PropTypes.func
}