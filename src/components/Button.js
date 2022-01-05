import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Button = (p) => {


    return <ButtonBody >
        <
        p > { p.text } < /p> <
        /ButtonBody>
}


const ButtonBody = styled.div `
  padding: 10px;
  cursor: pointer;
`;