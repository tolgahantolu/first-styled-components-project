import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 99;
  background: #fff;
`;
const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Nav = styled.nav`
  flex: 1;
  position: relative;
  margin-left: 50px;
`;
const NavLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: #1c1d1c;
  padding: 0 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #f7931a;
  }
`;

const Search = styled.div`
  margin-left: 20px;
`;
const SearchWrap = styled.div`
  width: 180px;
  height: 40px;
  position: relative;
  background-color: #ccc;
  padding-left: 20px;
  line-height: 40px;
  border-radius: 20px;
`;
const Input = styled.input`
  width: 140px;
  height: 25px;
  color: #1c1d1c;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: #1c1d1c;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 15px;
`;
const Button = styled.div`
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 30px;
  color: #2e3876;
  border-radius: 15px;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo>
          <i
            className="fa-solid fa-water"
            style={{ fontSize: "18px", marginRight: "5px", color: "#F7931A" }}
          ></i>{" "}
          StockMarket
        </Logo>
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">SUPPORT</NavLink>
          <NavLink to="/">CONTACT</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>SIGN UP</Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
