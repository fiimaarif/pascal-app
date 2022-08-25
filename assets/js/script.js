function loadGalery() {
  fetch('./assets/data/galery.json')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('data-galery').innerHTML = '';

      const json = JSON.stringify(data.galery);
      const result = JSON.parse(json);

      console.log(result);

      for (let i = 0; i < result.length; i++) {
        document.getElementById('data-galery').innerHTML += `
        <div class="card">
        <img src="${result[i].img}" alt="">
        <div class="card-body">
          <h4>${result[i].name}</h4>
          <p>${result[i].skill}</p>
        </div>
        </div>`;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
loadGalery();

window.onscroll = function () {
  // menu.classList.remove('menu-active');
  if (window.scrollY > 100) {
    document.querySelector('nav').classList.add('active');
  } else {
    document.querySelector('nav').classList.remove('active');
  }
};
