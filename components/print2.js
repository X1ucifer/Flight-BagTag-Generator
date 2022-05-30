import React from 'react'
var Barcode = require('react-barcode');


function Print2() {
    return (
        <div className='mb-[40px]  column1 hidden'>
            <div className='w-[210px] relative h-[1240px] border-[2px] border-black ml-[auto] mr-[auto]'>
                <div className=' absolute left-[1%]'>

                    <div className=''>

                        <Barcode value="0312619337" />

                    </div>
                    <div>
                        <Barcode value="0312619337" />

                    </div>
                    <hr />
                    <br></br>
                    <br></br>

                    <hr />
                    <br></br>
                    <br></br>
                    <hr />

                    <div className='flex justify-evenly'>
                        <div className=''>
                            <h1 className=' font-bold text-lg'>MAA</h1>
                        </div>
                        <div>
                            <h1>6E098</h1>
                            <h1>12 June 22</h1>
                        </div>

                    </div>

                    <hr />

                    <hr />

                    <div className='flex justify-between'>
                        <div>
                            <h1>Madhu Lekha.ss</h1>
                            <h1>PNR : QDRC9N</h1>
                            <h1>12 June 22</h1>
                            <h1>6E0312619936</h1>
                        </div>
                        <span className=' bg-black text-white border-2 border-zinc-900  pt-[15px]' style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed"
                        }}>
                            SEQ:001
                        </span>

                    </div>

                    <hr />

                    <hr />

                    <div className='flex justify-between'>

                        <span className=' bg-black text-white border-2 border-zinc-900  pt-[15px]' style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed"
                        }}>
                            SEQ:001
                        </span>
                        <div>
                            <h1>Madhu Lekha.ss</h1>
                            <h1>PNR : QDRC9N</h1>
                            <h1>12 June 22</h1>
                            <h1>6E0312619936</h1>
                        </div>


                    </div>

                    <hr />

                    <hr />


                    <div className='flex justify-evenly'>
                        <div className=''>
                            <h1 className=' font-bold text-lg'>MAA</h1>
                        </div>
                        <div>
                            <h1>6E098</h1>
                            <h1>12 June 22</h1>
                        </div>

                    </div>

                    <hr />

                    <hr />
                    <br></br>
                    <br></br>
                    <hr />
                    <hr />

                    <div className=''>

                        <Barcode value="0312619337" />

                    </div>
                    <div>
                        <Barcode value="0312619337" />

                    </div>
                    <hr />
                    <hr />

                    <div className=''>

                        <Barcode width="1px" height="50px" value="6E5098 SEQ001" />

                    </div>
                    <div>
                        <Barcode width="1px" height="50px" value="6E5098 SEQ001" />

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Print2