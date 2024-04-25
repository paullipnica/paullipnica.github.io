function lightColor(){
    document.body.style.transition = 'background-color 2s ease'; 
    document.body.style.background="rgb(96,100,98,0.3)";
    document.querySelectorAll('p')[0].style.color="#093F2D"
    document.querySelectorAll('p')[0].style.transition = 'color 3s ease'; 
    document.querySelectorAll('h1')[0].style.color="#093F2D";
    document.querySelectorAll('h1')[0].style.transition = 'color 3s ease'; 
    document.querySelector('.readoption').style.transition = 'color 3s ease'; 
    document.querySelector('.readoption').style.color= "#093F2D"; 
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
}

var originalContent = null;

function replaceContent(newContent) {
    var container = document.querySelector('.SHEET');

    if (container) {
        if (!originalContent) {
            originalContent = container.innerHTML;
            document.getElementById('cheatsheetHeader1').style.display = 'block';
            document.getElementById('cheatsheetHeader2').style.display = 'none';
        }

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        var newContainer = document.createElement('div');
        newContainer.classList.add('container2');
        newContainer.style.display = 'block';

        newContainer.innerHTML = newContent;

        container.appendChild(newContainer);

        if (newContent === originalContent) {
            document.getElementById('cheatsheetHeader1').style.display = 'block';
            document.getElementById('cheatsheetHeader2').style.display = 'none';
        } else {
            document.getElementById('cheatsheetHeader1').style.display = 'none';
            document.getElementById('cheatsheetHeader2').style.display = 'block';
        }

    }
}

function nextButton() {
    replaceContent(`
        <div class="sheetContent2" >
            <div id="basicTags2" >
                <h3>Array Methods</h3>
                <code>reverse()</code><br>
                Reverse the order of the elements in an array<br><br>
                <code>shift()</code><br>
                Remove the first element of an array<br><br>
                <code>slice()</code><br>
                Pulls a copy of a portion of an array into a new array<br><br>
                <code>sort()</code><br>
                Sorts elements alphabetically<br><br>
                <code>splice()</code><br>
                Adds elements in a specified way and position<br><br>
                <code>toString()</code><br>
                Converts elements to strings<br><br>
                <code>unshift()</code><br>
                Adds a new element to the beginning<br><br>
                <code>valueOf()</code><br>
                Returns the primitive value of the specified object<br><br>
            </div>

            <div id="textTags2">
                <h3>Loops</h3>
                <p>
                    Loops are used to execute a block of code repeatedly until a certain condition is met.<br>
                    <code>
                        for (before loop; condition for loop; execute after loop) {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;// what to do during the loop<br> 
                        }<br><br></code>
                    <code>for<br></code>
                    The most common way to create a loop in JavaScript<br><br>
                    <code>while<br></code>
                    Sets up conditions under which a loop executes<br><br>
                    <code>do while<br></code>
                    Similar to the while loop, however, it executes at least once and performs a check at the end to see if the condition is met to execute again<br><br>
                    <code>break<br></code>
                    Used to stop and exit the cycle at certain conditions<br><br>
                    <code>continue<br></code>
                    Skip parts of the cycle if certain conditions are met<br><br>
                </p>
            </div>
        </div>
    `);
}

function previousButton() {
    replaceContent(originalContent);
}

document.getElementById('nextButton').addEventListener('click', nextButton);
document.getElementById('previousButton').addEventListener('click', previousButton);