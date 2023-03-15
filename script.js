function creaclave(){
  var cClave='';
  var nAleatorio=0;
  var cMinus="a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z";
  var cMayus="A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,Y,Z";
  var cCaracts=".,;,:,@,+,-,$";
  var cNumeros="0,1,2,3,4,5,6,7,8,9";
  var aOpciones=Array();
  var nLongi=0+document.getElementById("longitud").value;
  
  if (document.getElementById("cbox1").checked) aOpciones.push(cMinus.split(","));
  if (document.getElementById("cbox2").checked) aOpciones.push(cMayus.split(","));
  if (document.getElementById("cbox3").checked) aOpciones.push(cCaracts.split(","));
  if (document.getElementById("cbox4").checked) aOpciones.push(cNumeros.split(","));
    if (aOpciones.length==0){
      alert("Debe de seleccionar algún tipo de caracteres a incluir.")
    }else{
      if (nLongi>5){
        // Creando clave.
        for (i=0;i<nLongi;i++){
           nAleatorio= aleatorio(0,aOpciones.length-1);
          cClave+=aOpciones[nAleatorio][aleatorio(0,aOpciones[nAleatorio].length-1)];
        }
          document.getElementById("resultado").value=cClave;
        document.getElementById("salida").style.opacity=1;
      }else{
        alert("Tiene que introducir la longitud de la clave (entre 6 y 100)");
      }
    }
}

function aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min) + min);
}