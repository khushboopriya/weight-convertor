const input=document.querySelector('#input');
const button=document.querySelector('#convert-button');
const outputpound=document.querySelector('#pound-output');
const ouncepound=document.querySelector('#ounce-output');
const grampound=document.querySelector('#gram-output');
var pos = document.getElementById('output');

button.addEventListener('click',()=>{
    outputpound.value = input.value *2.20462;
    ouncepound.value = input.value *35.274;
    grampound.value = input.value *1000;
    pos.innerHTML = input.value *2.20462;
});



// let fillData = () => {
//     let ip =  document.getElementsById('ip');
//     let ele = document.getElementById('poundop');
    
//     ele.innerHTML = 'Hello, I am Arun';
// }