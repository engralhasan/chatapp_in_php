 const powrche = document.querySelector(".form .field input[type='password']"),
 toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = ()=>{
  if(powrche.type=="password"){
    powrche.type="text";
    toggleBtn.classList.add("active");
  }else {
    powrche.type="password";
    toggleBtn.classList.remove("active");
  }

}
