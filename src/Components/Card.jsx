import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 p-8 rounded-[40px] bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
           <div className='flex items-center justify-between px-8 py-3 mb-5'>
            <h2>{data.filesize}</h2>
            <span className='bg-zinc-600 w-7 h-7 flex items-center justify-center rounded-full'>
            {data.close ? <IoCloseCircle /> : <IoDownloadOutline /> }
            </span>
           </div>
           {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
           </div> 
           )}
        </div>
        </motion.div>
    </> 
  )
}

export default Card