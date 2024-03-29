import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../content/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const AppComponent = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Clark Maine Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Clark Maine Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};

export default AppComponent;
