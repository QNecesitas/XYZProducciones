const  emailToSend = "";
const existDriver = "";
const versionResponse ="";

let boton = document.getElementById('flecha');

boton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      document.querySelector('.btn-flotante').classList.add('mostrar');
    } else {
      document.querySelector('.btn-flotante').classList.remove('mostrar');
    }
  });