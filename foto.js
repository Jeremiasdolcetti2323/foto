var foto=document.getElementById("imagen");
var contador=0;
foto.addEventListener("click",function(){
if(contador==0){
    foto.style.height="250px";
    foto.style.width="250px";
    contador=contador+1;
    return;
};
if(contador==1){
    foto.style.height="60px";
    foto.style.width="60px";
    contador=0;
    return;
};
});




