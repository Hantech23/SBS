import _ from 'lodash';
import './style.css';

function logo() {

const logoParent = document.createElement('div');
logoParent.classList.add('logoParent');
document.body.appendChild(logoParent);
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
logo();





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