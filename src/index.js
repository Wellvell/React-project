import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WordsStore from './stores/WordsStore'
import { Provider } from 'mobx-react';

const stores = {
  wordsStore: new WordsStore(),
}


ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
