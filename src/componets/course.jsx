import { FaDollarSign,FaBookmark } from "react-icons/fa"
import PropTypes from 'prop-types';
export default function Course({course,showcardHandler}){

    const{image,course_name,details,credit,price}=course
   





 return(
  
     
     <div className=" lg:w-[350px] text-center my-5 space-y-4">
     <img className='mx-auto' src={image} alt='image of course'></img>
     <p className='font-bold text-xl'>{course_name}</p>
     <h1>{details}</h1>

     <div className="flex justify-center gap-3">
      <p className="text-xl"> <button><FaDollarSign></FaDollarSign></button>Price: {price}</p> 
        <h2 className="text-xl"><button><FaBookmark></FaBookmark></button> Credit:  {credit}Hr</h2>
     </div>
      <div className="pt-3">
        <button onClick={()=>showcardHandler(course)} className='bg-blue-600 py-3 px-5 w-[220px] rounded-lg hover:bg-blue-500 text-white font-bold'>Select</button>
      </div>



     </div>




  
 )




}

Course.propTypes={
course:PropTypes.object.isRequired,
showcardHandler:PropTypes.func

}




