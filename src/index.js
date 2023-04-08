import _ from 'lodash';
import './style.css';

function logo() {
const star = document.createElement('div');
star.innerHTML = "STAR";
star.classList.add('star');
document.body.appendChild(star);
const beauty = document.createElement('div');
beauty.innerHTML = "BEAUTY";
beauty.classList.add('beauty');
document.body.appendChild(beauty);
const supply = document.createElement('div');
supply.innerHTML = "SUPPLY";
supply.classList.add('supply');
document.body.appendChild(supply);
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