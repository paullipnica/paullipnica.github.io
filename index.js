
function lightColor(){
document.body.style.transition = 'background-color 2s ease'; 
document.body.style.background="rgb(96,100,98,0.3)";
document.querySelectorAll('p')[0].style.color="#093F2D"
document.querySelectorAll('p')[0].style.transition = 'color 3s ease'; 
document.querySelectorAll('h1')[0].style.color="#093F2D";
document.querySelectorAll('h1')[0].style.transition = 'color 3s ease'; 
document.querySelector('.readoption').style.transition = 'color 3s ease'; 
document.querySelector('.readoption').style.color= "#093F2D"; 
document.querySelector('.navigation').style.transition = 'color 3s ease'; 
document.querySelector('.navigation').style.color= "#093F2D"; 

}
function darkColor(){
    document.body.style.transition = 'background-color 3s ease'; 
document.body.style.background="rgb(96,100,98,1)";
document.querySelectorAll('p')[0].style.color="white"
document.querySelectorAll('p')[0].style.transition = 'color 3s ease'; 
document.querySelectorAll('h1')[0].style.color="white";
document.querySelectorAll('h1')[0].style.transition = 'color 3s ease'; 
document.querySelector('.readoption').style.transition = 'color 3s ease'; 
document.querySelector('.readoption').style.color= "white"; 
document.querySelector('.navigation').style.transition = 'color 3s ease'; 
document.querySelector('.navigation').style.color= "white"; 
}

function homeButton() {
    var container = document.getElementById('emptyContent');
    var homeContainer = document.getElementById('homeContent');
    homeContainer.style.display = 'block' 
        container.style.display = 'none';
    
}

function informationButton() {
    var displayContainer = document.getElementById('emptyContent');
    var informationContainer = document.getElementById('informationContent');
    var homeContainer = document.getElementById('homeContent');
    homeContainer.style.display = 'none'
    displayContainer.innerHTML = informationContainer.innerHTML;
    displayContainer.style.display = 'block';
    informationContainer.style.display = 'none';

}

function projectsButton() {
    var displayContainer = document.getElementById('emptyContent');
    var projectsContainer = document.getElementById('projectsContent');
    var homeContainer = document.getElementById('homeContent');
    homeContainer.style.display = 'none'
    displayContainer.innerHTML = projectsContainer.innerHTML;
    displayContainer.style.display = 'block';
    projectsContainer.style.display = 'none';

}

function resourcesButton() {
    var displayContainer = document.getElementById('emptyContent');
    var resourcesContainer = document.getElementById('resourcesContent');
    var homeContainer = document.getElementById('homeContent');
    homeContainer.style.display = 'none'
    displayContainer.innerHTML = resourcesContainer.innerHTML;
    displayContainer.style.display = 'block';
    resourcesContainer.style.display = 'none';
}

function contactButton() {
    var displayContainer = document.getElementById('emptyContent');
    var contactContainer = document.getElementById('contactContent');
    var homeContainer = document.getElementById('homeContent');
    homeContainer.style.display = 'none'
    displayContainer.innerHTML = contactContainer.innerHTML;
    displayContainer.style.display = 'block';
    contactContainer.style.display = 'none';
}




