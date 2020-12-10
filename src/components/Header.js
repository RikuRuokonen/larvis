import React from "react";
import styled from "styled-components";
import logo from '../assets/fullLogo.svg';
import { Button, Space } from "antd";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import {removeFromLocalStorage} from "../helpers/utils";

const HeaderContainer = styled.div`
  display: flex;
  padding: 50px 70px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 240px;
`;

const MenuContainer = styled.div`
  margin-left:auto;
  margin-top: 12px;
  padding-right: 40px;
 `;

const Header = ({ onLoginClick, showNavigation, showLoginButton }) => {
  const history = useHistory();
  const dummyLogoutUser = () => {
    //TODO: do this also for backend, currently pretty naive approach. Also move away from header component
    removeFromLocalStorage("token")
    removeFromLocalStorage("userId")
    history.push("/")
  };

  return(
    <HeaderContainer>
      <Link to={"/dashboard"}>
        <Logo src={logo}/>
      </Link>
      <MenuContainer>
        {showNavigation && (
          <>
            <Space>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/users"}>Users</Link>
              <Button onClick={dummyLogoutUser} type="primary">Logout</Button>
            </Space>
          </>
        )}
        {showLoginButton && (
          <Button onClick={onLoginClick} type="primary"> Login </Button>
        )}
      </MenuContainer>
    </HeaderContainer>
  )
};

Header.propTypes = {
  onLoginClick: PropTypes.func,
  showNavigation: PropTypes.bool,
  showLoginButton: PropTypes.bool,
};

export default Header;