console.log('Content script works - 11!');
console.log('Must reload extension for modifications to take effect.');

if (document.title.indexOf('Google') !== -1) {
  //Creating Elements
  const searchBar = document.querySelector('[aria-label="Search"]');
  const searchQuery = searchBar.getAttribute('value');
  searchBar.setAttribute('value', `${searchQuery} in 2021`);

  const ads = document.getElementsByClassName('uEierd');
  //   ads.map((ad) => (ad.style.backgroundColor = 'blue'));

  Array.prototype.forEach.call(ads, (ad) => {
    ad.style.backgroundColor = 'red';
    const adText = ad.getElementsByClassName('jpu5Q VqFMTc p8AiDd');
    adText[0].style.backgroundColor = 'red';
  });

  console.log('ads', ads);
}
