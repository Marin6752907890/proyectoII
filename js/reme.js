document.getElementById('formRust').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('mensajeOk').style.display = 'block';
    this.reset();
});
const formRust = document.getElementById('formRust');

if (formRust) {
    formRust.addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('mensajeOk').style.display = 'block';
        this.reset();
    });
}