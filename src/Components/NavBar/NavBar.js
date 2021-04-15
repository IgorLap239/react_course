import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
`;
const LoginPic = styled.img`
  width: 32px;
  height: 32px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <LoginPic src={loginImg} alt="logo"/>
      войти
    </Login>
  </NavBarStyled>
);