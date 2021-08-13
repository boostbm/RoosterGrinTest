import React from "react"
import styled from "styled-components"
import { Wrapper } from "./Layout"

const BannerBg = styled.div`
  background: url(${({ bgImg }) => bgImg}) center no-repeat;
  background-size: cover;
  padding: 150px 0;

  ${Wrapper} {
    display: flex;
    justify-content: ${({ position }) => position};
    align-items: center;
    color: white;
  }
`

export function Banner({ bgImg, position, children }) {
  return (
    <BannerBg bgImg={bgImg} position={position}>
      <Wrapper>{children}</Wrapper>
    </BannerBg>
  )
}
