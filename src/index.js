import './styles.css';
import menu from '../src/index.hbs'
import menuData from '../src/menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-control');

const body = document.querySelector('body');

const tiles = document.querySelector('#menu');

const checkLocalStorage = () => {
  const theme = localStorage.getItem('themeApplied');
  if (theme === null || theme === Theme.LIGHT) {
    localStorage.setItem('themeApplied', Theme.LIGHT)
    body.classList.add(Theme.LIGHT)
    themeSwitcher.removeAttribute('checked')
  } else if (theme == Theme.DARK) {
    body.classList.add(Theme.DARK)
    themeSwitcher.setAttribute('checked', true)
  }
}

const changeSwitcherPosition = () => {
  const switcherState = themeSwitcher.getAttribute('checked');
  if (switcherState === null) {
    themeSwitcher.setAttribute('checked', true);
    localStorage.setItem('themeApplied', Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    themeSwitcher.removeAttribute('checked');
    localStorage.setItem('themeApplied', Theme.LIGHT);
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

checkLocalStorage();
themeSwitcher.addEventListener('change', changeSwitcherPosition);

for (let element of menuData) {
  let result = menu(element);
  tiles.innerHTML += result;
}
