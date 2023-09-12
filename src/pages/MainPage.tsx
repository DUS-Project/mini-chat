import React from 'react';
import MainItems from './../components/MainItems';
import styled from 'styled-components';
import MainItemsForm from './../components/MainItemsForm';

const MainSection = styled.section`
  margin-top: 120px;
  width: 100%;
  /* border: 1px solid red; */
  padding: 1rem;
  @media (min-width: 760px) {
    padding: 2rem;
    width: 80%;
  }
  @media (min-width: 1023px) {
    padding: 2rem;
    width: 60%;
  }
`;

const MainPage = () => {
  return (
    <MainSection>
      <MainItems
        index={0}
        items={[
          '나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 전차로 어린 백셩이 니르고져 홇베이셔도 마참네 제 뜨들 시러펴디 몯핧 노미하니아 ',
          'Item 1-2',
          'Item 1-3',
          'Item 1-4',
        ]}
        buttonText="Next 1"
      />
      <MainItems index={1} items={['Item 2-1', 'Item 2-2', 'Item 2-3', 'Item 2-4']} buttonText="Next 2" />
      <MainItems index={2} items={['Item 3-1', 'Item 3-2', 'Item 3-3', 'Item 3-4']} buttonText="Finish" />
      <MainItemsForm index={3} text="Please enter your details" buttonText="Send" />
    </MainSection>
  );
};

export default MainPage;
