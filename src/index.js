import _ from 'lodash';
import './style.css';
import frontImage from './nina-hill-pKXPJWksvUg-unsplashmini.jpg';
import clearance1Img from './2568671.jpg';

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

  const hairMenuSub = document.createElement('div');
  hairMenuSub.classList.add('menu-sub');
  hair.appendChild(hairMenuSub);

  const hairSub = document.createElement('ul');
  hairMenuSub.appendChild(hairSub);

  const hairSub1 = document.createElement('li');
  hairSub.appendChild(hairSub1);
  const hairSub1Link = document.createElement('a');
  const hairSub1LinkText = document.createTextNode("VERA LOSA™ 8A 100% BRAZILIAN VIRGIN HAIR");
  hairSub1Link.appendChild(hairSub1LinkText);
  hairSub1Link.href = "";
  hairSub1.appendChild(hairSub1Link);
  
  const hairSub1ItemsContainer = document.createElement('div');
  hairSub1ItemsContainer.classList.add('menu-item');
  hairSub1.appendChild(hairSub1ItemsContainer);

  const hairSub1Items = document.createElement('ul');
  hairSub1ItemsContainer.appendChild(hairSub1Items);

  //Vera Losa Straight/Wavy
  const hairSub1Item1 = document.createElement('li');
  hairSub1Items.appendChild(hairSub1Item1);
  const hairSub1Item1Link = document.createElement('a');
  const hairSub1Item1LinkText = document.createTextNode("Straight");
  hairSub1Item1Link.appendChild(hairSub1Item1LinkText);
  hairSub1Item1Link.href = "";
  hairSub1Item1.appendChild(hairSub1Item1Link);

  const hairSub1Item2 = document.createElement('li');
  hairSub1Items.appendChild(hairSub1Item2);
  const hairSub1Item2Link = document.createElement('a');
  const hairSub1Item2LinkText = document.createTextNode("Wavy");
  hairSub1Item2Link.appendChild(hairSub1Item2LinkText);
  hairSub1Item2Link.href = "";
  hairSub1Item2.appendChild(hairSub1Item2Link);


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

  const hairCare = document.createElement('li');
  menuMain.appendChild(hairCare);
  const hairCareLink = document.createElement('a')
  const hairCareLinkText = document.createTextNode("Hair Care");
  hairCareLink.appendChild(hairCareLinkText);
  hairCareLink.href = "";
  hairCare.appendChild(hairCareLink);

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
  const skincareLinkText = document.createTextNode("Skin Care");
  skincareLink.appendChild(skincareLinkText);
  skincareLink.href = "";
  skincare.appendChild(skincareLink);

  const lashes = document.createElement('li');
  menuMain.appendChild(lashes);
  const lashesLink = document.createElement('a')
  const lashesLinkText = document.createTextNode("Lashes");
  lashesLink.appendChild(lashesLinkText);
  lashesLink.href = "";
  lashes.appendChild(lashesLink);

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
header.appendChild(bodyImage);

const clearance = document.createElement('h3');
clearance.innerHTML = "Clearance";
document.body.appendChild(clearance);

const clearanceArrayContainer = document.createElement('div');
clearanceArrayContainer.classList.add('array-container');
document.body.appendChild(clearanceArrayContainer);

let clearanceArray = [];

function Item(title, price, img) {
  this.title = title;
  this.price = price;
  this.img = img;
};

function addItemToArray(location, Item) {
  location.push(Item);
}

function createItemCard(location, Item) {
  const itemCard = document.createElement('div');
  const itemImage = new Image();
  itemImage.src = clearance1Img;
  itemImage.classList.add('itemImage');
  const itemTitle = document.createElement('p');
  const itemPrice = document.createElement('p');

  itemCard.classList.add('item-card');

  itemTitle.textContent = Item.title;
  itemPrice.textContent = Item.price;

  itemCard.append(itemImage);
  itemCard.append(itemTitle);
  itemCard.append(itemPrice);
  location.append(itemCard);
}

const clearance1 = new Item("IT Cosmetics: Your Skin Better Foundation + Skincare", "$30.00", clearance1Img);
addItemToArray(clearanceArray, clearance1);

function display(location, array) {
  for (let eachItem of array) {
    createItemCard(location, eachItem)
  }
}

display(clearanceArrayContainer, clearanceArray);


/*


"IT Cosmetics: Your Skin Better Foundation + Skincare"
$30.00




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