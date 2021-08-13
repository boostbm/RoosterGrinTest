import React from "react"
import styled, { keyframes } from "styled-components"
import heroImg from "../images/hero.jpg"
import { Button } from "./Button"
import { Wrapper } from "./Layout"
import { fadeInUp } from "react-animations"
import { Link } from "react-scroll"

const fadeInUpAnimation = keyframes`${fadeInUp}`

const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`

const HeroBg = styled.div`
  background: url(${heroImg}) center no-repeat;
  background-size: cover;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  h1 {
    font-size: 70px;
    color: #fff;
  }

  .hero-text {
    letter-spacing: 7px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
`

export function Hero() {
  return (
    <HeroBg>
      <Wrapper>
        <FadeInUpDiv>
          <h1>
            <span>WELCOME TO </span> <br />
            <span className="hero-text">Rooster Grin</span>
          </h1>
          <Link to="HalfImgSection" smooth duration={1000}>
            <Button>Learn More</Button>
          </Link>
        </FadeInUpDiv>
      </Wrapper>
    </HeroBg>
  )
}
