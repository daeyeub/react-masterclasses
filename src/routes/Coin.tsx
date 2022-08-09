import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router";

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
`;
interface RouteState {
  state: {
    name: string;
    rank: number;
  };
}
const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : <span>{info.hello}</span>}
    </Container>
  );
};

export default Coin;
