import styled from 'styled-components';

interface IProps {
  center?: boolean
  color?: string
}

const StyledButton = styled.button<IProps>`
  border: none;
  font-size: 22px;
  margin: 20px auto 20px ${({center}) => center ? 'auto' : '0'};
  background: none;
  cursor: pointer;
  font-weight: bold;
  color: ${({color}) => color ? color : "#4aa150"};
  transition: all 0.5s;

  &:hover {
    letter-spacing: 1px;
  }
`;

export default StyledButton;