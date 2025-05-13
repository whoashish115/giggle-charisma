import React from 'react'

const Title = ({icon, start, mid, end}) => {
  return (
  <h2  data-aos="fade-up" className="relative flex items-center justify-center font-secondary text-4xl md:text-5xl font-extrabold gap-6 flex-wrap text-center text-title mb-16 z-10 drop-shadow-xl">
    <span className='text-primary'>
{icon}
    </span>
         {start} <span className='font-secondary text-primary'>
            {mid}
         </span>
            {end}
       </h2>
  )
}

export default Title