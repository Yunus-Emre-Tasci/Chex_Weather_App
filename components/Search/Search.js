import { useState } from 'react';
import './search.css';
import {
  HiArrowNarrowRight
} from 'react-icons/hi';

const Search = ({ onSearchChange }) => {
  const [value, setvalue] = useState('');
  const handleChange = (e) => {
    setvalue(e.target.value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(value);
    setvalue('');
  };
  
  return (
  <div className="formSearch">
    <form  class = "flex justify-center items-center mx-auto" onSubmit = {handleSubmit}>
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-3/5">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-white font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" autoFocus value={value}
          onChange={handleChange} required/>
    </div>
    <div className='ms-2 text-lg font-bold text-center'>
          <button type='submit'>
            <a
            className = "text-white group border no-underline border-gray-300 rounded-lg w-40 px-4 py-[10px] my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            Search
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
          </button>
        </div>
    </form>
    </div>
  );
};

export default Search;
