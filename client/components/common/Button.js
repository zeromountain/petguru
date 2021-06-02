import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 26px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;

  background: #343a40;
  &:hover {
    background: #868e96;
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `
  }
  
  ${props =>
    props.cyan &&
    css`
      background: #22b8cf;
      &:hover {
        background: #3bc9db;
      }
    `
  }
`;

const Button = (props) => <StyledButton {...props} />

export default Button;
