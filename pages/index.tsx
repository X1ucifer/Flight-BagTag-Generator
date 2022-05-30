import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DenseAppBar from "../components/Header"
import Form1 from "../components/Form1"
import BoardingPass from "../components/BoardingPass1"

const Home: NextPage = () => {
  return (
    <>
    
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

       
        <BoardingPass />
      </div>
    </>
  )
}

export default Home
