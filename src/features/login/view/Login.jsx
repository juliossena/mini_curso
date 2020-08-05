import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginOperations } from '../redux';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { Container, BoxInput } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.loginReducer.jwt);
  const getJwt = (body) => dispatch(loginOperations.getJwt(body));

  console.log(jwt);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await getJwt({ email, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <BoxInput onSubmit={onSubmit}>
        <Input value={email} onChange={onChangeEmail} />
        <Input
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <Button>
          Entrar
        </Button>
      </BoxInput>

    </Container>
  );
};

export default Login;
