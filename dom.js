//getElementByClassName
// let items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
//getElementBytagName
let li=document.getElementsByTagName('li');
li[2].textContent='Hello2';
li[2].style.backgroundColor='green';
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}