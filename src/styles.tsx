import { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideRight = keyframes`
from {
  transform: translateX(1rem);
  opacity: 0;
}
to {
  transform: translateX(0);
  opacity: 1;
}
`;
