import Image from 'next/image'
import React from 'react'
import Next from "../../public/next.svg"

const Logo = () => {
  return (
    <div className="mt-3 mr-2">
      <a href="#" target={"_blank"}>
        <Image src={Next} width={150} height={150} alt="Next" />
      </a>
    </div>
  );
}

export default Logo