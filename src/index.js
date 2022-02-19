import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, 
          Routes,
          Route} from "react-router-dom";
import None from './None';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ERROR" element={<None />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


