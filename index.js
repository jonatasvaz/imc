function calculate() {
    var height = document.getElementById("height").value/100;
   
    var weight = document.getElementById("weight").value;
    var area = document.querySelector('#text_area')
  
    var imc = weight /  height ** 2
    var text=""
  if(imc>=19 && imc<=24){
    text="peso ideal"
  }else if(imc>=25 && imc <=29){
  text="voce esta com sobrepeso"
  }else if(imc >=30 && imc <=34){
    text="cuidado! voce está com obesidade nivel 1"
  }else if(imc>34 && imc <=39){
    text="cuidado! voce está com obesidade nivel 2"
  }else if(imc >39){
    text="cuidado! voce está com obesidade nivel 3"
  }
  else if(!imc){
  alert('digite algo')
  }
   area.innerHTML=text
  }