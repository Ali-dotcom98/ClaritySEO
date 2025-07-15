import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white mt-20'>
        <h4 className= 'border border-[#222222] bg-[#0A0A0A] px-3 py-1 rounded-2xl'>Powering Developers & Marketers with Fast SEO Insights</h4>
        <h1 className="text-[60px] font-outfit font-bold flex flex-col items-center leading-tight">
          <span>Run Smart & Beautiful</span>
          <span className=''>SEO Audits Instantly</span>
        </h1>

        <p className='leading-loose text-md mt-2'>Enter any website URL and get a detailed SEO performance report in seconds.</p>

    </div>
  )
}

export default Header