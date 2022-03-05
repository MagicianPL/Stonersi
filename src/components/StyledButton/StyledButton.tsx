import styled from 'styled-components';

const StyledButton = styled.button<{center?: boolean}>`
  border: none;
  font-size: 22px;
  margin: 20px auto 20px ${({center}) => center ? 'auto' : '0'};
  background: none;
  cursor: pointer;
  font-weight: bold;
  color: #4aa150;
`;

export default StyledButton;