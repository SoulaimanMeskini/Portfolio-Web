import { Button } from './Button'
import React from 'react';


export const HeaderComponent = () => {

    async function transitionMenu(targetButton){
        targetButton.classList.add("transitionMenu");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
    
        const newDiv = document.createElement("ul")
        const newContent = document.createTextNode("test");
    
        newDiv.appendChild(newContent);
        targetButton.parentElement.appendChild(newDiv);
        
    
        document.getElementById("Menu").setAttribute("class", "visible");
        targetButton.classList.add("fadeOutMenu");
        targetButton.outerHTML = "";
    }

    return (
    <div class="header">
        {/* 
        onClick={(e) => transitionMenu(e.target)}
        
        gives the same result as 
        
        document.getElementsByTagName("img")[0]
        
        the difference is, the first one is only working on the target of the event and the other is binded to the tagname and will do the same on every img tag
        */}
        
        <button class="liquidButton" onClick={(e) => transitionMenu(e.target)}></button>
        <ul id="Menu" class="hidden">
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">LOOK BOOK</a></li>
            <li><a href="#">ABOUT</a></li>
        </ul>
    </div>
    )
}