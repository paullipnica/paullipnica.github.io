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
                <h3>Margin</h3>
                <p>
                    Margin-Top<br>
                    Sets the top margin of an element by specifying a length or a percentage.<br>
                    <code>BODY { margin-top: 5pt; }</code>
                </p>
                
                <p>
                    Margin-Right<br>
                    Sets the right margin of an element by specifying a length or a percentage.<br>
                    <code>P.narrow { margin-right: 50%; }</code>
                </p>
                
                <p>
                    Margin-Bottom<br>
                    Sets the bottom margin of an element by specifying a length or a percentage.<br>
                    <code>DT { margin-bottom: 3em; }</code>
                </p>
                
                <p>
                    Margin-Left<br>
                    Sets the left margin of an element by specifying a length or a percentage.<br>
                    <code>ADDRESS { margin-left: 50%; }</code>
                </p>
                
                <p>
                    Margin<br>
                    Sets the margins of an element by specifying top, bottom, left and right margins -- all either specifying length or percentage.<br>
                    <code>BODY { margin: 5em; }</code> (all margins 5em)<br>
                    <code>P { margin: 2em 4em; }</code> (top & bottom 2em, left & right 4em)<br>
                    <code>DIV { margin: 1em 2em 3em 4em; }</code> (top margin 1em, right 2em, bottom 3em, left 4em)
                </p>
            </div>

            <div id="textTags2">
                <h3>Padding</h3>
                <p>
                    Padding-Top<br>
                    Describes the amount of space between the top border and the content of the selector.<br>
                    <code>P { padding-top: 20%; }</code>
                </p>
            
                <p>
                    Padding-Right<br>
                    Describes the amount of space between the right border and the content of the selector.<br>
                    <code>P { padding-right: 20px; }</code>
                </p>
            
                <p>
                    Padding-Bottom<br>
                    Describes the amount of space between the bottom border and the content of the selector.<br>
                    <code>P { padding-bottom: 5em; }</code>
                </p>
            
                <p>
                    Padding-Left<br>
                    Describes the amount of space between the left border and the content of the selector.<br>
                    <code>P { padding-left: 15pt; }</code>
                </p>
            
                <p>
                    Padding<br>
                    Shorthand for the padding-top, padding-right, padding-bottom, and padding-left properties.<br>
                    <code>BLOCKQUOTE { padding: 2em 4em 5em 4em; }</code>
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