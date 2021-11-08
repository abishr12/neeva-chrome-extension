import React, {useEffect, useState, useCallback} from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {

  const [action, setAction] = useState(null)
  const [totalAdsOnPage, setTotalAdsOnPage] = useState(0);

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.message === "resetAdsOnPage") {
      setTotalAdsOnPage(0)
    }
    if(request.message === "totalAdsOnPage") {
      setTotalAdsOnPage(request.totalAdsOnPage)
    }
  });
  
  const activateExtension = useCallback(() => {
    chrome.tabs.query({currentWindow: true, active: true}, async function (tabs){
    const activeTab = tabs[0];
    await chrome.tabs.sendMessage(activeTab.id, {"message": `${action}`});
    chrome.action.setBadgeBackgroundColor({ color: 'red' }, () => {
      // callback
      chrome.action.setBadgeText({ tabId:activeTab.id,  text: action ? 'ON' : 'OFF' });
    });

   });
  }, [action]);

  useEffect(() => {
    if (action !== null) {
      console.log('console is activated')
      activateExtension();

    }
  }, [action, activateExtension])


  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{color: action && 'red'}}>
          Extension: {action ? 'ON' : 'OFF'}
        </h2>
        <label className="switch" onChange={() => setAction(!action)}>
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
        <h2>
          Ads On Page: {totalAdsOnPage}
        </h2>
      </header>
    </div>
  );
};

export default Popup;
