'use strict';

const dataitems = document.querySelectorAll('ul li');
const ul = document.querySelector('ul');


function compareSalary(a, b) {
  const salarya = Number(a.dataset.salary.replace('$', '').replaceAll(',', ''));
  const salaryb = Number(b.dataset.salary.replace('$', '').replaceAll(',', ''));

  return salaryb - salarya;
}
function moveToEnd(li) {
  ul.append(li);
}


const elementsArray = Array.from(dataitems);
const sortingitems = elementsArray.sort(compareSalary);

sortingitems.forEach(moveToEnd);
