const header = document.querySelector('header');

header.onclick = (event) => {
  if (event.target.matches('span')) {
    event.target.style.backgroundColor = 'red';
  }

  if (event.target.matches('.container')) {
    event.target.style.backgroundColor = 'blue';
  }
};
