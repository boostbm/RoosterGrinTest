import styled from "styled-components"

export const Button = styled.button`
background: ${({color = "#A54DFF" }) => color};
 padding: 13px 13px;
 
 font-family: 'Roboto', sans-serif;
 border: none;
 color: var(--white);
 font-size: 24px;
 cursor: pointer;
 box-shadow: inset 0 0 0 0 #f9e506;
 transition: ease-out 0.3s;

&:hover{
  box-shadow: inset 300px 0 0 0 #f9e506;
 }
`
