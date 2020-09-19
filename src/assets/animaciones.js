function BtnMenu(){
  $('#navContent').toggle()
}

function MenuCollapse(){
  $('#navContent').hide()
}

function Select(){
  //const select = document.querySelector('#selection');      
  //select.classList.toggle('active');
  const opciones = document.querySelector('#opciones'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones')) { 
    if($("#opciones").hasClass("active")){
      CloseSelect()
    }
    } 
  }); 
}

function CloseSelect(){
  const opciones = document.querySelector('#opciones'); 
  opciones.classList.toggle('active'); 
}



function Selected(){
  //const select = document.querySelector('#selection');      
  //select.classList.toggle('active');
  const opciones = document.querySelector('#opcioness'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selections .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opcioness > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opcioness')) { 
    if($("#opcioness").hasClass("active")){
      CloseSelect()
    }
    } 
  }); 
}

function CloseSelects(){
  const opciones = document.querySelector('#opcioness'); 
  opciones.classList.toggle('active'); 
}