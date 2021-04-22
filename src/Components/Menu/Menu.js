import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import bannerImg from '../../img/banner.png';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
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


export const Menu = ({ setOpenItem }) => {
  
  const res = useFetch();

  const dbMenu = res.response;

  
  return (
    <MenuStyled>
      <BannerMenu>
      </BannerMenu>
      { res.response ? 
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}
              setOpenItem={setOpenItem}
            />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}
              setOpenItem={ setOpenItem }
            />
          </SectionMenu>
        </> : res.error ?
        <div>Sorry..</div> :
        <div>Loading...</div>
      }
    </MenuStyled>
  )
};