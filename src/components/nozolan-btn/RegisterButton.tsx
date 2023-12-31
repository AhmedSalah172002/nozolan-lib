import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonRoot = styled(Button)`
  position: 'relative';
  padding: 1rem 4.3rem;
  font-size: 1rem;
  border-radius: 0.625rem;
  color: #fff;
  background-color: #F53838;
  border-color: #F53838;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  
  :hover {
    color: #fff;
    background-color: #d03030;
    border-color: #c42d2d;
  }
  `;

function RegisterButton<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>,
) {
  return <ButtonRoot {...props} />;
}

export default RegisterButton;
