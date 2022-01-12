import React from 'react';
import styled from 'styled-components';

export const CircleComponent = () => {
    async function toggleClasses(targetButton) {
        targetButton.outerHTML = "";
        document.getElementById("circle").setAttribute("class", "OpenupCircle");
        await new Promise(resolve => setTimeout(resolve, 2000));
        document.getElementById("circle").setAttribute("class", "OpenCircle");
    }

    return (
        <section>
            <button class="hiddenButton" onClick={(e) => toggleClasses(e.target)}></button>
            <div class="box"></div>
            <div class="box "></div>
            <div id="circle" class="circle"></div>
        </section>
        
    )
}
