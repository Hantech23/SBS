import _ from 'lodash';
import './style.css';


function logo() {
  const star = document.createElement('div');
  star.innerHTML = "STAR";
  star.classList.add('star');

  const beauty = document.createElement('div');
  beauty.innerHTML = "BEAUTY";

  const supply = document.createElement('div');
  supply.innerHTML = "SUPPLY";

  return star;
}

document.body.appendChild(logo());
/*

function test() {
  const i = document.createElement('div');

}
*/