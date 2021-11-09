const activateExtension = (change) => {
  const changeFunction = (element, className, color) => {
    element.style.backgroundColor = color;
    const adText = element.getElementsByClassName(className);
    if (adText.length) {
      adText[0].style.backgroundColor = color;
    }
  };
  if (document.title.indexOf('Google') !== -1) {
    const searchBar = document.querySelector('[aria-label="Search"]');
    const searchQuery = searchBar.getAttribute('value');
    const textAds = document.getElementsByClassName('uEierd');
    const carouselAds = document.getElementsByClassName('DUkiH cu-container');

    if (change === 'true') {
      searchBar.setAttribute('value', `${searchQuery} in 2021`);

      Array.prototype.forEach.call(textAds, (ad) =>
        changeFunction(ad, 'jpu5Q VqFMTc p8AiDd', 'red')
      );

      Array.prototype.forEach.call(textAds, (ad) =>
        changeFunction(ad, 'eroAL VqFMTc p8AiDd', 'red')
      );
      const totalAdsOnPage = textAds.length + carouselAds.length;

      chrome.runtime.sendMessage({
        totalAdsOnPage,
        message: 'totalAdsOnPage', // or whatever you want to send
      });
    } else if (change === 'false') {
      //Restore Elements
      const searchBar = document.querySelector('[aria-label="Search"]');
      const searchQuery = searchBar.getAttribute('value');
      const restoredQuery = searchQuery.split(' ').slice(0, -2).join(' ');
      searchBar.setAttribute('value', `${restoredQuery}`);

      Array.prototype.forEach.call(textAds, (ad) =>
        changeFunction(ad, 'jpu5Q VqFMTc p8AiDd', '')
      );

      Array.prototype.forEach.call(textAds, (ad) =>
        changeFunction(ad, 'eroAL VqFMTc p8AiDd', '')
      );

      chrome.runtime.sendMessage({
        message: 'resetAdsOnPage', // or whatever you want to send
      });
    }
  }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('request', request);
  activateExtension(request.message);
});
