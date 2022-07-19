import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
  
`
const Header=styled.header``
const CoinList = styled.ul``
const Coin = styled.li``
const Title = styled.h1`
  color:${props=>props.theme.accentColor};
`
const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        <Coin></Coin>
      </CoinList>
    </Container>
  )
}

export default Coins