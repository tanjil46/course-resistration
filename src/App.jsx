
import { useState } from 'react'
import './App.css'
import Fetchingfakedata from './componets/getFakeData'
import Showcard from './componets/showcard'

function App() {
 const [credits,setCredits]=useState([])
 const [totalCredit,setTotalcredit]=useState(0)
 const [remainCredit,setRemainingCredit]=useState(20)

   const showcardHandler=(course)=>{

  
   const notTwice=credits.find(cred=>cred.id == course.id)
   let count=course.credit
   if(notTwice){
    return alert("Course Already Selected ")
   }
   
   else{
   
    credits.forEach(cred=>{
       count+=cred.credit
       })





      
    const remainigCredit=20-count;
    if(remainigCredit<0){
      return alert("Credit Hours Insufficient")
    }

    
    setTotalcredit(count);
    setRemainingCredit(remainigCredit);
    
      console.log(totalCredit,remainCredit);








      setCredits([...credits,course])

   
   }








    
   

  




   }















  return (
   <>
    

         <div className="">
          <p className='text-2xl text-center pt-5 font-bold text-black'>Course Registration</p>

         <div className="flex justify-around">
          <Fetchingfakedata showcardHandler={showcardHandler}></Fetchingfakedata>
          <Showcard remainCredit={remainCredit} totalCredit={totalCredit} credits={credits}></Showcard>
         </div>





         </div>











    </>
  )
}

export default App
