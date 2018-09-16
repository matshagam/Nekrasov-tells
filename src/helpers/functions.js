export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = (target, name, action) => {
  target.forEach(data => {
    switch (action) {
      case 'remove':
        data.classList.remove(name);
        break;
      case 'add':
        data.classList.add(name);
        break;
      case 'toggle':
        data.classList.toggle(name);
        break;
      default:
        break;
    }
  });
};

export const _toggleAttribute = (target, name, value) => {
  target.forEach(data => {
    if (data.hasAttribute(name)) {
      data.removeAttribute(name);
    } else {
      if (data.tagName !== 'BUTTON') {
        data.setAttribute(name, value);
      } else {
        if (data.className.includes('active')) data.setAttribute(name, value);
      }
    }
  });
};
