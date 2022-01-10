import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from './components/pages/my_page';
import OtherPage from './components/pages/other_page';
import NewContents from './components/pages/contents/new';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="mypages" element={<MyPage />} />
        <Route path="other_pages" element={<OtherPage />} />
        <Route path="contents/new" element={<NewContents />} />
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
