import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CheckUrl from "../Componenets/TestUrl"

const SearchBar = () => {
  const navigate = useNavigate();
  const [Url, setUrl] = useState("")
  const [error, seterror] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(Url);
    const isValid = CheckUrl(Url)
    if(!isValid)
    {
       seterror("Oops! Please enter a complete URL like https://example.com");

        return
    }
    navigate("/Audit" ,  {
    
    state: { url: Url}});
  };
  
  useEffect(()=>{
    setTimeout(() => {
        seterror("")
    }, 5000);
  },[error])

  return (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-12 mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-3 w-full">
        <input
          type="text"
          placeholder="Enter URL or keyword..."
          className="
            bg-[#121212] border border-[#222222] text-white
            w-full h-12 px-4 rounded-md
            placeholder:text-white placeholder:opacity-60
            focus:outline-none focus:ring-2 focus:ring-[#444]
          "
          onChange={(e)=>setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="
            border border-[#222222] text-white px-5 rounded-md
            hover:bg-[#222222] transition
          "
        >
          Search
        </button>
      </form>
      <div className='absolute text-red-700 text-sm translate-y-2'>
        {error}
      </div>
    </div>
  );
};

export default SearchBar;
