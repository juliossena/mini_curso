import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Security from '../../../shared/functions/autenticacao/security';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    if (!Security.authorizationTokenExists()) {
      history.push('/login');
    }
  }, []);

  return (
    <div>
      home
    </div>
  );
};

export default Home;
