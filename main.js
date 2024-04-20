

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

// var frontend=document.querySelector(".frontend");
// var backend=document.querySelector(".backend");
// var dsa=document.querySelector(".dsa");
// backend.classList.add("hidden");
// dsa.classList.add("hidden");


// var skillbuttons=document.querySelectorAll(".skill-btn");

// skillbuttons.forEach(item=>{
//   item.addEventListener("click",()=>{
//     console.log("this");
//     // var frontend=document.querySelector(".frontend");
//     // var backend=document.querySelector(".backend");
//     // var dsa=document.querySelector(".dsa");
//     if(item.innerHTML==="frontend"){
//       frontend.setAttribute("hidden","hidden");
//       backend.classList.add("hidden");
//       dsa.classList.add("hidden");
//     }
//     else if (item.innerHTML==="backend") {
//       frontend.classList.add("hidden");
//       backend.classList.remove("hidden");
//       dsa.classList.add("hidden");
//     } else {
//       frontend.classList.add("hidden");
//       backend.classList.add("hidden");
//       dsa.classList.remove("hidden");
//     }
//   })

// });

document.getElementById("defaultOpen").click();


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop + 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// window.addEventListener('resize', adjustColumns);

// function adjustColumns() {
//   const screenWidth = window.innerWidth;
//   const gridItems = document.querySelectorAll('.grid-item');
//   let numColumns;

//   if (screenWidth < 900) {
//     numColumns = 2;
//   } else {
//     // Default to 4 columns
//     numColumns = 4;
//   }

//   const columnWidth = (100 / numColumns) - 20; // 20px gap between columns
//   gridItems.forEach(item => {
//     item.style.flex = `1 1 calc(${columnWidth}% - 20px)`;
//     item.style.maxWidth = `calc(${columnWidth}% - 20px)`;
//   });
// }

// // Initial call to adjustColumns function
// adjustColumns();
