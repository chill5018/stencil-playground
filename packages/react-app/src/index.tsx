import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Landing } from './pages/landing';
import { css } from '@emotion/css';

ReactDOM.render(
  <React.StrictMode>
    <div className={css`margin: 0; height: 100vh; width: 100%; background-color: black; color: white;`}>
    <Landing />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
