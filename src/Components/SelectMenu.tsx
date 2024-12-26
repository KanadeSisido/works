import { motion } from "framer-motion"

const SelectMenu = ({menu, selected}: {menu: string, selected : boolean}) => {
  const classname = "px-5 py-3 mx-5 sm:mx-0 sm:py-2 rounded-md jost-400 tracking-wide " + (selected? "bg-teal-600 text-white" : "bg-slate-600 text-slate-400 hover:bg-[#2c7475]");
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className={classname} >{menu}</motion.div>
  )
}

export default SelectMenu