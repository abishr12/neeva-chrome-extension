import React, {useEffect, useState, useCallback} from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {

  const [action, setAction] = useState(null)


  // toggle on and off - https://stackoverflow.com/questions/5557641/how-can-i-reset-div-to-its-original-state-after-it-has-been-modified-by-java
  // Toolbar Image - https://neilpatel.com/blog/chrome-extension/ 
  // https://dev.to/paulasantamaria/chrome-extensions-adding-a-badge-644
  
  const activateExtension = useCallback(() => {
    chrome.tabs.query({currentWindow: true, active: true}, async function (tabs){
    var activeTab = tabs[0];
    await chrome.tabs.sendMessage(activeTab.id, {"message": `${action}`});

    console.log('action', action)
   });
  }, [action]);

  useEffect(() => {
      activateExtension();
  }, [action, activateExtension])


  return (
    <div className="App">
      <header className="App-header">
        {/* <button id="changeColor" onClick={() => setAction(!action)} >Activate</button> */}
        <label class="switch" onChange={() => setAction(!action)}>
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
      </header>
    </div>
  );
};

export default Popup;
