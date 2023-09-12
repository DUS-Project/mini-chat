import React from 'react';
import styled from 'styled-components';
import { slideIn } from './../styles';

const StyledMainItem = styled.div`
  display: flex;
  max-width: 60%;
  border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
  padding: 1rem 1.5rem;
  background-color: white;
  margin-bottom: 1rem;
  align-self: flex-start;
  color: #2f324a;
  animation: ${slideIn} 1s ease-out;
  transition:
    margin-left 0.3s,
    background-color 0.3s,
    box-shadow 0.3s,
    border-radius 0.3s;
`;

const MainItem = ({ text, children }) => {
  return (
    <StyledMainItem>
      {text}
      {children}
    </StyledMainItem>
  );
};

export default MainItem;
