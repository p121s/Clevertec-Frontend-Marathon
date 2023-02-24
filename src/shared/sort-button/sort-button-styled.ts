import styled from 'styled-components';

export const WrapperSortButton = styled.div`
  position: relative;
`;

export const SortImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 20px;
  top: 11px;

  @media screen and (max-width: 825px) {
    left: 17px;
    top: 11px;
  }

  @media screen and (max-width: 350px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 38px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 30px;
  border: none;
  background: white;
  color: #a7a7a7;
  padding-left: 25px;
  font-size: 14px;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 18px;
  letter-spacing: 0.1px;

  &:hover {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }

  &:active {
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  }

  & span {
    @media screen and (max-width: 680px) {
      display: none;
    }
  };

  @media screen and (max-width: 680px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (max-width: 350px) {
    width: 32px;
    height: 32px;
    padding: 8px 8px;
  }
`;
