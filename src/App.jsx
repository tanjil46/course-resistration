
import './App.css'
import Fetchingfakedata from './componets/getFakeData'
import Showcard from './componets/showcard'

function App() {
 const [credits,setCredits]=([])

   const showcardHandler=()=>{



  console.log("card is coming")




   }















  return (
   <>
    

         <div className="">
          <p className='text-2xl text-center pt-5 font-bold text-black'>Course Registration</p>

         <div className="flex justify-around">
          <Fetchingfakedata showcardHandler={showcardHandler}></Fetchingfakedata>
          <Showcard></Showcard>
         </div>





         </div>











    </>
  )
}

export default App
