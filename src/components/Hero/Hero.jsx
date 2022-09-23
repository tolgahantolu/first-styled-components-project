import styled from "styled-components";
import bgImg from "../../assets/hero-bg.png";

const Section = styled.section`
  background: darkred;
  height: 800px;
  max-height: 1000px;
  background: url(${bgImg}) center center/cover no-repeat;
`;
const Content = styled.div``;
const Left = styled.div`
  padding-left: 100px;
  padding-top: 150px;
`;
const Title = styled.h2`
  font-size: 55px;
  font-weight: 500;
  line-height: 1.1;
  color: #04050a;
`;
const Desc = styled.p`
  width: 540px;
  font-size: 20px;
  color: #9ea0ac;
  margin-top: 15px;
`;
const Button = styled.a`
  display: block;
  font-size: 30px;
  width: 350px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(90deg, #fd871b, #f7931a);
  text-decoration: none;
  margin-top: 60px;
  border-radius: 15px;
  box-shadow: 0 15px 15px rgb(0 42 177 / 15%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get to 2 FREE stocks <br /> valued up to $1650!
          </Title>
          <Desc>
            Open and Found a brokerage account with $100 or lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veritatis ipsa dolor maxime
            sed earum <span style={{ color: "#04050a" }}> BTC, ETH, DOGE </span>{" "}
            soluta, and more.
          </Desc>
          <Button href="#">
            <span>Claim your FREE stock now!</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
