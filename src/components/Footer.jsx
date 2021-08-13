import React from "react"
import styled from "styled-components"
import facebookImg from "../images/facebook.svg"
import instagramImg from "../images/instagram.svg"

const FooterText = styled.div`
  text-align: center;
`
const LinkImg = styled.img`
  max-width: 50px;
  padding: 5px;
  margin: 5px;
`
const LinkWrapper = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--lightGrey);
  padding: 10px;
`

export function Footer() {
  return (
    <FooterWrapper>
      <FooterText> Follow Us: </FooterText>
      <LinkWrapper>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <LinkImg src={instagramImg} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <LinkImg src={facebookImg} />
        </a>
      </LinkWrapper>
    </FooterWrapper>
  )
}
