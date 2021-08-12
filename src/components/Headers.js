import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
    const [burger, setBurger] = useState(false)
    const changeBurger = ()=>{
        if(burger){
            setBurger(false)
        }else{
            setBurger(true)
        }
    }
    return (
        <nav>
            <div className="nav">
            <div className="nav-left"><h1><Link to="/" >Suraj Jha</Link></h1></div>
            <div className={burger?"nav-right showburger" : "nav-right hideburger"} >
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/service" >Service</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
            <div className="burger" onClick={changeBurger} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </nav>
    )
}

export default Headers
