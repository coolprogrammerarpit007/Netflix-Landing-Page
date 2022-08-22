let option1 = document.querySelector('.service1');
let option2 = document.querySelector('.service2');
let option3 = document.querySelector('.service3');

let service1 = document.querySelector('.option1');
let service2 = document.querySelector('.option2');
let service3 = document.querySelector('.price-card');

// Taking Services variables
let i1 = document.querySelector('#icon1');
let i2 = document.querySelector('#icon2');
let i3 = document.querySelector('#icon3');

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');


option1.addEventListener('click',(event) =>{
    // console.log('you click the button!!');
    
    service1.classList.remove('hidden');
    service2.classList.add('hidden');
    service3.classList.add('hidden');
    option1.style.borderBottom = "3px solid red";
    option2.style.borderBottom = "none";
    option3.style.borderBottom = "none";
})

option2.addEventListener('click',(event) =>{
    // console.log('you click the button!!');
    
    service1.classList.add('hidden');
    service2.classList.remove('hidden');
    service3.classList.add('hidden');

    option2.style.borderBottom = "3px solid red";
    option1.style.borderBottom = "none";
    option3.style.borderBottom = "none";
})

option3.addEventListener('click',(event) =>{
    // console.log('you click the button!!');
    
    service1.classList.add('hidden');
    service2.classList.add('hidden');
    service3.classList.remove('hidden');

    option3.style.borderBottom = "3px solid red";
    option2.style.borderBottom = "none";
    option1.style.borderBottom = "none";
})

// Now Adding Mouseover Event In Page


option1.addEventListener('mouseover',(e) =>{
    i1.style.color = "#fff";
    p1.style.color = "#fff";
});

option1.addEventListener('mouseout',(e) =>{
    i1.style.color = "rgb(255,255,255,0.5)";
    p1.style.color = "rgb(255,255,255,0.5)";
})

option2.addEventListener('mouseover',(e) =>{
    //option2.style.backgroundColor = "#fff";
    i2.style.color = "#fff";
    p2.style.color = "#fff";
});
option2.addEventListener('mouseout',(e) =>{
    i2.style.color = "rgb(255,255,255,0.5)";
    p3.style.color = "rgb(255,255,255,0.5)";
});
option3.addEventListener('mouseover',(e) =>{
   // option3.style.backgroundColor = "#fff";
    i3.style.color = "#fff";
    p3.style.color = "#fff";
});

option3.addEventListener('mouseout',(e) =>{
    i3.style.color = "rgb(255,255,255,0.5)";
    p3.style.color = "rgb(255,255,255,0.5)";
})
