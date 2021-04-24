import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';
import { Context } from '../Functions/context';

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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 25px;
`;
export const NavBar = () => {
  const {auth: { authentification, logIn, logOut } } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo"/>
        <H1>MrDonald's</H1>
      </Logo>
      {authentification ? 
        <User>
          <Figure>
            <img src={loginImg} alt={authentification.displayName}/>
            <figcaption>{authentification.displayName}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User>: 
        <Login onClick={logIn}>
          <Figure>
            <img src={loginImg} alt="Войти"/>
            <figcaption>Войти</figcaption>
          </Figure>
        </Login>}
    </NavBarStyled>
  )
};