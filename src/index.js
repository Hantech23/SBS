import _ from 'lodash';
import './style.css';
import frontImage from './nina-hill-pKXPJWksvUg-unsplashmini.jpg';
import clearance1Img from './2568671.png';
import clearance2Img from './Scalp_Body_Scrub_Melrose_Place.jpg';
//git subtree push --prefix dist origin gh-pages

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
beauty.innerHTML = "BEAUTY SUPPLY";
beauty.classList.add('beauty-supply');
logoParent.appendChild(beauty);
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
  const hairLinkText = document.createTextNode("HAIR");
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
  const hairSub1LinkText = document.createTextNode("REMI");
  hairSub1Link.appendChild(hairSub1LinkText);
  hairSub1Link.href = "";
  hairSub1.appendChild(hairSub1Link);  

  //REMI Straight/Wavy/Curly
  const hairSub1ItemsContainer = document.createElement('div');
  hairSub1ItemsContainer.classList.add('menu-item');
  hairSub1.appendChild(hairSub1ItemsContainer);
  const hairSub1Items = document.createElement('ul');
  hairSub1ItemsContainer.appendChild(hairSub1Items);

  const hairSub1Item1 = document.createElement('li');
  hairSub1Items.appendChild(hairSub1Item1);
  const hairSub1Item1Link = document.createElement('a');
  const hairSub1Item1LinkText = document.createTextNode("STRAIGHT");
  hairSub1Item1Link.appendChild(hairSub1Item1LinkText);
  hairSub1Item1Link.href = "";
  hairSub1Item1.appendChild(hairSub1Item1Link);

  const hairSub1Item2 = document.createElement('li');
  hairSub1Items.appendChild(hairSub1Item2);
  const hairSub1Item2Link = document.createElement('a');
  const hairSub1Item2LinkText = document.createTextNode("WAVY");
  hairSub1Item2Link.appendChild(hairSub1Item2LinkText);
  hairSub1Item2Link.href = "";
  hairSub1Item2.appendChild(hairSub1Item2Link);

  const hairSub1Item3 = document.createElement('li');
  hairSub1Items.appendChild(hairSub1Item3);
  const hairSub1Item3Link = document.createElement('a');
  const hairSub1Item3LinkText = document.createTextNode("CURLY");
  hairSub1Item3Link.appendChild(hairSub1Item3LinkText);
  hairSub1Item3Link.href = "";
  hairSub1Item3.appendChild(hairSub1Item3Link);
  //VERA LOSA 8A 100% FULL LACE Wigs
  const hairSub2 = document.createElement('li');
  hairSub.appendChild(hairSub2);
  const hairSub2Link = document.createElement('a');
  const hairSub2LinkText = document.createTextNode("VERA LOSA™ 8A 100% FULL LACE WIGS");
  hairSub2Link.appendChild(hairSub2LinkText);
  hairSub2Link.href = "";
  hairSub2.appendChild(hairSub2Link);
  //Vera Straight/Wavy/Curly
  const hairSub2ItemsContainer = document.createElement('div');
  hairSub2ItemsContainer.classList.add('menu-item');
  hairSub2.appendChild(hairSub2ItemsContainer);
  const hairSub2Items = document.createElement('ul');
  hairSub2ItemsContainer.appendChild(hairSub2Items);

  const hairSub2Item1 = document.createElement('li');
  hairSub2Items.appendChild(hairSub2Item1);
  const hairSub2Item1Link = document.createElement('a');
  const hairSub2Item1LinkText = document.createTextNode("STRAIGHT");
  hairSub2Item1Link.appendChild(hairSub2Item1LinkText);
  hairSub2Item1Link.href = "";
  hairSub2Item1.appendChild(hairSub2Item1Link);

  const hairSub2Item2 = document.createElement('li');
  hairSub2Items.appendChild(hairSub2Item2);
  const hairSub2Item2Link = document.createElement('a');
  const hairSub2Item2LinkText = document.createTextNode("WAVY");
  hairSub2Item2Link.appendChild(hairSub2Item2LinkText);
  hairSub2Item2Link.href = "";
  hairSub2Item2.appendChild(hairSub2Item2Link);
  //VERA LOSA 9A 100% BRAZILIAN VIRGIN HAIR
  const hairSub3 = document.createElement('li');
  hairSub.appendChild(hairSub3);
  const hairSub3Link = document.createElement('a');
  const hairSub3LinkText = document.createTextNode("VERA LOSA™ 9A 100% BRAZILIAN VIRGIN HAIR");
  hairSub3Link.appendChild(hairSub3LinkText);
  hairSub3Link.href = "";
  hairSub3.appendChild(hairSub3Link);

  const hairSub3ItemsContainer = document.createElement('div');
  hairSub3ItemsContainer.classList.add('menu-item');
  hairSub3.appendChild(hairSub3ItemsContainer);
  const hairSub3Items = document.createElement('ul');
  hairSub3ItemsContainer.appendChild(hairSub3Items);

  const hairSub3Item1 = document.createElement('li');
  hairSub3Items.appendChild(hairSub3Item1);
  const hairSub3Item1Link = document.createElement('a');
  const hairSub3Item1LinkText = document.createTextNode("STRAIGHT");
  hairSub3Item1Link.appendChild(hairSub3Item1LinkText);
  hairSub3Item1Link.href = "";
  hairSub3Item1.appendChild(hairSub3Item1Link);
  
  const hairSub3Item2 = document.createElement('li');
  hairSub3Items.appendChild(hairSub3Item2);
  const hairSub3Item2Link = document.createElement('a');
  const hairSub3Item2LinkText = document.createTextNode("WAVY");
  hairSub3Item2Link.appendChild(hairSub3Item2LinkText);
  hairSub3Item2Link.href = "";
  hairSub3Item2.appendChild(hairSub3Item2Link);

  const hairSub3Item3 = document.createElement('li');
  hairSub3Items.appendChild(hairSub3Item3);
  const hairSub3Item3Link = document.createElement('a');
  const hairSub3Item3LinkText = document.createTextNode("CURLY");
  hairSub3Item3Link.appendChild(hairSub3Item3LinkText);
  hairSub3Item3Link.href = "";
  hairSub3Item3.appendChild(hairSub3Item3Link);
  //VERA LOSA 8A 100% BRAZILIAN VIRGIN HAIR
  const hairSub4 = document.createElement('li');
  hairSub.appendChild(hairSub4);
  const hairSub4Link = document.createElement('a');
  const hairSub4LinkText = document.createTextNode("VERA LOSA™ 8A 100% BRAZILIAN VIRGIN HAIR");
  hairSub4Link.appendChild(hairSub4LinkText);
  hairSub4Link.href = "";
  hairSub4.appendChild(hairSub4Link);

  const hairSub4ItemsContainer = document.createElement('div');
  hairSub4ItemsContainer.classList.add('menu-item');
  hairSub4.appendChild(hairSub4ItemsContainer);
  const hairSub4Items = document.createElement('ul');
  hairSub4ItemsContainer.appendChild(hairSub4Items);

  const hairSub4Item1 = document.createElement('li');
  hairSub4Items.appendChild(hairSub4Item1);
  const hairSub4Item1Link = document.createElement('a');
  const hairSub4Item1LinkText = document.createTextNode("STRAIGHT");
  hairSub4Item1Link.appendChild(hairSub4Item1LinkText);
  hairSub4Item1Link.href = "";
  hairSub4Item1.appendChild(hairSub4Item1Link);

  const hairSub4Item2 = document.createElement('li');
  hairSub4Items.appendChild(hairSub4Item2);
  const hairSub4Item2Link = document.createElement('a');
  const hairSub4Item2LinkText = document.createTextNode("WAVY");
  hairSub4Item2Link.appendChild(hairSub4Item2LinkText);
  hairSub4Item2Link.href = "";
  hairSub4Item2.appendChild(hairSub4Item2Link);
  //CROCHET BRAID
  const hairSub5 = document.createElement('li');
  hairSub.appendChild(hairSub5);
  const hairSub5Link = document.createElement('a');
  const hairSub5LinkText = document.createTextNode("CHROCHET BRAID");
  hairSub5Link.appendChild(hairSub5LinkText);
  hairSub5Link.href = "";
  hairSub5.appendChild(hairSub5Link);

  const hairSub5ItemsContainer = document.createElement('div');
  hairSub5ItemsContainer.classList.add('menu-item');
  hairSub5.appendChild(hairSub5ItemsContainer);
  const hairSub5Items = document.createElement('ul');
  hairSub5ItemsContainer.appendChild(hairSub5Items);

  const hairSub5Item1 = document.createElement('li');
  hairSub5Items.appendChild(hairSub5Item1);
  const hairSub5Item1Link = document.createElement('a');
  const hairSub5Item1LinkText = document.createTextNode("CHROCHET HAIR");
  hairSub5Item1Link.appendChild(hairSub5Item1LinkText);
  hairSub5Item1Link.href = "";
  hairSub5Item1.appendChild(hairSub5Item1Link);

  const hairSub5Item2 = document.createElement('li');
  hairSub5Items.appendChild(hairSub5Item2);
  const hairSub5Item2Link = document.createElement('a');
  const hairSub5Item2LinkText = document.createTextNode("PRE-STRETCHED CHROCHET HAIR");
  hairSub5Item2Link.appendChild(hairSub5Item2LinkText);
  hairSub5Item2Link.href = "";
  hairSub5Item2.appendChild(hairSub5Item2Link);

  const hairSub5Item3 = document.createElement('li');
  hairSub5Items.appendChild(hairSub5Item3);
  const hairSub5Item3Link = document.createElement('a');
  const hairSub5Item3LinkText = document.createTextNode("LOCS");
  hairSub5Item3Link.appendChild(hairSub5Item3LinkText);
  hairSub5Item3Link.href = "";
  hairSub5Item3.appendChild(hairSub5Item3Link);

  const hairSub5Item4 = document.createElement('li');
  hairSub5Items.appendChild(hairSub5Item4);
  const hairSub5Item4Link = document.createElement('a');
  const hairSub5Item4LinkText = document.createTextNode("TWISTS");
  hairSub5Item4Link.appendChild(hairSub5Item4LinkText);
  hairSub5Item4Link.href = "";
  hairSub5Item4.appendChild(hairSub5Item4Link);


  //HAIR CARE
  const hairCare = document.createElement('li');
  menuMain.appendChild(hairCare);
  const hairCareLink = document.createElement('a')
  const hairCareLinkText = document.createTextNode("HAIR CARE");
  hairCareLink.appendChild(hairCareLinkText);
  hairCareLink.href = "";
  hairCare.appendChild(hairCareLink);
  
  const hairCareMenuSub = document.createElement('div');
  hairCareMenuSub.classList.add('menu-sub');
  hairCare.appendChild(hairCareMenuSub);

  const hairCareSub = document.createElement('ul');
  hairCareMenuSub.appendChild(hairCareSub);
  
  //PROFESSIONAL HAIR CARE
  const hairCareSub1 = document.createElement('li');
  hairCareSub.appendChild(hairCareSub1);
  const hairCareSub1Link = document.createElement('a');
  const hairCareSub1LinkText = document.createTextNode("PROFESSIONAL HAIR CARE");
  hairCareSub1Link.appendChild(hairCareSub1LinkText);
  hairCareSub1Link.href = "";
  hairCareSub1.appendChild(hairCareSub1Link);

  const hairCareSub1ItemsContainer = document.createElement('div');
  hairCareSub1ItemsContainer.classList.add('menu-item');
  hairCareSub1.appendChild(hairCareSub1ItemsContainer);
  const hairCareSub1Items = document.createElement('ul');
  hairCareSub1ItemsContainer.appendChild(hairCareSub1Items);

  const hairCareSub1Item1 = document.createElement('li');
  hairCareSub1Items.appendChild(hairCareSub1Item1);
  const hairCareSub1Item1Link = document.createElement('a');
  const hairCareSub1Item1LinkText = document.createTextNode("AMIKA");
  hairCareSub1Item1Link.appendChild(hairCareSub1Item1LinkText);
  hairCareSub1Item1Link.href = "";
  hairCareSub1Item1.appendChild(hairCareSub1Item1Link);

  const hairCareSub1Item2 = document.createElement('li');
  hairCareSub1Items.appendChild(hairCareSub1Item2);
  const hairCareSub1Item2Link = document.createElement('a');
  const hairCareSub1Item2LinkText = document.createTextNode("MATRIX");
  hairCareSub1Item2Link.appendChild(hairCareSub1Item2LinkText);
  hairCareSub1Item2Link.href = "";
  hairCareSub1Item2.appendChild(hairCareSub1Item2Link);

  const hairCareSub1Item3 = document.createElement('li');
  hairCareSub1Items.appendChild(hairCareSub1Item3);
  const hairCareSub1Item3Link = document.createElement('a');
  const hairCareSub1Item3LinkText = document.createTextNode("BIOLAGE");
  hairCareSub1Item3Link.appendChild(hairCareSub1Item3LinkText);
  hairCareSub1Item3Link.href = "";
  hairCareSub1Item3.appendChild(hairCareSub1Item3Link);

  const hairCareSub1Item4 = document.createElement('li');
  hairCareSub1Items.appendChild(hairCareSub1Item4);
  const hairCareSub1Item4Link = document.createElement('a');
  const hairCareSub1Item4LinkText = document.createTextNode("AG HAIR");
  hairCareSub1Item4Link.appendChild(hairCareSub1Item4LinkText);
  hairCareSub1Item4Link.href = "";
  hairCareSub1Item4.appendChild(hairCareSub1Item4Link);

  const hairCareSub1Item5 = document.createElement('li');
  hairCareSub1Items.appendChild(hairCareSub1Item3);
  const hairCareSub1Item5Link = document.createElement('a');
  const hairCareSub1Item5LinkText = document.createTextNode("REDKEN");
  hairCareSub1Item5Link.appendChild(hairCareSub1Item5LinkText);
  hairCareSub1Item5Link.href = "";
  hairCareSub1Item5.appendChild(hairCareSub1Item5Link);
  //NATURAL SHAMPOOS
  const hairCareSub2 = document.createElement('li');
  hairCareSub.appendChild(hairCareSub2);
  const hairCareSub2Link = document.createElement('a');
  const hairCareSub2LinkText = document.createTextNode("NATURAL SHAMPOOS");
  hairCareSub2Link.appendChild(hairCareSub2LinkText);
  hairCareSub2Link.href = "";
  hairCareSub2.appendChild(hairCareSub2Link);

  const cosmetics = document.createElement('li');
  menuMain.appendChild(cosmetics);
  const cosmeticsLink = document.createElement('a')
  const cosmeticsLinkText = document.createTextNode("COSMETICS");
  cosmeticsLink.appendChild(cosmeticsLinkText);
  cosmeticsLink.href = "";
  cosmetics.appendChild(cosmeticsLink);

  const skincare = document.createElement('li');
  menuMain.appendChild(skincare);
  const skincareLink = document.createElement('a')
  const skincareLinkText = document.createTextNode("SKIN CARE");
  skincareLink.appendChild(skincareLinkText);
  skincareLink.href = "";
  skincare.appendChild(skincareLink);

  const lashes = document.createElement('li');
  menuMain.appendChild(lashes);
  const lashesLink = document.createElement('a')
  const lashesLinkText = document.createTextNode("LASHES");
  lashesLink.appendChild(lashesLinkText);
  lashesLink.href = "";
  lashes.appendChild(lashesLink);

  const beautyServices = document.createElement('li');
  menuMain.appendChild(beautyServices);
  const beautyServicesLink = document.createElement('a')
  const beautyServicesLinkText = document.createTextNode("BEAUTY SERVICES");
  beautyServicesLink.appendChild(beautyServicesLinkText);
  beautyServicesLink.href = "";
  beautyServices.appendChild(beautyServicesLink);

  const accessories = document.createElement('li');
  menuMain.appendChild(accessories);
  const accessoriesLink = document.createElement('a')
  const accessoriesLinkText = document.createTextNode("ACCESSORIES");
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
clearance.innerHTML = "CLEARANCE";
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
  itemImage.src = Item.img;
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

const clearance1 = new Item("IT COSMETICS: YOUR SKIN BETTER FOUNDATION + SKINCARE", "$30.00", clearance1Img);
addItemToArray(clearanceArray, clearance1);
const clearance2 = new Item("OUAI: SCALP & BODY SCRUB", "$40.00", clearance2Img);
addItemToArray(clearanceArray, clearance2);

function display(location, array) {
  for (let eachItem of array) {
    createItemCard(location, eachItem)
  }
}

display(clearanceArrayContainer, clearanceArray);

//FOOTER
const footer = document.createElement('div');
footer.classList.add('footer');
document.body.appendChild(footer);
const footerLogo = document.createElement('div');
footerLogo.classList.add('footer-logo');
footerLogo.innerHTML = "© 2023 STAR BEAUTY SUPPLY, All rights reserved."
footer.appendChild(footerLogo);









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