let url = document.getElementById('url');
let form = document.getElementById('form');
let search = document.getElementById('search');
const call = (url, data) => {
  fetch(url);
}

search.addEventListener('click', function() {
  if(url.value.length >= 10 (url.value.includes('youtube') || url.value.includes('youtu.be')) && url.value.includes('/watch?v=')) {
  } else {
    url.classList.add('invalid');
  }
});
url.addEventListener('keypress', function() {
  url.classList.remove('invalid');
});
form.addEventListener('submit', function(e) {
  e.preventDefault();
})