console.log('Content script works - 9019!');
console.log('Must reload extension for modifications to take effect.');

const activateExtension = (change) => {
  console.log('activated', change);
  if (document.title.indexOf('Google') !== -1) {
    const searchBar = document.querySelector('[aria-label="Search"]');
    const searchQuery = searchBar.getAttribute('value');
    const textAds = document.getElementsByClassName('uEierd');
    const carouselAds = document.getElementsByClassName('DUkiH cu-container');

    if (change === 'true') {
      //Change elements
      searchBar.setAttribute('value', `${searchQuery} in 2021`);

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
    } else if (change === 'false') {
      //Restore Elements
      const searchBar = document.querySelector('[aria-label="Search"]');
      const searchQuery = searchBar.getAttribute('value');
      const restoredQuery = searchQuery.split(' ').slice(0, -2).join(' ');
      searchBar.setAttribute('value', `${restoredQuery}`);

      Array.prototype.forEach.call(textAds, (ad) => {
        ad.style.backgroundColor = '';
        const adText = ad.getElementsByClassName('jpu5Q VqFMTc p8AiDd');
        adText[0].style.backgroundColor = '';
      });

      Array.prototype.forEach.call(carouselAds, (ad) => {
        ad.style.backgroundColor = '';
        const adText = ad.getElementsByClassName('eroAL VqFMTc p8AiDd');
        adText[0].style.backgroundColor = '';
      });
    }
  }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('request message', request.message);
  activateExtension(request.message);
});
