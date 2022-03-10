import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Жизненный цикл компонента.
// Жизн. ц. регулируется хуками. 
// Компонент проходит ряд этапов, на каждом этапе можно всё конфигурировать.
// 3 этапа монтирование, обновление, демонтирование

