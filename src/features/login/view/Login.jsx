import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Security from '../../../shared/functions/autenticacao/security';
import { loginOperations } from '../redux';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { Container, BoxInput } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const dispatch = useDispatch();
  const getJwt = (body) => dispatch(loginOperations.getJwt(body));

  useEffect(() => {
    if (Security.authorizationTokenExists()) {
      history.push('/home');
    }
  }, []);

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
      history.push('/home');
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
