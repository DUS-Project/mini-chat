import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 18px 0px;
  z-index: 10;
  width: 100%;
  height: 95px;
  position: fixed;
  top: 0px;
  left: 0px;
  color: rgb(47, 50, 74);
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;
const StyledSection = styled.section`
  display: flex;
  width: 80%;
`;

const SectionLeft = styled.div``;
const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.75px;
  @media (min-width: 768px) {
    font-size: 23px;
  }
`;
const HeaderSub = styled.p``;
const Header = () => {
  return (
    <StyledHeader>
      <StyledSection>
        <SectionLeft>
          <img alt="" src="" />
        </SectionLeft>
        <SectionRight>
          <HeaderTitle>회사 이름</HeaderTitle>
          <HeaderSub>회사 설명~</HeaderSub>
        </SectionRight>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
