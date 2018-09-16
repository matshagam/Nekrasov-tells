export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = (name, attr) => {
  name.forEach(data => {
    data.className.includes(attr)
      ? data.classList.remove(attr)
      : data.classList.add(attr);
  });
};

export const _toggleAttribute = (name, attr) => {
  name.forEach(data => {
    data.hasAttribute(attr)
      ? data.removeAttribute(attr)
      : data.setAttribute(attr, attr);
  });
};
