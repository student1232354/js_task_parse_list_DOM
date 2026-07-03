'use strict';

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items).map(function(li) {
    const clearsalary = Number(li.dataset.salary.replace('$', '').replaceAll(',', ''));

    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: clearsalary,
      age: Number(li.dataset.age)
    };
  });
}

function compareSalary(a, b) {
  const salarya = Number(a.dataset.salary.replace('$', '').replaceAll(',', ''));
  const salaryb = Number(b.dataset.salary.replace('$', '').replaceAll(',', ''));

  return salaryb - salarya;
}

function sortlist(list) {
  const items = list.querySelectorAll('li');
  const sorteditems = Array.from(items).sort(compareSalary);

  sorteditems.forEach(function(li) {
    list.append(li);
  });
}

const ul = document.querySelector('ul');

const likeresult = getEmployees(ul);

sortlist(ul);
