import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideIn, slideRight } from './../styles';

interface MainItemButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

type KeyframeResult = ReturnType<typeof keyframes>;

interface StyledMainItemButtonProps {
  $isClicked: boolean;
  $animation: string | KeyframeResult | undefined;
}

interface TimeStampProps {
  $isClicked: boolean;
}

const StyledMainItemButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.5rem;
  animation: ${slideIn} 1s ease-out;
`;

const StyledMainItemButton = styled.button<StyledMainItemButtonProps>`
  color: white;
  background-color: #e02678;
  border-color: #e02678;
  border: 0.125rem solid transparent;
  padding: 1rem;
  width: 33%;
  border-radius: ${({ $isClicked }) =>
    $isClicked ? '0.75rem 0.75rem 0.125rem 0.75rem' : '0.75rem 0.75rem 0.75rem 0.125rem'};
  margin-left: ${({ $isClicked }) => ($isClicked ? 'auto' : '0')};
  cursor: pointer;

  animation: ${({ $animation }) => $animation} 1s ease-out;

  &:hover {
    background-color: ${({ $isClicked }) => (!$isClicked ? 'rgba(224, 38, 120, 0.7)' : '#e02678')};
    box-shadow: ${({ $isClicked }) => (!$isClicked ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  }

  transition:
    margin-left 0.3s,
    background-color 0.3s,
    box-shadow 0.3s,
    border-radius 0.3s;
`;

const TimeStamp = styled.span<TimeStampProps>`
  display: none;

  @media (min-width: 768px) {
    display: ${({ $isClicked }) => ($isClicked ? 'block' : 'inline')};
    align-self: ${({ $isClicked }) => ($isClicked ? 'flex-end' : 'flex-start')};
    margin-left: ${({ $isClicked }) => ($isClicked ? '0' : '1rem')};
    margin-right: ${({ $isClicked }) => ($isClicked ? '1rem' : '0')};
  }
`;

const MainItemButton = ({ text, type = 'button', onClick }: MainItemButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setIsInitialRender(false);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick?.();
    }, 1000);
  };

  return (
    <StyledMainItemButtonSection>
      <StyledMainItemButton
        type={type}
        $isClicked={isClicked}
        onClick={handleClick}
        $animation={isInitialRender ? slideIn : isClicked ? slideRight : undefined}
      >
        {text}
      </StyledMainItemButton>
      <TimeStamp $isClicked={isClicked}>{currentTime}</TimeStamp>
    </StyledMainItemButtonSection>
  );
};

export default MainItemButton;
