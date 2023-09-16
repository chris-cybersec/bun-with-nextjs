"use client"
import Typewriter from "typewriter-effect"


const TypingComponent = () => {
  return(
  <Typewriter
  options={{
    strings: ['bundler', 'test runner', 'runtime', 'all-in-one toolkit', 'package manager'],
    autoStart: true,
    loop: true,
  }}
/>
  )
}
  
  export default TypingComponent
