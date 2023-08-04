import React from 'react'
import { motion } from "framer-motion";

const SignPath = () => {
  return (
    <>
    <div className='bg-pri-purple-dark h-screen overflow-hidden flex justify-center '>
        <motion.div initial={{opacity:0,scale:0.3}} whileInView={{opacity:0.5,scale:1}} transition={{duration:1.5}} className='md:w-[40%] w-[90%]  border-pri-white rounded-xl flex  justify-center  p-4 -rotate-12'>
<svg className='w-full '  viewBox="0 0 527 429" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 1.5,   
            ease: "easeInOut",
            // repeat: Infinity,
            // repeatType: "loop",
            // repeatDelay: 1
          }} d="M91.3085 295.994C79.7309 278.36 82.779 283.703 74.7436 235.612C72.6062 146.375 98.2551 174.695 100.927 192.329C119.095 240.955 125.4 190.405 135.66 161.337C145.919 132.268 168.118 172.558 170.393 200.344C182.683 350.497 237.187 244.696 211.538 158.131C193.904 69.4284 93.9983 -5.41023 43.7511 7.44356C-25.1802 25.077 11.1558 163.474 66.194 262.864C168.79 400.726 173.064 250.573 222.759 190.192C255.355 158.131 278.866 188.054 278.866 225.993C273.848 264.467 349.4 273.551 379.859 208.894C411.385 107.902 359.019 129.81 349.4 215.306C349.4 268.741 357.95 273.551 367.034 307.215C395.728 413.551 233.98 287.978 97.7208 322.177C-91.9741 407.673 269.782 295.994 519.324 295.994C503.294 379.887 510.775 341.948 492.073 422.635" stroke="#C778DD" strokeWidth="13" strokeLinecap="round" ></motion.path>
<motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            // repeat: Infinity,
            // repeatType: "loop",
            // repeatDelay: 1
          }} d="M323.217 196.07C323.217 196.07 392.57 191.85 434.897 179.505C499.019 160.802 468.561 188.054 468.561 188.054" stroke="#C778DD" strokeWidth="13" strokeLinecap="round" className="svg-elem-2"></motion.path>
<motion.path
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "loop",
            //   repeatDelay: 2
            }} d="M334.973 398.589L338.179 402.864" stroke="#C778DD" strokeWidth="13" strokeLinecap="round" className="svg-elem-3"></motion.path>
<motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{   
            duration: 1,
            ease: "easeInOut",
            // repeat: Infinity,
            // repeatType: "loop",
            // repeatDelay: 2
          }} d="M386.805 379.352L391.08 383.093" stroke="#C778DD" strokeWidth="13" strokeLinecap="round" className="svg-elem-4"></motion.path>
</svg>
          </motion.div>
</div>
    </>
  )
}

export default SignPath