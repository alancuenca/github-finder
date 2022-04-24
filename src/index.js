import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React v18 no longer supports reactDOM. We have to use createRoot and render
ReactDOM.createRoot(document.getElementById('root')).render(<App />)