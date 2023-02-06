const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const thisMonth = new Date().getMonth();
const thisMonthString = months[thisMonth + 2];
const nextMonthString = months[(thisMonth + 3) % months.length];

const button = `
  <button class="btn btn-red">
    <h5>30% de descuento para Marzo y Abril</h5>
  </button>
`
const discount = document.getElementById('descuento');
discount.innerHTML = button
