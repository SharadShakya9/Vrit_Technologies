import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 250px;
    height: 16px;
    gap: 30px;
    font-size: 14.4px;
    color: #363636;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
`

function NavMid() {
  return (
    <div>
      <Wrapper>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </Wrapper>
    </div>
  )
}

export default NavMid
