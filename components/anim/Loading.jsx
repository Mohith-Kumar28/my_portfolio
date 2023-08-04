import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [text, setText] = useState("Loading")
//     useEffect(() => {
//     const interval=setInterval(() => {
// if(text.length>=10){
//     setText('Loading')
// }else{
//         setText(...text+'..//')
// }

//         return ()=>{clearInterval(interval)}
//     }, 500);
//     }, [])
  return {text}
  
}

export default Loading