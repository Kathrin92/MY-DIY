import styled from '@emotion/styled';

const Button = styled.button`
  text-align: center;
  background: #f85c23;
  color: #0e0f09;
  border: 3px #f85c23 solid;
  border-radius: 30px;
  box-shadow: 0px 3px 6px grey;
  font-size: 1.1rem;
  padding: 10px 20px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    border: 3px #a2a2a1 solid;
  }
  &:active {
    background: #a2a2a1;
  }
`;

export default Button;
