import { useEffect, useState } from "react"
import { works , worksType } from "./works";
import SelectMenu from "./Components/SelectMenu";
import WorkCard from "./Components/WorkCard";
import PopUp from "./Components/PopUp";
import { AnimatePresence, motion } from "framer-motion"

type categoriesType = 'All' | 'Web' | 'Robotics' | 'Other';

function App() {
  
  const categories : categoriesType[] = ['All', 'Web', 'Robotics', 'Other'];

  const [selectedCategory, setSelectedCategory] = useState<categoriesType>('All');
  const [displayWorks, setDisplayWorks] = useState<worksType[]>([]);
  const [Popup, setPopup] = useState<worksType | null>();
  

  useEffect(()=>{

      switch(selectedCategory){

        case 'All':
          setDisplayWorks([...works['Web'], ...works['Robotics'], ...works['Other']]);
          break;
        case 'Web':
          setDisplayWorks(works['Web']);
          break;
        case 'Robotics':
          setDisplayWorks(works['Robotics']);
          break;
        case 'Other':
          setDisplayWorks(works['Other']);
        
      }
    }

    ,[selectedCategory]
  )
  
  

  return (
    <div className="flex flex-col items-center w-full">
      <a href="https://www.yzuemx.com" className="w-40 self-start">
        <img src="Icon.svg" />
      </a>
      <div className="flex flex-col ml-8 lg:ml-12 mt-16 mb-32 self-start">
        <div className="text-white text-6xl tracking-wider jost-200 md:text-7xl">Works</div>
        <div className="ml-1 mt-2 text-gray-400 text-2xl tracking-wider jost-200 sm:text-3xl">Created by Kanade Sisido</div>
      </div>

      <div className="self-center my-3 jost-300 text-slate-400">― MENU ―</div>
      <ul className="flex gap-3 flex-col w-full sm:gap-5 sm:flex-row sm:w-auto">
        {
          categories.map((category : categoriesType, index)=>(
            <li key={index} onClick={()=>{setSelectedCategory(category)}}>
              <SelectMenu menu={category} selected={selectedCategory == category}/>
            </li>
          ))
        }
      </ul>

      <hr className="w-48 sm:w-full h-0.5 sm:h-[1px] my-10 sm:my-16 bg-slate-500 border-0 rounded"/>
  
      <div className="flex flex-row flex-wrap justify-center w-full px-5 sm:px-16 gap-10">
          {
            displayWorks.map((work : worksType, index)=>(
              <motion.div key={selectedCategory + work.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }} 
              >
                <WorkCard  work={work} onClick={() => setPopup(work)}/>
              </motion.div>
            
            ))
          }
      </div>
      <AnimatePresence mode="wait">

      { Popup && (
        <motion.div className="fixed left-0 top-0 w-screen h-screen p-8 bg-black/30 backdrop-blur-sm overflow-auto" onClick={()=>setPopup(null)} initial={{opacity: 0 }} animate={{opacity: 1 }} exit={{opacity: 0}}>
            <motion.div className="mx-auto w-full max-w-[800px] bg-slate-600 rounded-lg z-10 border border-slate-400" onClick={e=>e.stopPropagation()} initial={{ y: 100, opacity: 0.7 }} animate={{ y: 0, opacity: 1 }} exit={{y: 100, opacity: 0.5}}>
                <PopUp work={Popup} close={()=>setPopup(null)}/>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
      

      <footer className="flex w-full h-20 mt-28 p-4 justify-center bg-slate-600 border-t border-gray-500 bottom-0">
        <div className="text-slate-400 jost-400">
          Kanade Sisido 2024 - 2025
        </div>
      </footer>

    </div>
  )
}

export default App
