import React from 'react'
import Nav from '../components/nav'
import Hero from '../assets/hero.png'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
`

const LeftPart = styled.div`
  width: 50%;
  border: 1px solid black;
`

const RightPart = styled.div`
  width: 50%;
  border: 1px solid black;
  overflow: hidden;
`

function HomePage() {
  return (
    <>
      <Nav/>
      <Container>
        <LeftPart></LeftPart>
        <RightPart><img style={{width: '100%'}} src={Hero} alt="" /></RightPart>
      </Container>
    </>
  )
}

export default HomePage
