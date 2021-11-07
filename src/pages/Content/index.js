console.log('Content script works - 9009!');
console.log('Must reload extension for modifications to take effect.');

const activateExtension = (change) => {
  console.log('activated');
  if (document.title.indexOf('Google') !== -1) {
    //Creating Elements
    const searchBar = document.querySelector('[aria-label="Search"]');
    const searchQuery = searchBar.getAttribute('value');
    searchBar.setAttribute('value', `${searchQuery} in 2021`);

    const textAds = document.getElementsByClassName('uEierd');

    const carouselAds = document.getElementsByClassName('DUkiH cu-container');

    Array.prototype.forEach.call(textAds, (ad) => {
      ad.style.backgroundColor = 'red';
      const adText = ad.getElementsByClassName('jpu5Q VqFMTc p8AiDd');
      adText[0].style.backgroundColor = 'red';
    });

    Array.prototype.forEach.call(carouselAds, (ad) => {
      ad.style.backgroundColor = 'red';
      const adText = ad.getElementsByClassName('eroAL VqFMTc p8AiDd');
      adText[0].style.backgroundColor = 'red';
    });
  }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('request message', request.message);
  if (request.message === 'true') {
    activateExtension(request.message);
  }
});
