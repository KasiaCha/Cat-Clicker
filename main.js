/*var cat = document.getElementById('evilCat');
var _click = 0;
cat.addEventListener('click', function(){
  _click ++;
  document.getElementById('catclicks-account').innerHTML = _click;
}, false);*/

var container = document.getElementById('container');
console.log(container.children);



/* Add cat img title */

var imgContainer = document.createElement('div');
imgContainer.style.width = '80%';
imgContainer.style.display = 'flex';
imgContainer.style.flexFlow = 'row wrap';
imgContainer.style.margin = '40px auto';
imgContainer.style.border = '1px dashed yellow';
imgContainer.id = 'img-container';
container.appendChild(imgContainer);

function createImgItem() {
  var imgItem = document.createElement('div'),
      img = document.createElement('img'),
      infoWrapper = document.createElement('div');

  imgItem.style.width = '50%';
  imgItem.style.height = '100px';
  imgItem.style.display = 'flex';
  imgItem.style.alignItems = 'center';
  imgItem.style.justifyContent = 'center';
  imgItem.style.padding = '10px';
  imgItem.style.margin = '0 10px';
  imgItem.id = 'img-item';

  img.src = 'madCat.jpg';
  img.style.width = '30%';
  infoWrapper.className = 'catclicks__box';

  infoWrapper.innerHTML = '<h3>MadCat</h3>';
  infoWrapper.innerHTML = '<h3>Clicks</h3>';
  infoWrapper.innerHTML = '<h2 id="catclicks-account"></h2>';

  imgItem.appendChild(infoWrapper);
  imgItem.appendChild(img);

  return imgItem, img, infoWrapper;
}
imgContainer.appendChild(createImgItem());
imgContainer.appendChild(createImgItem());