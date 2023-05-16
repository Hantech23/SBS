import _ from 'lodash';
import './style.css';
import frontImage from './nina-hill-pKXPJWksvUg-unsplashmini.jpg';

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


const nav = document.createElement('nav');
header.appendChild(nav);



function dropMenu(location) {
  const container = document.createElement('div');
  container.classList.add('container');
  nav.appendChild(container);
  const menuMain = document.createElement('ul');
  menuMain.classList.add('menu-main');
  container.appendChild(menuMain);

  const hair = document.createElement('li');
  menuMain.appendChild(hair);
  const hairLink = document.createElement('a');
  const hairLinkText = document.createTextNode("Hair");
  hairLink.appendChild(hairLinkText);
  hairLink.href = "";
  hair.appendChild(hairLink);
  
  /*
  const hairCategories = document.createElement('ul');
  hairCategories.classList.add('hairCategories');
  hair.appendChild(hairCategories);
  const hairCategory1 = document.createElement('li');
  hairCategory1.innerHTML = "VERA LOSA™ 8A 100% BRAZILIAN VIRGIN HAIR";
  hairCategories.appendChild(hairCategory1);
  const hairCategory1Item1 = document.createElement('li');
  hairCategory1Item1.innerHTML = "Straight";
  hairCategory1.appendChild(hairCategory1Item1);
  const hairCategory1Item2 = document.createElement('li');
  hairCategory1Item2.innerHTML = "Wavy";
  hairCategory1.appendChild(hairCategory1Item2);
  */

  const hairProducts = document.createElement('li');
  menuMain.appendChild(hairProducts);
  const hairProductsLink = document.createElement('a')
  const hairProductsLinkText = document.createTextNode("Hair Products");
  hairProductsLink.appendChild(hairProductsLinkText);
  hairProductsLink.href = "";
  hairProducts.appendChild(hairProductsLink);

  const cosmetics = document.createElement('li');
  menuMain.appendChild(cosmetics);
  const cosmeticsLink = document.createElement('a')
  const cosmeticsLinkText = document.createTextNode("Cosmetics");
  cosmeticsLink.appendChild(cosmeticsLinkText);
  cosmeticsLink.href = "";
  cosmetics.appendChild(cosmeticsLink);

  const skincare = document.createElement('li');
  menuMain.appendChild(skincare);
  const skincareLink = document.createElement('a')
  const skincareLinkText = document.createTextNode("Skincare");
  skincareLink.appendChild(skincareLinkText);
  skincareLink.href = "";
  skincare.appendChild(skincareLink);

  const beautyServices = document.createElement('li');
  menuMain.appendChild(beautyServices);
  const beautyServicesLink = document.createElement('a')
  const beautyServicesLinkText = document.createTextNode("Beauty Services");
  beautyServicesLink.appendChild(beautyServicesLinkText);
  beautyServicesLink.href = "";
  beautyServices.appendChild(beautyServicesLink);

  const accessories = document.createElement('li');
  menuMain.appendChild(accessories);
  const accessoriesLink = document.createElement('a')
  const accessoriesLinkText = document.createTextNode("Accessories");
  accessoriesLink.appendChild(accessoriesLinkText);
  accessoriesLink.href = "";
  accessories.appendChild(accessoriesLink);
}
dropMenu(nav);


const bodyImage = new Image();
bodyImage.src = frontImage;
bodyImage.classList.add('bodyImage');
document.body.appendChild(bodyImage);

/*
//BEAUTY SERVICES
const beautyServicesParent = document.createElement('div');
beautyServicesParent.classList.add('beautyServicesParent');
document.body.appendChild(beautyServicesParent);
const beautyServices = document.createElement('div');
beautyServices.innerHTML = "Beauty Services";
beautyServices.classList.add('beautyServices');
beautyServicesParent.appendChild(beautyServices);
const beautyServicesItems = document.createElement('div');
beautyServicesItems.classList.add('beatyServicesItems');
beautyServicesParent.appendChild(beautyServicesItems);
const eyebrowTrim = document.createElement('div');
eyebrowTrim.innerHTML = "Eyebrow Trim";
eyebrowTrim.classList.add('eyebrowTrim');
beautyServicesItems.appendChild(eyebrowTrim);
const eyebrowMakeup = document.createElement('div');
eyebrowMakeup.innerHTML = "Eyebrow Makeup";
beautyServicesItems.appendChild(eyebrowMakeup);
const lash = document.createElement('div');
lash.innerHTML = "Lash Extensions";
lash.classList.add('lash');
beautyServicesItems.appendChild(lash);
const indvLash = document.createElement('div');
indvLash.innerHTML = "Individual Lash Extensions";
beautyServicesItems.appendChild(indvLash);


//FOOTER
const footer = document.createElement('div');








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