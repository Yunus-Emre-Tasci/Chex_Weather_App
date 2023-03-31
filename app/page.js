"use client"

import Animation from '../components/Animation/Animation.jsx';
import React, {
  useState,
  useEffect
} from 'react';
import Weather from "../components/Weather/Weather.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import Logo from "../components/Logo/Logo.jsx";
import Social from "../components/Social/Social.jsx";
import {
  ToastContainer
} from "react-toastify";
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather.jsxdeneme2';


export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);


  return (
      <main>
        {showLoading &&<Animation/>}
      {
        !showLoading&&(
          <div className='app'>
        <div className='flex justify-between p-2'>
          <CurrentWeather/>
          <Logo/>
        </div>
        <Social/>
      <Weather/>
      <ToastContainer/>
      <ScrollToTop/>
      </div>
        )
      }
      </main>
  )
}

