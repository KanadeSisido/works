import React from 'react'
import { worksType } from '../works'
import { FaXmark } from "react-icons/fa6";
import { FaGithub, FaLink } from 'react-icons/fa';
import { motion } from "framer-motion"
import { SlArrowDown } from 'react-icons/sl';


const PopUp = ({work, close} : {work : worksType, close : (value: React.SetStateAction<worksType | null | undefined>) => void}) => {
  return (
        <div className='relative flex flex-col mb-6'>
            <img src={work.imagedir} className='rounded-lg w-full object-cover max-h-[500px]'/>
            
            <div className='flex flex-row w-full justify-end'>
                <div className='absolute right-3 top-3'>
                    <div onClick={()=>close(null)} className="w-8 h-8 flex items-center justify-center">
                        <FaXmark className='text-teal-500 text-[28px] z-10'/>
                    </div>
                </div>
            </div>
            <div className='px-6 pt-10 md:pl-10'>
                <div className='flex justify-between'>
                    <motion.div className='text-slate-100 noto-sans-jp-300 tracking-wider text-2xl md:text-3xl' initial={{ y: 10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2}} >{work.name}</motion.div>
                    <motion.div className='flex items-center gap-2' initial={{ y: 10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2}}>
                        {
                            work.github && 
                            (<a href={work.github} onClick={e=>e.stopPropagation()} target="_blank" className="w-8 h-8 hover:bg-slate-500 transition rounded-full flex items-center justify-center">
                                <FaGithub className="text-2xl text-white opacity-50 m-auto"/>
                            </a>)
                        }
                        
                        {
                            work.url &&
                            (<a href={work.url} onClick={e=>e.stopPropagation()} target="_blank" className="w-8 h-8  hover:bg-slate-500 transition rounded-full flex items-center justify-center">
                                <FaLink className="text-2xl text-white opacity-50 m-auto"/>
                            </a>)
                        }
                    </motion.div>
                </div>

                <motion.div className='text-slate-400 noto-sans-jp-300 tracking-wide text-md pt-3'  initial={{ y: 10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3}}>{work.summary}</motion.div>
                <div className='flex gap-2 mt-2'>
                    {
                        work.tags.map((tag, index)=>(
                            <motion.p key={index} className='text-teal-400 noto-sans-jp-300 tracking-wider text-md ' initial={{ y: 10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 + 0.1 * index}}>
                                {'#' + tag}
                            </motion.p>
                        ))
                    }
                </div>
            </div>

            <div className='text-slate-400 m-auto mt-10'>
                <motion.div
                    animate={{
                        y: [0, 10, 10, 0, 0]
                    }}
                    transition={{
                        duration: 2,
                        times: [0, 0.3, 0.5, 0.8, 1.0],
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeOut',
                    }}>
                    <SlArrowDown className='text-xl'/>
                </motion.div>
            </div>
            
            {/* detail */}
            <div className='p-6 md:pl-10 my-10'>
                <motion.div className='text-white jost-300 tracking-wider text-2xl md:text-3xl mb-5' initial={{ y: 10, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3}} viewport={{once: true, amount: 0.2}}>DETAIL <div className='h-1 w-10 bg-teal-500 rounded-md mt-1'></div></motion.div>
                <motion.div className='text-slate-200 noto-sans-jp-300 whitespace-pre-wrap' initial={{ y: 10, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4}} viewport={{once: true, amount: 0.2}}>{work.detail}</motion.div>
            </div>
            
            {/* kodawari */}
            <div className='p-6 md:pl-10 my-10'>
                <motion.div className='text-white jost-300 tracking-wider text-2xl md:text-3xl mb-5' initial={{ y: 10, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3}} viewport={{once: true, amount: 0.2}}>KODAWARI <div className='h-1 w-10 bg-teal-500 rounded-md mt-1'></div></motion.div>
                <ul className='ml-2'>
                    {
                        work.codawari.map((codawari, index)=>(
                            <motion.li key={index} className='flex items-center text-slate-200 my-3 tracking-wider noto-sans-jp-300' initial={{ y: 10, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 * index}} viewport={{once: true, amount: 0.2}}>
                                <p className='bg-slate-400 h-1 scale-y-50 w-3 rounded mr-3'></p>
                                {codawari}
                            </motion.li>
                        ))
                    }
                </ul>
                
            </div>


        </div>
  )
}

export default PopUp