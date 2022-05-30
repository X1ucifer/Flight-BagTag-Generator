import React from 'react'
import { useBarcode } from 'react-barcodes';
var Barcode = require('react-barcode');
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';

function Tags1() {

    const { inputRef } = useBarcode({
        value: '0312619337',
        options: {
            background: '#ffff',
        }
    });


    return (
        <>


            <div className='mt-[100px]  mb-[60px] detail1'>

                <div className='flex justify-around detail1'>


                    <div className='ml-[30px] mb-[40px] '>
                        <h1 className=' font-bold text-xl'>Delhi(T1) → Chennai(T2)</h1>
                        <p className=' font-thin text-xs'>12 June 2022,11:00 - 6E 5098
                            - PNR - QJRD8N</p>

                        <Link href="/">
                            <p className=' font-medium text-sky-700 cursor-pointer'>View Boarding Pass</p>
                        </Link>
                    </div>

                    <div className='mr-[30px] print'>
                        <Button variant="contained"
                            color="primary" startIcon={<PrintIcon />} onClick={() => window.print()}>Print</Button>
                    </div>
                </div>


                <div className='relative w-[800px] h-[470px] border-[3px] border-black ml-[auto] mr-[auto] '>
                    <div className='absolute border-[1px] border-black h-[400px] left-[50%] top-[35px]'>

                    </div>
                    <div className='flex justify-between detail1'>
                        <div className='ml-[50px] mt-[50px] flex justify-around w-[40%] '>
                            <div className='flex'>
                                <h1 className=' font-semibold text-lg text-sky-800 mr-[5px]'>AirTags</h1>
                                <FlightTakeoffIcon className='text-sky-800' />
                            </div>

                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                <h2 className='font-bold'>6E098</h2>
                            </div>
                        </div>
                        <div className='mr-[50px] mt-[50px] flex justify-around w-[40%]'>
                            <div className='flex'>
                                <h1 className=' font-semibold text-lg text-sky-800 mr-[5px]'>AirTags</h1>
                                <FlightTakeoffIcon className='text-sky-800' />
                            </div>

                            <div className='border-2 border-zinc-900  pl-[10px] pr-[10px]'>
                                <h2 className='font-bold'>6E098</h2>
                            </div>
                        </div>
                    </div>

                    {/* table */}
                    <div className='flex'>

                        <div>
                            <table className='w-[10px] ml-[80px] mt-[20px]' >
                                <tr className='bg-black'>
                                    <th className='border-[1px] border-gray-900 text-left w-[70%] h-[50px] text-teal-50 '>
                                        <div className='w-[60px]'>
                                            <p className=' font-thin text-xs'>12 JUNE 22</p>
                                            <p className=' font-bold text-lg'>MAL</p>
                                            <p className=' font-thin text-xs'>QJ RD8N</p>
                                            <p className=' font-thin text-xs'>SEQ-001</p>
                                        </div>
                                    </th>


                                </tr>
                                <tr>
                                    <td className='border-[1px] border-gray-900 text-left '>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td className='border-[1px] border-gray-900 text-left '>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />


                                        </div>
                                    </td>

                                </tr>
                            </table>
                        </div>

                        <div>

                            <table className='w-[495px]  mt-[20px]' >
                                <tr>
                                    <th className='border-[0px] border-gray-900 text-left w-[70%] h-[165px] '>

                                        <div className='flex justify-around'>
                                            <div>
                                                <svg ref={inputRef} />
                                            </div>
                                            <div>
                                                <Barcode value="0312619337" />

                                            </div>
                                        </div>

                                    </th>


                                </tr>
                                <tr>
                                    <td className='border-[0px] border-gray-900 text-left h-[133px]'>
                                        <div className='flex justify-around'>
                                            <div>
                                                <Barcode value="0312619337" />
                                                <p className=' text-right '>Sakthivel</p>
                                            </div>
                                            <div>
                                                <Barcode value="0312619337" />
                                                <p className=' text-left '>Sakthivel</p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>

                            </table>

                        </div>

                        <div>
                            <table className='w-[10px]  mt-[20px]' >
                                <tr className='bg-black'>
                                    <th className='border-[1px] border-gray-900 text-left w-[70%] h-[50px] text-teal-50 '>
                                        <div className='w-[60px]'>
                                            <p className=' font-thin text-xs'>12 JUNE 22</p>
                                            <p className=' font-bold text-lg'>MAL</p>
                                            <p className=' font-thin text-xs'>QJ RD8N</p>
                                            <p className=' font-thin text-xs'>SEQ-001</p>
                                        </div>
                                    </th>


                                </tr>
                                <tr>
                                    <td className='border-[1px] border-gray-900 text-left '>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td className='border-[1px] border-gray-900 text-left '>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />


                                        </div>
                                    </td>

                                </tr>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Tags1