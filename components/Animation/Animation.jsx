import React from 'react'
import "../../style/scss/style.scss"

const Animation = () => {
  return (
    <>
      <div className="container">
        <h1 className="welcome sm:text-5xl lg:text-6xl xl:text-7xl">
          Welcome to <span>Chex</span> Weather App
        </h1>

        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
      </div>
    </>
  );
}

export default Animation