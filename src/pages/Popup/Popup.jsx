import React, {useState} from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { printLine } from "../Content/modules/print" 

const Popup = () => {

  const [text, setText] = useState('hello')


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          printLine('adham basher')
          return setText('LearnReact');
        }}>Console</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </header>
    </div>
  );
};

export default Popup;
