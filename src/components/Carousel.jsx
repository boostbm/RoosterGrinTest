import React, { useState } from "react"
import styled from "styled-components"

// CAROUSEL COMPONENT
function Carousel() {
  const quotes = {
    0: {
      client: "John Doe 08/08/2019",
      quote:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit",
    },
    1: {
      client: "Epic Doe 01/24/2021",
      quote:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit",
    },
    2: {
      client: "Ryan Doe 04/12/2020",
      quote:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit",
    },
    3: {
      client: "David Doe 11/11/2021",
      quote:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit",
    },
  }

  const [current, setCurrent] = useState(quotes[0])

  const [active, setActive] = useState(0)

  const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
    padding: 88px 70px;
    max-width: 700px;

    blockquote {
      text-align: center;
      margin-bottom: 20px;
      color: #45454d;
    }

    .quote-title {
      text-align: center;
      font-size: 24px;
    }
  `

  const CarouselSpan = styled.div`
    display: flex;

    span {
      height: 20px;
      width: 20px;
      margin: 0 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    span::before {
      content: "";
      height: 6px;
      width: 6px;
      background-color: #d4d4d4;
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }

    span:hover::before {
      background-color: var(--orange);
    }

    span[data-quote="${active}"]::before {
      background-color: var(--orange);
    }
  `

  return (
    <CarouselContainer>
      <h6 className="quote-title">{current.client}</h6>
      <blockquote>{current.quote}</blockquote>
      <CarouselSpan>
        {Object.keys(quotes).map((index) => (
          <span
            onClick={(event) => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </CarouselSpan>
    </CarouselContainer>
  )
}

export default Carousel
