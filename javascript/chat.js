const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input_field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault();//preveting form form submitting
  }

sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();//creating xml object
  xhr.open("POST", "php/insert-chat.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        inputField.value = "";
        scrollToBotton();

     
        
        
      }
    }

  }
  //we have to send the form data through ajax to php
  let formData = new  FormData(form);//creating new formdata objet
  xhr.send(formData);//sending the form data to php

}

chatBox.onmouseenter = ()=>{
  chatBox.classList.add("active");

}

chatBox.onmouseleave = ()=>{
  chatBox.classList.remove("active");

}


setInterval(()=>{
    let xhr = new XMLHttpRequest();//creating xml object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
           let data = xhr.response;
           chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){
              scrollToBotton();

            }
          
             
        }
      }
  
    }
     //we have to send the form data through ajax to php
  let formData = new  FormData(form);//creating new formdata objet
  xhr.send(formData);//sending the form data to php
  
 }, 500);


 function scrollToBotton(){
   chatBox.scrollTop = chatBox.scrollHeight;
 }