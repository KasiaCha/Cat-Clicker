var container = document.getElementById('container');

/* Add cat img title */

var imgContainer = document.createElement('div');
imgContainer.style.width = '80%';
imgContainer.style.display = 'flex';
imgContainer.style.flexFlow = 'row wrap';
imgContainer.style.margin = '40px auto';
imgContainer.style.border = '1px dashed yellow';
imgContainer.id = 'img-container';
container.appendChild(imgContainer);

function createImgItem(source, title) {
  var imgItem = document.createElement('div'),
      img = document.createElement('img'),
      infoWrapper = document.createElement('div');

  imgItem.style.width = 'calc(50% - 20px)';
  imgItem.style.padding = '10px';
  imgItem.style.margin = '0 10px';
  imgItem.id = 'img-item';

  img.src =  source + '.jpg';
  img.style.width = '50%';

  infoWrapper.className = 'catclicks__box';
  infoWrapper.innerHTML = '<h2>' + title + '</h2><h3>Clicks <span class="=catclicks-account"></span></h3>';

  imgItem.appendChild(infoWrapper);
  imgItem.appendChild(img);

  return infoWrapper, img, imgItem;
}

imgContainer.appendChild(createImgItem('madCat', 'MICHU'));
imgContainer.appendChild(createImgItem('evilCat', 'GRUCHA'));


document.getElementsByTagName("img")[0].setAttribute("id", "madCat");
document.getElementsByTagName("img")[1].setAttribute("id", "evilCat");

var evil = document.getElementById('evilCat');
var mad = document.getElementById('madCat');
var eClick = 0;
var mClick = 0;

evil.addEventListener('click', function(){
  eClick ++;
  console.log();
  evil.previousSibling.lastChild.lastChild.innerHTML = eClick;
}, false);

mad.addEventListener('click', function(){
  mClick ++;
  console.log();
  mad.previousSibling.lastChild.lastChild.innerHTML = mClick;
}, false);