import React, { useState } from 'react'
import {FaArrowCircleUp} from "react-icons/fa"

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible=()=>{
        const scrolled=document.documentElement.scrollTop
        if(scrolled>200){
            setVisible(true)
        }else if(scrolled<=200){
            setVisible(false)
        }
    }

    const scrollToTop=()=>{
        window.scrollTo({   //bir sayfanın scroll pozisyonunu belirli bir noktaya götürmek için kullanıyoruz.
            top:0,
            behavior:"smooth",
        })
    }

    window.addEventListener("scroll", toggleVisible);

  return (
    <div className="fixed w-100 bottom-20 h-4 left-[91vw] text-5xl z-1 cursor-pointer text-red-600 hover:text-red-400 dark:text-white dark:hover:text-gray-400">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
}

export default ScrollToTop
