import _ from 'lodash';
import './style.css';
import frontImage from './nina-hill-pKXPJWksvUg-unsplash.jpg';

const header = document.createElement('div');
header.classList.add('header');
document.body.appendChild(header);

function logo(location) {
const logoParent = document.createElement('div');
logoParent.classList.add('logoParent');
location.appendChild(logoParent);
const star = document.createElement('div');
star.innerHTML = "STAR";
star.classList.add('star');
logoParent.appendChild(star);
const beauty = document.createElement('div');
beauty.innerHTML = "BEAUTY";
beauty.classList.add('beauty');
logoParent.appendChild(beauty);
const supply = document.createElement('div');
supply.innerHTML = "SUPPLY";
supply.classList.add('supply');
logoParent.appendChild(supply);
}
logo(header);

const dropDownMenu = document.createElement('div');
dropDownMenu.classList.add('dropDownMenu');
document.body.appendChild(dropDownMenu);

function dropMenu(location) {
  const hair = document.createElement('div');
  hair.innerHTML = "Hair";
  hair.classList.add('hair');
  location.appendChild(hair);
  const hairProducts = document.createElement('div');
  hairProducts.innerHTML = "Haircare Products";
  hairProducts.classList.add('hairProducts');
  location.appendChild(hairProducts);
  const cosmetics = document.createElement('div');
  cosmetics.innerHTML = "Cosmetics";
  cosmetics.classList.add('cosmetics');
  location.appendChild(cosmetics);
  const skincare = document.createElement('div');
  skincare.innerHTML = "Skincare";
  skincare.classList.add('skincare');
  location.appendChild(skincare);
  const services = document.createElement('div');
  services.innerHTML = "Services";
  services.classList.add('services');
  location.appendChild(services);
  const accessories = document.createElement('div');
  accessories.innerHTML = "Accessories";
  accessories.classList.add('accessories');
  location.appendChild(accessories);
}
dropMenu(dropDownMenu);

const bodyImage = new Image();
bodyImage.src = frontImage;
bodyImage.classList.add('bodyImage');
document.body.appendChild(bodyImage);





  /*
  function logo() {
  

  const beauty = document.createElement('div');
  beauty.innerHTML = "BEAUTY";

  const supply = document.createElement('div');
  supply.innerHTML = "SUPPLY";

  return beauty;
}

document.body.appendChild(document.createElement('div'));

*/


/*

function test() {
  const i = document.createElement('div');

}
*/