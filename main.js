

var typed = new Typed('.text', {
    strings: ["Web developer","ML engineer","Software Developer","Student"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });


var inputs=document.querySelectorAll(".contact-info");


inputs.forEach(ipt =>{
  ipt.addEventListener("focus",()=>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("non-empt");
  });

  ipt.addEventListener("blur",()=>{
    if(ipt.value == ""){
      ipt.parentNode.classList.remove("non-empt");
    }
    ipt.parentNode.classList.remove("focus");
  });
});