import React from "react"
import styled from "styled-components"
import { Wrapper } from "./Layout"
import logo from "../images/logo-white.svg"

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;

  img {
    width: 250px;
    height: auto;
  }
`
const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
`
export function Nav() {
  return (
    <Header>
      <HeaderWrapper>
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </HeaderWrapper>
    </Header>
  )
}
