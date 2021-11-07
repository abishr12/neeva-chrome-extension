console.log('This is the background page.');
console.log('Put the background scripts here.');
console.log('adham bishr');

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
