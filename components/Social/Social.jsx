import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[45%] left-0 z-10">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex px-3 justify-between items-center w-full text-gray-300 hover:text-gray-300"
            href="https://www.linkedin.com/in/yunus-emre-tasci/" target={'_blank'}
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex px-3 justify-between items-center w-full text-gray-300 hover:text-gray-300"
            href="https://github.com/Yunus-Emre-Tasci" target={'_blank'}
          >
            Github <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social