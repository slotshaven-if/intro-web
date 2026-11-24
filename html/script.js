const headers = document.querySelectorAll('h1');
// Add a click event listener to each <h1> element
headers.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('clicked-class');
  });
});