const toggleButton = document.getElementsByClassName('toggle-button')[0];
const linksOne = document.getElementsByClassName('links-1')[0];
const linksTwo = document.getElementsByClassName('links-2')[0];

toggleButton.addEventListener('click', () => {
  linksOne.classList.toggle('active');
  linksTwo.classList.toggle('active');
});
