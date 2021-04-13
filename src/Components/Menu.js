import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../img/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const BannerMenu = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;


export const Menu = () => (
  <MenuStyled>
    <BannerMenu>
    </BannerMenu>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger}/>
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </SectionMenu>
  </MenuStyled>
);