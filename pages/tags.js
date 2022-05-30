import React from 'react'
import Tags1 from "../components/tagsakthivel"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Print from '../components/print';


function Tags() {




    return (

        <div>
            <div className='mt-[70px] ml-[180px] detail1'>
                <h1 className=' font-bold text-xl'>Your baggage tag has been successfully generated! <CheckCircleIcon className=' text-green-500'/></h1>
                <p className=' font-thin'>Please print a copy of your baggage tag online and carry at the airport</p>
            </div>


            <Tags1 />

            <Print></Print>

        </div>
    )
}

export default Tags