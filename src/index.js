import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');
  
  element.innerHTML = myName("Woobin");
  return element;
}
  
// document.body.appendChild(component());

function logo() {
  const element = document.createElement('div');

  element.innerHTML = "STAR BEAUTY SUPPLY";
  return element;
}

document.body.appendChild(logo());