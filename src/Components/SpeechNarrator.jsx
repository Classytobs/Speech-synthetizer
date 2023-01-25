import React,{useState} from 'react';
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai";

export default function SpeechNarrator(props) {
    const [showPlay, setShowPlay] = useState(false)
     const [rateValue, setRateValue]= useState(1)

     const splitText = (text, from, to) => [
         text.slice (0, from),
         text.slice (from, to),
         text.slice (to)
     ]

     const [section, setSection] = useState({
         from:0,
          to:0})

     const synth = window.speechSynthesis;
     let utterance = new SpeechSynthesisUtterance(props.text);
     utterance.addEventListener("boundary", ({charIndex, charLength}) => {
         setSection({from:charIndex, to:charIndex + charLength})
      })
      utterance.rate = rateValue;

     const SectionText = ({text,from,to}) => {
         const[start, highlight, finish]=splitText(text, from, to);
         return (
         <div className='bg-white w-full p-3 rounded-lg'>
             {start}
             <span>{highlight}</span>
             {finish}
         </div>

         )
     }

 
      const handlePause = () => {
        synth.pause();
        setShowPlay(false)
      }

     const handlePlay = () => {
        synth.speak(utterance)
        synth.resume()
        setShowPlay(true)

     }

     const handleRateValue =(e) => {
        setRateValue(e.target.value)
     }

  return (
    <div className='flex flex-col gap-y-5 items-center content-center justify-center mb-8'>
      <h1 className='text-4xl'>Speech Narrator</h1>
      {showPlay? (<AiFillRobot className='text-8xl cursor-pointer' onClick={handlePause} />):
      (<AiOutlineRobot className='text-8xl cursor-pointer' onClick={handlePlay} />)}
        <SectionText
        text={props.text} 
        {...section}/> 
        <div>
            <label>Rate:{rateValue} </label>
            <input type='range' step='0.1' min='0.5' max='2' value={rateValue} 
            onChange={handleRateValue} className='block cursor-pointer'/>
        </div>
    
    </div>
    
  )
}
