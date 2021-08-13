import React from "react"
import styled from "styled-components"
import { Grid, Wrapper } from "./Layout"
import Carousel from "./Carousel"
import star from "../images/star-image.png"

// Stars Style
const Stars = styled.div`
  display: flex;
`

export function CarouselSection() {
  return (
    <Wrapper>
      <Grid>
        <div className="container">
          <h3 className="title-color">LOREM IPSUM</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <Stars>
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
          </Stars>
        </div>
        <Carousel />
      </Grid>
    </Wrapper>
  )
}
