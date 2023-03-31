import Image from 'next/image'
import React from 'react'
import Chex from "../../public/Chex.svg"

const Logo = () => {
  return (
    <div className="mt-3 mr-2">
      <a href="https://chex.com.tr/" target={'_blank'}>
        <Image src={Chex} width={150} height={150} alt="Chex" />
      </a>
    </div>
  );
}

export default Logo