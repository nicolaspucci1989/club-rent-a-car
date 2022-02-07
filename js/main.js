const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const thisMonth = new Date().getMonth();
const button = `
  <button class="btn btn-red">
    <h5>30% de descuento para ${months[thisMonth + 1]} y ${months[(thisMonth + 2) % months.length]}</h5>
  </button>
`
const discount = document.getElementById('descuento');
discount.innerHTML = button
