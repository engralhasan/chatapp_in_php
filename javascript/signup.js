const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");


form.onsubmit = (e)=>{
  e.preventDefault();//preveting form form submitting
}

continueBtn.onclick = ()=>{
  //let's start Ajax
  let xhr = new XMLHttpRequest();//creating xml object
  xhr.open("POST", "php/signup.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        let data = xhr.response;
        if(data == "success"){

          location.href = "users.php";
            

        }else{
          errorText.textContent = data;
          errorText.style.display = "block";
          

        }
        
      }
    }

  }
  //we have to send the form data through ajax to php
  let formData = new  FormData(form);//creating new formdata objet
  xhr.send(formData);//sending the form data to php

}
