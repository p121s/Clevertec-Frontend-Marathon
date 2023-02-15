import styled from 'styled-components';

import avatar from '../../images/avatar.png';

import { UserStyledProps } from './user-interfaces';

export const WrapperUser = styled.div<UserStyledProps>`
  width: 180px;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  justify-content: space-between;
  align-items: center;
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
