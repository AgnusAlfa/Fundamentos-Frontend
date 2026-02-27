/* Lección 5, Ejercicio 2
Crear el código de JavaScript el cual debe realizar un smooth scroll al presionar el botón «Ir
arriba» de nuestra página web.
*/

document.addEventListener('DOMContentLoaded', () => {
  const btnIrArriba = document.getElementById('scroll-top');

  if (btnIrArriba) {
    btnIrArriba.addEventListener('click', (e) => {
      e.preventDefault();
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth' //
      });
    });

    //
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        btnIrArriba.classList.add('active');
      } else {
        btnIrArriba.classList.add('active'); 
      }
    });
  }
});