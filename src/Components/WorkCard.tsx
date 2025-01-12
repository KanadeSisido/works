import React from "react";
import { worksType } from "../works"
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

// <!-- Font Awesome Free by @fontawesome - https://fontawesome.com -->


const WorkCard = ({work, onClick} : {work : worksType, onClick : (value: React.SetStateAction<worksType | null | undefined>) => void}) => {
  return (
    <motion.div onClick={() => onClick(work)} whileHover={{ scale: 1.03 }} className="flex flex-col sm:flex-row w-full max-w-[740px] sm:h-72 bg-slate-600 hover:bg-slate-500/70 rounded-lg transition border border-slate-500">
        <div className="flex flex-1">
          <img src={work.imagedir} className="object-cover h-72 w-full sm:h-full rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg "/>
        </div>
        <div className="flex flex-1 flex-col min-w-64 sm:flex-0 sm:mt-8 p-7">
            <div className="text-gray-100 noto-sans-jp-300 tracking-wider text-2xl overflow-hidden vt">{work.name}</div>
            <div className="pt-2 text-gray-400 noto-sans-jp-300 tracking-wider text-sm">{work.summary}</div>
            <div className="mt-5 flex flex-row justify-between">
              <div className="flex gap-2">
                {
                  work.github&&( 
                    <a href={work.github} onClick={e=>e.stopPropagation()} target="_blank" className="w-10 h-10 hover:bg-slate-500 transition rounded-full flex items-center justify-center">
                      <FaGithub className="text-2xl text-teal-400 opacity-80 m-auto"/>
                    </a>
                    )
                  }
                
                {
                  work.url &&(
                    <a href={work.url} onClick={e=>e.stopPropagation()} target="_blank" className="w-10 h-10  hover:bg-slate-500 transition rounded-full flex items-center justify-center">
                      <FaLink className="text-2xl text-teal-400 opacity-80 m-auto"/>
                    </a>
                    )
                }
              </div>
              <div className="flex gap-2 pr-2 items-center">
                <div className="bg-slate-500 w-[0.5px] h-7"></div>
                    {
                      work.stackIcon.map((icons, index)=>(
                        <div className="text-2xl text-white opacity-50 m-auto" key={index}>
                          {icons}
                        </div>
                      ))
                    }
                
              </div>
            </div>
        
        </div>
        
    </motion.div>
  )
}

export default WorkCard