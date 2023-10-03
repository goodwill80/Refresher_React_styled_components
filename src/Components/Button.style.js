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

export const SubmitButton = styled(ButtonType).attrs({
  type: 'submit',
})`
  box-shadow: 0 9px #999;
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
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
