export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = (target1, target2, name, button = false) => {
  target1.forEach(data => {
    if (!button) {
      data.classList.toggle(name);
    } else {
      data.classList === target2
        ? data.classList.add(name)
        : data.classList.remove(name);
    }
  });
};

export const _toggleAttribute = (target, name, value, button = false) => {
  target.forEach(data => {
    if (data.hasAttribute(name)) {
      data.removeAttribute(name);
    } else {
      if (!button) {
        data.setAttribute(name, value);
      } else {
        if (data.className.includes('active')) data.setAttribute(name, value);
      }
    }
  });
};
