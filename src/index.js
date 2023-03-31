import './style.css';


function logo() {
  const star = document.createElement('div');
  star.innerHTML = "STAR";

  const beauty = document.createElement('div');
  beauty.innerHTML = "BEAUTY";

  const supply = document.createElement('div');
  supply.innerHTML = "SUPPLY";

  return star + beauty;
}

document.body.appendChild(logo());