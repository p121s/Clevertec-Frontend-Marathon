import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperButton = styled.div`
  margin: 50px 0 16px;
`;

export const AccountParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #727272;
  text-align: left;

  & a {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #727272;
  }
`;

export const InfoParagraph = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  margin-left: 12px;
`;

export const Error = styled.p`
  color: #f42c4f;
`;

export const InfoLink = styled(NavLink)`
  color: #363636;
  text-decoration: none;
`;
