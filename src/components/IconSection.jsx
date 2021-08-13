import React from "react"
import styled from "styled-components"
import { Wrapper, Grid } from "./Layout"
import { Link } from "react-scroll"
import expertiseImg from "../images/home-expertise.svg"
import maskImg from "../images/home-hygiene.svg"
import labImg from "../images/home-lab.svg"
import retentionImg from "../images/home-retention.svg"

const IconImg = styled.img`
  max-width: 75px;
  width: 100%;
`
const IconWrapper = styled.div`
  width: 75px;
  height: 75px;
  margin: 10px;
  border-radius: 9999px;
  border: 1px solid purple;
  padding: 10px;
  transition: ease 1s;

  &:hover {
    padding: 1px;
    border: 1px solid var(--white);
  }
`
const IconGrid = styled(Grid)`
  text-align: center;

  .icon-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
  }
`

export function IconSection() {
  return (
    <Wrapper>
      <Grid>
        <div className="container">
          <h3 className="title-color">LOREM IPSUM</h3>
          <p>
            Thank You for this wonderful opportunity. There are still a lot of
            things I need to learn and a lot more learning in the future.
            However; I am grateful for just being able to apply for this job. I
            am willing to go through anything it takes to achieve my goal as a
            Web Developer and this is just another stepping stone for me to
            become better and I just want to thank you guys for giving me a
            chance to push myself. Whatever the outcome may be, I appreciate
            everything and all the time you guys have put in to check out my
            work. Thank you!!!
          </p>
          <br />
          <p>
            <Link to="Banner-2" smooth duration={1000}>
              <a href="Banner-2"> &gt; Learn More </a>
            </Link>
          </p>
        </div>
        <div className="container">
          <IconGrid>
            <div className="icon-div">
              <IconWrapper>
                <IconImg src={expertiseImg} />
              </IconWrapper>
              <p>LOREM</p>
            </div>
            <div className="icon-div">
              <IconWrapper>
                <IconImg src={maskImg} />
              </IconWrapper>
              <p>LOREM</p>
            </div>
            <div className="icon-div">
              <IconWrapper>
                <IconImg src={labImg} />
              </IconWrapper>
              <p>LOREM</p>
            </div>
            <div className="icon-div">
              <IconWrapper>
                <IconImg src={retentionImg} />
              </IconWrapper>
              <p>LOREM</p>
            </div>
          </IconGrid>
        </div>
      </Grid>
    </Wrapper>
  )
}
