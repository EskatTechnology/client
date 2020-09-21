function BtnMenu(){
  $('#navContent').toggle()
}

function MenuCollapse(){
  $('#navContent').hide()
}

function Select1(){
  //const select = document.querySelector('#selection');      
  //select.classList.toggle('active');
  const opciones = document.querySelector('#opciones1'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection1 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones1 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones1')) { 
      if($("#opciones1").hasClass("active")){
        CloseSelect1()
      }
    } 
  }); 
}

function CloseSelect1(){
  const opciones = document.querySelector('#opciones1'); 
  opciones.classList.toggle('active'); 
}

function Select2(){
  const opciones = document.querySelector('#opciones2'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection2 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones2 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones2')) { 
      if($("#opciones2").hasClass("active")){
        CloseSelect2()
      }
    } 
  }); 
}

function CloseSelect2(){
  const opciones = document.querySelector('#opciones2'); 
  opciones.classList.toggle('active'); 
}


function Select3(){
  const opciones = document.querySelector('#opciones3'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection3 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones3 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones3')) { 
      if($("#opciones3").hasClass("active")){
        CloseSelect3()
      }
    } 
  }); 
}

function CloseSelect3(){
  const opciones = document.querySelector('#opciones3'); 
  opciones.classList.toggle('active'); 
}

function Select4(){
  const opciones = document.querySelector('#opciones4'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection4 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones4 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones4')) { 
      if($("#opciones4").hasClass("active")){
        CloseSelect4()
      }
    } 
  }); 
}

function CloseSelect4(){
  const opciones = document.querySelector('#opciones4'); 
  opciones.classList.toggle('active'); 
}


function Select5(){
  const opciones = document.querySelector('#opciones5'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection5 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones5 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones5')) { 
      if($("#opciones5").hasClass("active")){
        CloseSelect5()
      }
    } 
  }); 
}

function CloseSelect5(){
  const opciones = document.querySelector('#opciones5'); 
  opciones.classList.toggle('active'); 
}

function Select6(){
  const opciones = document.querySelector('#opciones6'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection6 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones6 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones6')) { 
      if($("#opciones6").hasClass("active")){
        CloseSelect6()
      }
    } 
  }); 
}

function CloseSelect6(){
  const opciones = document.querySelector('#opciones6'); 
  opciones.classList.toggle('active'); 
}





