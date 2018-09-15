export const URL = 'http://job.nekrasovka.ru/search';

export const _toggleClass = name => {
  name.forEach(data => {
    data.className.includes('active')
      ? data.classList.remove('active')
      : data.classList.add('active');
  });
};

export const _toggleAttribute = name => {
  name.forEach(data => {
    data.hasAttribute('disabled')
      ? data.removeAttribute('disabled')
      : data.setAttribute('disabled', 'disabled');
  });
};
