import styled from 'styled-components';

export const WrapperContent = styled.div``;

export const Header = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  margin-bottom: 16px;
`;

export const Subparagraph = styled(Paragraph)`
  font-weight: 400;
  margin-left: 30px;

  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }
`;

export const SubSubparagraph = styled(Subparagraph)`
  margin-left: 60px;
`;

export const SubSubSubparagraph = styled(Subparagraph)`
  margin-left: 90px;
`;
