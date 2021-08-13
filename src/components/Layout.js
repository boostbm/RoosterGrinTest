import styled from "styled-components"



export const Wrapper = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  .left-align {
    align-items: flex-start;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    
  }
`





