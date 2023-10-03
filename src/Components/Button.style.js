import styled from 'styled-components';
import ButtonType from './Button';

export const Button = styled(ButtonType)`
  width: 200px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};

  &:hover {
    & label {
      color: green;
    }
  }

  &:hover {
    color: white;
  }

  &:active {
    background-color: white;
  }
`;

// export const Button = styled.button`
//   width: 200px;
//   height: 50px;
//   background-color: ${(props) => props.backgroundColor};
//   color: ${({ fontColor }) => fontColor};

//   &:hover {
//     & label {
//       color: green;
//     }
//   }

//   &:hover {
//     color: white;
//   }

//   &:active {
//     background-color: white;
//   }
// `;

export const ButtonLabel = styled.label`
  font-size: 24px;
  color: pink;
`;
