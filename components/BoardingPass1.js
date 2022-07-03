import React from 'react'
import QRCode from 'qrcode.react';


function BoardingPass() {
    return (
        <>
            <div  >
                <div className=' mt-[40px] w-[60%] main1 h-[60vh] ml-[auto] mr-[auto]'>

                    <table className='w-[100%]' >
                        <tr>
                            <th className='border-2 border-gray-900 text-left w-[70%] h-[50px] '><p className='ml-[20px] '>Boarding Pass</p></th>
                            <th className='border-2 border-gray-900 text-left '><p className='ml-[20px] '>Your Deaparture Terminal</p></th>

                        </tr>
                        <tr>
                            <td className='border-2 border-gray-900 text-left '>
                                <>

                                    <div className=''>
                                        <div className='flex justify-between'>
                                            <div className='mt-[30px] ml-[40px]'>
                                                <h4>SAKTHIVEL M</h4>
                                            </div>

                                            <div className='mt-[30px] mr-[40px]'>
                                                <h4>DELHI(T1) To CHENNAI(T1)</h4>
                                            </div>
                                        </div>

                                        <div className='mt-[20px]  flex justify-evenly'>
                                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                                <p>Flight</p>
                                                <h2 className='font-bold'>6E 5098</h2>
                                            </div>

                                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                                <p>Gate</p>
                                                <h2 className='font-bold'>A 21</h2>
                                            </div>

                                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                                <p>Boarding Time</p>
                                                <h2 className='font-bold'>1400 Hrs</h2>
                                            </div>

                                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                                <p>Boarding</p>
                                                <h2 className='font-bold'>Zone 1</h2>
                                            </div>

                                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                                <p>Seat</p>
                                                <h2 className='font-bold'>15A</h2>
                                            </div>
                                        </div>

                                        <div className='flex justify-between'>
                                            <div className='mt-[50px] ml-[30px] mb-[40px]'>
                                                <QRCode value="https://flight-bag-tag-generator.vercel.app/form1" size="140" renderAs="canvas" />
                                            </div>

                                            <div className='mt-[60px]'>
                                                <div className='flex justify-between'>
                                                    <p>Date - </p>
                                                    <p className='font-bold'>2 July 2022</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <p>Seq - </p>
                                                    <p className='font-bold'>0001</p>
                                                </div>

                                            </div>

                                            <div className='mt-[60px] mr-[80px]'>


                                                <div className='flex justify-between'>
                                                    <p>Departure - </p>
                                                    <p className='font-bold'>1445 Hrs</p>
                                                </div>

                                                <div className='flex justify-between'>
                                                    <p>Services - </p>
                                                    <p className='font-bold'>DFNS,VGML</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </>
                            </td>
                            <td className='border-2 border-gray-900 text-left'>
                                <div className=''>
                                    <div className=''>
                                        <div className='mt-[10px] ml-[10px]'>
                                            <h4>SAKTHIVEL M</h4>
                                        </div>

                                        <div className='mt-[10px] ml-[10px]'>
                                            <h4>DELHI(T1) To CHENNAI(T1)</h4>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex justify-between m-[20px]'>
                                            <p>PNR</p>
                                            <p className='font-bold'>QJRD8N</p>
                                        </div>

                                        <div className='flex justify-between m-[20px]'>
                                            <p>Flight</p>
                                            <p className='font-bold'>6E 5098</p>
                                        </div>

                                        <div className='flex justify-between m-[20px]'>
                                            <p>Date</p>
                                            <p className='font-bold'>2 July 2022</p>
                                        </div>

                                        <div className='flex justify-between m-[20px]'>
                                            <p>Services</p>
                                            <p className='font-bold'>DFNL,VGML</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-between'>
                                        <div className='mt-[10px] ml-[20px] mb-[40px]'>
                                            <QRCode value="https://flight-bag-tag-generator.vercel.app/form1" size="100" renderAs="canvas" />
                                        </div>

                                        <div className='mt-[20px] mr-[50px]'>
                                            <div className='flex justify-between'>
                                                <p>Seat - </p>
                                                <p className='font-bold'>15A</p>
                                            </div>
                                            <div className='flex justify-around'>
                                                <p>Seq - </p>
                                                <p className='font-bold'>0001</p>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                            </td>

                        </tr>

                    </table>

                </div>


            </div>

            {/* <button onClick={() => window.print()}>Print this out!</button> */}
        </>
    )
}

export default BoardingPass