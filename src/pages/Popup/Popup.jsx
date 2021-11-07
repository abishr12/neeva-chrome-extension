import React, {useEffect, useState, useCallback} from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {

  const [action, setAction] = useState(false)


  // toggle on and off - https://stackoverflow.com/questions/5557641/how-can-i-reset-div-to-its-original-state-after-it-has-been-modified-by-java
  // Toolbar Image - https://neilpatel.com/blog/chrome-extension/ 
  // https://dev.to/paulasantamaria/chrome-extensions-adding-a-badge-644
  
  const activateExtension = useCallback(() => {
    chrome.tabs.query({currentWindow: true, active: true}, async function (tabs){
    var activeTab = tabs[0];
    await chrome.tabs.sendMessage(activeTab.id, {"message": `${action}`});
    setAction(!action)

    console.log('action', action)
   });
  }, [action]);

  useEffect(() => {

    if(action) {
      activateExtension();
    } 
  }, [action, activateExtension])


  return (
    <div className="App">
      <header className="App-header">
        <button id="changeColor" onClick={activateExtension} >Activate</button>
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
          Hello
        </a>
      </header>
    </div>
  );
};

export default Popup;
