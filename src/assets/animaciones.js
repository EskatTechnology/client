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

function Select7(){
  const opciones = document.querySelector('#opciones7'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection7 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones7 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones7')) { 
      if($("#opciones7").hasClass("active")){
        CloseSelect7()
      }
    } 
  }); 
}

function CloseSelect7(){
  const opciones = document.querySelector('#opciones7'); 
  opciones.classList.toggle('active'); 
}


function Select8(){
  const opciones = document.querySelector('#opciones8'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection8 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones8 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones8')) { 
      if($("#opciones8").hasClass("active")){
        CloseSelect8()
      }
    } 
  }); 
}

function CloseSelect8(){
  const opciones = document.querySelector('#opciones8'); 
  opciones.classList.toggle('active'); 
}


function Select9(){
  const opciones = document.querySelector('#opciones9'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection9 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones9 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones9')) { 
      if($("#opciones9").hasClass("active")){
        CloseSelect9()
      }
    } 
  }); 
}

function CloseSelect9(){
  const opciones = document.querySelector('#opciones9'); 
  opciones.classList.toggle('active'); 
}


function Select10(){
  const opciones = document.querySelector('#opciones10'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection10 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones10 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones10')) { 
      if($("#opciones10").hasClass("active")){
        CloseSelect10()
      }
    } 
  }); 
}

function CloseSelect10(){
  const opciones = document.querySelector('#opciones10'); 
  opciones.classList.toggle('active'); 
}


function Select11(){
  const opciones = document.querySelector('#opciones11'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection11 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones11 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones11')) { 
      if($("#opciones11").hasClass("active")){
        CloseSelect11()
      }
    } 
  }); 
}

function CloseSelect11(){
  const opciones = document.querySelector('#opciones11'); 
  opciones.classList.toggle('active'); 
}


function Select12(){
  const opciones = document.querySelector('#opciones12'); 
  opciones.classList.toggle('active');   
  
  const contenidoSelect = document.querySelector('#selection12 .contenido-select');
  const hiddenInput = document.querySelector('#inputSelect');

  document.querySelectorAll('#opciones12 > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect.innerHTML = e.currentTarget.innerHTML;
      hiddenInput.value = e.currentTarget.querySelector('.texto').innerText;
      //console.log(hiddenInput.value)
    });
  });

  event.stopPropagation(); 

  $(document).one('click', function (e) { 
    if(!$(e.target).is('#opciones12')) { 
      if($("#opciones12").hasClass("active")){
        CloseSelect12()
      }
    } 
  }); 
}

function CloseSelect12(){
  const opciones = document.querySelector('#opciones12'); 
  opciones.classList.toggle('active'); 
}

