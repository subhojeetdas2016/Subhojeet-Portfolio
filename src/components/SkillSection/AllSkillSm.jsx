import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import SingleSkill from "./SingleSkill";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJs",
    icon: FaReact,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "MongoDb",
    icon: SiMongodb,
  },
  {
    skill: "ExpressJs",
    icon: BiLogoRedux,
  },
  {
    skill: "TailwindCss",
    icon: BiLogoTailwindCss,
  },
]

const AllSkillSm = ()=> {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index)=>{
            return <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0.7}}  className="flex flex-col items-center" key={index}>
                <item.icon className="text-7xl text-orange"/>
                <p className="text-center mt-4 text-white">{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}

export default AllSkillSm