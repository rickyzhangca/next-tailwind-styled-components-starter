import React from 'react';
import '../tailwind.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
