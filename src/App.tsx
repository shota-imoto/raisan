import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jsx, css } from '@emotion/react'
import Index from './components/pages/index'

const appStyle = css({
	width: '100%',
	backgroundColor: 'black',
	color: 'white'
})

function App() {
  return (
    <div css={appStyle}>
      <Index />
    </div>
  );
}

export default App;
