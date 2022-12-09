let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');}


let loginForm = document.querySelector('.login')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');}


let searchForm = document.querySelector('.search')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');}


window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');}


let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');}
	
	else{document.body.classList.remove('active');}};

/*-------------------------- packages --------------------------*/

let preveiwContainer = document.querySelector('.products');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.packages .boxs .box').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
	  
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name === target){preview.classList.add('active');}})
}})

previewBox.forEach(close =>{
  close.querySelector('.btn').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';}});

/*-------------------------- pricing --------------------------*/

document.querySelectorAll('.pricing .boxs .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.pricing .show').style.display = 'block';}})
	
document.querySelector('.pricing .show .pop button').onclick = () => {
	document.querySelector('.pricing .show').style.display = 'none';}

/*-------------------------- conect --------------------------*/

document.querySelector('.contact form .btn').onclick = () => {
		document.querySelector('.contact .show').style.display = 'block';}
	
document.querySelector('.contact .show .pop button').onclick = () => {
	document.querySelector('.contact .show').style.display = 'none';}
