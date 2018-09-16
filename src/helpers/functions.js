export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = (target, name) => {
  target.forEach(data => {
    data.classList.toggle(name);
  });
};

export const _toggleAttribute = (target1, target2, name, value) => {
  target1.forEach(data => {
    if (data.classList === target2) {
      data.setAttribute(name, value);
    } else {
      data.removeAttribute(name);
    }
  });
};
