import React from 'react';
import './index.css';
import App from './components/App';

/*Old React => 17
import ReactDOM from 'react-dom';
ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>,document.getElementById('root'));
*/

/* New React => 18+*/
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);