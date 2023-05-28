function calcular(){ 
 //event.preventDefault();
  
  const nombre=document.getElementById('nombre').value;
     
  const apellido=document.getElementById('apellido').value;
   
  const correo=document.getElementById('correo').value;
     
  const cantidad=document.getElementById('cantidad').value;
     
  const categoria=document.getElementById('categoria').value;
      
  if(!nombre || !apellido  || !correo  || !cantidad || !categoria ){
    alert("Complete los campos");   
  }

    if(categoria==='estudiante'){
      total.value=parseFloat(cantidad)*200*0.2;
    }else{
      if(categoria==='trainee'){
        total.value=parseFloat(cantidad)*200*0.5;
      }else{
        total.value=parseFloat(cantidad)*200*0.85;
      }
  }
}

var btn_calcular=document.getElementById('btn_calcular');
btn_calcular.addEventListener('click',calcular);