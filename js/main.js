// Agradecimiento de contacto
  window.onload = (function(){
    if(window.location.hash == '#gracias'){
        document.getElementById('contacto-gracias').className = 'container p-3 text-center text-success';
        window.location.href = "#contacto-gracias"
    }
    })
