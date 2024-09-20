const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;

modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
});
