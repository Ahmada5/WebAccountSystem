import React from 'react';
import { SessionProvider } from '../oauth/Session';
import App from './App';

const Root = () => {
  return (
    <SessionProvider>
      <App />
    </SessionProvider>
  );
};

export default Root;
