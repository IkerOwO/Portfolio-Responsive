const button = document.getElementById('Btn');
const myDiv = document.getElementById('logos');

let divVisible = false;

button.addEventListener('click', () => {
  if (!divVisible) {
    myDiv.style.display = 'block';
    divVisible = true;
  } else {
    myDiv.style.display = 'none';
    divVisible = false;
  }
    });