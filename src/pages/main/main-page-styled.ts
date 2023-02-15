import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 208px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 182px);
  }

  @media screen and (max-width: 320px) {
    min-height: calc(100vh - 191px);
  }
`;

export const Section = styled.section`
  display: flex;
  margin: 47px 0 62px;
  flex: 2 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 30px 0 62px;
  }

  @media screen and (max-width: 320px) {
    margin: 11px 0 62px;
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
`;
