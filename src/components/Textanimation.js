import React, { useState } from 'react';
import styled from 'styled-components';

export const Textanimation = () => {
    

    return (
        <>
            <Header></Header>

            <Container>
                <TextWrapper>
                    <Text> 
                    <Text1>COMING SOON</Text1>
                    <Text2>COMING SOON</Text2>
                    <Text3>COMING SOON</Text3>
                    <Text4>COMING SOON</Text4>
                    <Text5>COMING SOON</Text5>
                    <Text6>COMING SOON</Text6>
                    <Text7>COMING SOON</Text7>
                    <Text8>COMING SOON</Text8>
                    <Text9>COMING SOON</Text9>
                    <Text10>COMING SOON</Text10>
                    <Text11>COMING SOON</Text11>
                    </Text>
                </TextWrapper>
            </Container> 
        </>
    )
}

const Header = styled.div`
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 100px;
    z-index: -1;
`;

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    height: 100vh;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #161616;
    padding: 5px;
    animation: slide-out-container 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 2.8s;
    animation-fill-mode: forwards;

    @keyframes slide-out-container {
    0% {
        height: 100vh;
    }

    40% {
        height: 100vh;
    }

    100% {
        height: 0%;
    }
}
 `;

const TextWrapper = styled.div`
    color: white;
    position: absolute;
    z-index: 16;
    background-color: black;
`;

const Text = styled.div`
    font-family: "Monument Extended";
    font-weight: lighter;
    font-size: 54px;
 `;

const Text1 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text2 = styled.div`
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text3 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text4 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text5 = styled.div`
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text6 = styled.div`
    animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s, slide-out 1s linear 3.2s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text7 = styled.div`
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text8 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text9 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text10 = styled.div`
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;

const Text11 = styled.div`
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
    opacity: 0;

    @keyframes blink {
    0% {
        opacity: 0%;
    }
    1% {
        opacity: 100%;
    }
    99% {
        opacity: 100%;
    }
    100% {
        opacity: 0;
    }
}

`;