import React from 'react'
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };

  return (
    <>
        <div className='navbar'>
            <div className='pizzarie'>
                <div style={{display:"inline-flex", height: "100px", gap: "890px"}}>
                    <div>
                        <HiMenu className='menu-btn' onClick={toggleOpen} />
                        {open && (
                            <ul style={{listStyle: "none", color: "white", justifyContent: "space-between", padding: "2px", width:"100px", display: "block", gap: "10px"}}>
                                <li><a href='#home'>Home</a></li>
                                <li><a href='#about'>About</a></li>
                                <li>Contact</li>
                                <li>Login</li>
                                <li>Logout</li>
                            </ul>
                        )}
                    </div>
            
                    <div>
                        <ul style={{listStyle: "none", color: "white", justifyContent: "space-between", padding: "5px", width:"100px", display: "flex", gap: "10px"}}>
                            
                        </ul>
                    </div>
                    
                </div>
                <div style={{color:"yellow", textAlign:"center", fontSize:"50px", marginTop: "-100px", position: "relative"}}>
                    <h1>Licas Pizzarie</h1>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Navbar
