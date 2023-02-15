import styled from 'styled-components';

export const WrapperTables = styled.div`
  display: flex;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const Table = styled.table`
  width: 50%;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const Tr = styled.tr`
  padding: 16px 0;
`;

export const TdName = styled.td`
  width: 50%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  padding: 8px 0;
  vertical-align: top;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

export const TdData = styled.td`
  width: 50%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  padding: 8px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;