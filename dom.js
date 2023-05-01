//getElementByClassName
// let items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
//getElementBytagName
// let li=document.getElementsByTagName('li');
// li[2].textContent='Hello2';
// li[2].style.backgroundColor='green';
// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }
// let items=document.querySelector('.list-group-item:nth-child(2)');
// items.style.backgroundColor='green';
// let listItem=document.querySelector('.list-group-item:nth-child(3)');
// listItem.style.visibility='hidden';
// let items1=document.querySelectorAll('list-group-item:nth-child(2)');
//items1.style.backgroundColor='green';
let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';

}