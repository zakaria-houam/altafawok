var menu = document.querySelector(".bx-menu");
var list = document.querySelector(".list");

menu.addEventListener("click",function(){
    list.classList.toggle('show');
}
);
list.addEventListener("click",function(){
    list.classList.toggle('show');
}
);
function scrollHeader(){
    const nav = document.getElementById('header')
    
    if(this.scrollY >= 100) nav.classList.add('shadow'); else nav.classList.remove('shadow')
}
window.addEventListener('scroll', scrollHeader);
var primaireyears = document.querySelector(".primaire");
var classeprimaire = document.querySelector(".primary");
classeprimaire.addEventListener('click',function(){
    primaireyears.classList.toggle('show-years');
    cemyears.classList.remove('show-years');
    secondyears.classList.remove('show-years');
})


var cemyears = document.querySelector(".cem-years");
var classecem = document.querySelector(".cem");
classecem.addEventListener('click',function(){
    cemyears.classList.toggle('show-years');
    primaireyears.classList.remove('show-years');
    secondyears.classList.remove('show-years');
})


var secondyears = document.querySelector(".secondary-years");
var classesecond = document.querySelector(".secondary");
classesecond.addEventListener('click',function(){
    secondyears.classList.toggle('show-years');
    primaireyears.classList.remove('show-years');
    cemyears.classList.remove('show-years');
})