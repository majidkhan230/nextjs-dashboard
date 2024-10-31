import UserCard from '@/components/UserCard'
import React from 'react'

const Adminpage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
     
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
      <div className="flex w-full flex-wrap gap-4">
      <UserCard type={"Student"}/>
      <UserCard type={"Parent"}/>
      <UserCard type={"Teacher"}/>
      <UserCard type={"Staff"}/>
      </div>
      </div>
      {/* RIGHT */}
      <div className="right w-full  md:w-1/3 bg-red-300">r</div>
    </div>
  )
}

export default Adminpage