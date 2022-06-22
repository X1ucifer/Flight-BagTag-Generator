import React from 'react'

function Loading() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#060606e8", position: "absolute", top: "0" }}>

        <div class="ocrloader">
          {/* <svg xmlns="http://www.w3.org/2000/svg" class=" text-white h-[33vh] w-[100%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg> */}
          
          <p>Scanning</p>
          <em></em>
          <span></span>
        </div>

      </div>

      {/* <style jsx>{`

body {
  height: 100vh;
  position: relative;
}

.ocrloader p::before {
  content: '';
  display:inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #18c89b;
  position: relative;
  right: 4px;
}
.ocrloader p {
  color: #18c89b;
  position: absolute;
  bottom: -30px;
  left: 38%;
  font-size: 16px;
  font-weight: 600;
  animation: blinker 1.5s linear infinite;
  font-family: sans-serif;
  text-transform: uppercase;
}

.ocrloader {
  width: 360px;
  height: 225px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 40%;
  backface-visibility: hidden;
}

.ocrloader span {
  position: absolute;
  left: 35px;
  top: 0;
  width: 85%;
  height: 5px;
  background-color: #18c89b;
  box-shadow: 0 0 10px 1px #18c89b,
              0 0 1px 1px #18c89b;
  z-index: 1;
  transform: translateY(95px);
  animation: move 1.7s cubic-bezier(0.15,0.54,0.76,0.74);
  animation-iteration-count: infinite;
}

.ocrloader:before,
.ocrloader:after,
.ocrloader em:after,
.ocrloader em:before {
  border-color: #18c89b;
  content: "";
  position: absolute;
  width: 45px;
  height: 46px;
  border-style: solid;
  border-width: 0px;
}
.ocrloader:before {
  left: 0;
  top: 0;
  border-left-width: 5px;
  border-top-width: 5px;
  border-radius: 5px 0 0 0;
}
.ocrloader:after {
  right: 0;
  top: 0;
  border-right-width: 5px;
  border-top-width: 5px;
  border-radius: 0 5px 0 0;
}
.ocrloader em:before {
  left: 0;
  bottom: 0;
  border-left-width: 5px;
  border-bottom-width: 5px;
  border-radius: 0 0 0 5px;
}
.ocrloader em:after {
  right: 0;
  bottom: 0;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-radius: 0 0 5px 0;
}

@keyframes move {
  0%,
  100% {
    transform: translateY(190px);
  }
  50% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(160px);
  }
}

@keyframes blinker {  
  50% { opacity: 0; }
}

      `} </style> */}



    </>
  )


}

export default Loading