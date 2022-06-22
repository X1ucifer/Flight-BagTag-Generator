import React, { useState, useEffect } from 'react'
import Form1 from "../components/Form1"
import Loading from '../components/loading'

function Form() {

  const [loader, setLoader] = useState(true)
  const [tick, setTick] = useState(true)

  useEffect(() => {

    setInterval(
      () => setLoader(false)
      , 6000);

    // setTimeout(
    //     () => setLoader(false),
    //     6000
    // );



  }, [])

  return (
    <div>
      {loader ?
        <Loading />
        :
        <Form1 />
      }
    </div>
  )
}

export default Form