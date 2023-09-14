
import PropTypes from 'prop-types';
import Credit from './credit';
export default function Showcard({credits,totalCredit,remainCredit}){









return(
    <div className="">

     <p className='text-blue-600 font-bold text-xl text-center'>Credit Hours Reamaing:{remainCredit} Hr</p>
     <p className='text-black font-bold text-xl text-center'>Course Name</p>
    
        {
            credits.map((credit,idx)=><Credit key={idx} credit={credit}></Credit>)
        }

      <p className='text-black font-bold text-xl text-center'>Total Credits Hours:{totalCredit} Hr</p>
    </div>
)

}



Showcard.propTypes={
   credits:PropTypes.array,
   totalCredit:PropTypes.number,
   remainCredit:PropTypes.number
    }