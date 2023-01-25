import React,{useState} from "react";
import SpeechNarrator from "./Components/SpeechNarrator";

function App() {
const [text, setText]=useState('Type or copy in text here to be read out')

  return (
    <div className="flex flex-col bg-blue-100 h-screen justify-center items-center content-center px-32 py-8 font-serif">
      <SpeechNarrator text={text}/>
      <textarea
        rows='10'
        cols='30'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        type="text"
        placeholder="Type or copy in text here to be read out"
        className='px-3 py-2 bg-white border-solid border-2 
        border-slate-300 rounded-md text-sm shadow-sm placeholder:italic 
        focus:outline-none focus:border-sky-500 text-black'>
      </textarea>
     
    </div>
  );
}

export default App;
