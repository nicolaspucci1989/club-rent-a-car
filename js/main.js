const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
  'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const thisMonth = new Date().getMonth();
const button = `
  <button class="btn btn-red">
    <h5>30% OFF</h5>
  </button>
`

const discount = document.getElementById('descuento');

discount.innerHTML = button

