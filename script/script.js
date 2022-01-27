const formulario = document.getElementById('form')

formulario.addEventListener('submit', correo)
function correo(e) {
    e.preventDefault()
    const form = new FormData(this)
    console.log(form.get('email'))
}
