const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click' ,()=>{
    navLinks.classList.toggle('active');
});

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-btn');

//open the modal when button is clicked

openModalBtn.addEventListener('click',()=>{
    modal.style.display = 'block';
});

//close the modal when "X" clicked

closeModalBtn.addEventListener('click',()=>{
    modal.style.display = 'none';
});

//close the modal when clicking outside the modal content

window.addEventListener('click',(event)=>{
    if(event.target===modal){
        modal.style.display = 'none';
    }
});