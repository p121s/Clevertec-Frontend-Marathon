import styled from 'styled-components';

import { ReactComponent as tileImg } from '../../images/svg/tile.svg';

import { ButtonForCardsListPropsStyles } from './button-for-cards-tiled.interfaces';

export const ButtonStyled = styled.button<ButtonForCardsListPropsStyles>`
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? 'linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%)' : 'white')};
  border: none;
  padding-top: 3px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);

  &:hover {
    box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
  }

  &:active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }

  @media screen and (max-width: 350px) {
    width: 32px;
    height: 32px;
  }
`;

export const ListImg = styled(tileImg)<ButtonForCardsListPropsStyles>`
  * {
    fill: ${(props) => (props.isActive ? 'white' : '#A7A7A7')};
  }
`;
