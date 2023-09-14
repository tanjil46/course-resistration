import PropTypes from 'prop-types';
export default function Credit({credit}){
 const{course_name,image}=credit;



return(
   
    <div className="">
    
     <div className="flex items-center gap-2 bg-slate-600 p-3 rounded-lg my-4">
      <img className='w-[90px]' src={image}></img>
      <p className='text-base text-white '>{course_name}</p>

     </div>





    </div>
)





}



Credit.propTypes={
    credit:PropTypes.object
     }