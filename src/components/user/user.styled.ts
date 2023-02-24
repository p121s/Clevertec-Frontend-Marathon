import styled from 'styled-components';

import avatar from '../../images/avatar.png';

export const WrapperUser = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserData = styled.div``;

export const NameUser = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.1px;
  color: #363636;
`;

export const UserAvatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: url(${avatar}) center / contain no-repeat;
`;
