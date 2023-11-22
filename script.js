// const search=()=>{
//     let filter = document.getElementById('myInput').ariaValueMax.toUpperCase();
//     let mydiv = document.getElementsByClassName('pro');
//     let sdiv = document.getElementsByClassName('description');
//     for(var i= 0;i<description.length; i++){
//         let h5 = description[i].getElementByTagName('h5')[0];
//     }
// }


const bar =document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
const close = document.getElementById('close');
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}