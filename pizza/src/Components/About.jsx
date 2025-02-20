import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div id='about'>
        <div style={{width: "40%", padding: "10px"}}>
          <h1 style={{width:"250px", padding:"10px"}}>NOT JUST THE PIZZA</h1>
          <h4 style={{width:"380px", padding:"10px"}}>
          We create lasting memories, one pizza at a time. Take a minute to learn more about our story, our values, and our commitment to quality.
          </h4>
          <div style={{display:"inline-flex", gap:"10px", padding:"10px"}}>
            <button style={{width:"150px", padding:"10px", borderRadius:"30px", backgroundColor:"red", color:"white", border:"none"}}>
              Place an order
            </button>
            <div style={{display:"flex", gap:"10px"}}>
              <p>Check out our menu</p>
              <FaLongArrowAltRight style={{paddingTop:"10px", height:"30px"}}/>
            </div>
          </div>
        </div>
        <div style={{width: "60%"}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMkksm8LT0aW0bowrLYQ4J5im75w_449_8w&s' style={{width: "60%", padding: "10px"}}/>
        </div>
      </div>
    </>
  )
}

export default About
