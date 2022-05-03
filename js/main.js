const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const thisMonth = new Date().getMonth();
const thisMonthString = months[thisMonth];
const nextMonthString = months[(thisMonth + 1) % months.length];

const button = `
  <button class="btn btn-red">
    <h5>30% de descuento para ${thisMonthString} y ${nextMonthString}</h5>
  </button>
`
const discount = document.getElementById('descuento');
discount.innerHTML = button


const titleContent = `30% off ${thisMonthString} y ${nextMonthString} | Club Rent a Car - Alquiler de Autos en Bariloche, Villa La Angostura, San Martin de los andes`

const title = document.querySelector('head > title').innerHTML = titleContent
