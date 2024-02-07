import React from "react"
import img1 from './images/face.png'

export default function Header()
{
    return(
        <header className="header">
            <img src={img1} className="header-img" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3 </h4>
        </header>
    )
} 