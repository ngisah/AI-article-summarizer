import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src = {logo} alt = 'logo' className='w-28 object-contain'/>
        <button 
        type= "button"
        onClick={() =>window.open('https://github.com/ngisah/AI-article-summarizer/tree/main')}
        className='black_btn'>
            Github
        </button>

        </nav>
        <h1 className='head_text'>
            Summarize articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>

        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize, a GPT-4 powered open-source article summarizer that 
            transforms long articles into clear and concise summaries that are easy to understand.

        </h2>
        

    </header>
  )
}

export default Hero