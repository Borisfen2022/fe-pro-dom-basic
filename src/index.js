export const paintCards = () => {
  const elements = document.querySelectorAll('li.item');

  elements.forEach((element, index) => {
    if (index % 2 === 0) {
      element.style.backgroundColor = 'red';
    }
  });
};

export const findElement = () => {
  let element = document.querySelector('li.item').nextElementSibling;

  while (element) {
    if (element.classList.contains('likedItem')) {
      element.style.backgroundColor = 'blue';
      break;
    }

    element = element.nextElementSibling;
  }
};
