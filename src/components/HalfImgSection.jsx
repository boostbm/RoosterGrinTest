import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Grid } from "./Layout"
import gridBgImg from "../images/img-1.jpg"

// HALF IMAGE FOR GRID
const GridBgImg = styled.div`
  background: url(${gridBgImg}) center no-repeat;
  background-size: cover;
`

// HALF IMAGE WRAPPER STYLE
const HalfImgWrapper = styled.section`
  .left,
  .right {
    padding: var(--sectionPadding) 20px;
  }

  .left {
    max-width: calc(var(--maxWidth) / 2);
    background: var(--white);
    justify-self: flex-end;
    width: 100%;
  }

  .right {
    background-size: cover;
  }
`

export function HalfImgSection() {
  return (
    <HalfImgWrapper id="HalfImgSection">
      <Grid>
        <div className="left">
          <h3 className="title-color">LOREM IPSUM </h3>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>{" "}
          <br />
          <p>
            <Link to="Banner-1" smooth duration={1000}>
              <a href="Banner-1"> &gt; Learn More </a>
            </Link>
          </p>
        </div>
        <GridBgImg />
      </Grid>
    </HalfImgWrapper>
  )
}
