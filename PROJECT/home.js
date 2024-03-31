function lightColor(){
document.body.style.transition = 'background-color 2s ease'; 
document.body.style.background="rgb(96,100,98,0.3)";
document.querySelectorAll('p')[0].style.color="black"
document.querySelectorAll('p')[0].style.transition = 'color 2s ease'; 
document.querySelector('.container').style.transition = 'border-color 2s ease'; 
document.querySelector('.container').style.borderColor = '#00735C'; 

}
function darkColor(){
    document.body.style.transition = 'background-color 2s ease'; 
document.body.style.background="rgb(96,100,98,0.9)";
document.querySelectorAll('p')[0].style.color="white"
document.querySelectorAll('p')[0].style.transition = 'color 2s ease'; 
document.querySelector('.container').style.transition = 'border-color 2s ease'; 
document.querySelector('.container').style.borderColor = '#00735C'; 
}