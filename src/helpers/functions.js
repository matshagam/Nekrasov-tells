export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = (target, name) => {
  target.forEach(data => {
    data.classList.toggle(name);
  });
};

export const _toggleAttribute = (target1, target2, name, value) => {
  target1.forEach(data => {
    if (data.innerHTML === target2) {
      data.setAttribute(name, value);
    } else {
      data.removeAttribute(name);
    }
  });
};

export const FILTER = [
  { id: 1, name: 'Везде' },
  { id: 2, name: 'Книги' },
  { id: 3, name: 'Периодика' }
];
export const VIEW_MODE = [{ id: 1, name: 'Список' }, { id: 2, name: 'Плитка' }];
