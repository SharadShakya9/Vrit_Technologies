import React from 'react'
import NavMid from './NavMid'
import styled from 'styled-components'
import Logos from '../logo/Logos'
import ButtonFactory from '../button/ButtonFactory'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

function Nav() {
  return (
    <div>
        <Wrapper>
        <Logos/>
      <NavMid/>
      <ButtonFactory type="get-in-touch" />
      </Wrapper>
    </div>
  )
}

export default Nav
