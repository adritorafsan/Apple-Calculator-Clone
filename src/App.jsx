
import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  function Display(value) {
    setInput(input + value)
  }
  function Clear() {
    setInput("");
  }

  function Calculate() {
    let answers = eval(input);
    setInput(answers)
  }

  return (
    <>
      <div  className='flex justify-center items-center min-h-[100vh]'>
        <form className='p-6 bg-black h-[450px] w-[360px] mx-auto rounded-lg'>
          <input type="text" value={input} readOnly className='text-white text-right text-xl pr-1 focus:outline-none rounded-xl bg-[#505050] h-10 w-full ' />
          <div className='text-white my-2 text-3xl w-[350px] gap-y-2 grid grid-cols-4 items-center text-center grid-rows-5'>
            <span className='cursor-pointer flex justify-center items-center text-black h-[65px] w-[65px] rounded-full bg-[#D4D4D2]'onClick={Clear} >C</span>
            <span className='cursor-pointer flex justify-center items-center text-black h-[65px] w-[65px] rounded-full bg-[#D4D4D2]' onClick={() => Display("+/-")}>+/-</span>
            <span className='cursor-pointer flex justify-center items-center text-black h-[65px] w-[65px] rounded-full bg-[#D4D4D2]' onClick={() => Display("%")}>%</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#FF9500]' onClick={() => Display("/")}>÷</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]' onClick={() => Display("7")}>7</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]' onClick={() => Display("8")}>8</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]' onClick={() => Display("9")}>9</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#FF9500]'onClick={() => Display("*")}>×</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("4")}>4</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("5")}>5</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("6")}>6</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#FF9500]'onClick={() => Display("-")}>−</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("1")}>1</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("2")}>2</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display("3")}>3</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#FF9500]'onClick={() => Display("+")}>+</span>
            <span className='cursor-pointer flex justify-start px-3 mr-1 items-center h-[65px] rounded-full bg-[#1C1C1C] col-span-2'onClick={() => Display("0")}>0</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#1C1C1C]'onClick={() => Display(".")}>.</span>
            <span className='cursor-pointer flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[#FF9500]'onClick={Calculate}>=</span>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
