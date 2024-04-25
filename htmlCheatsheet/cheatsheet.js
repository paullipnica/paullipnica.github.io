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
    <div class="sheetContent2">
    <div id="basicTags2">
        <h3>Links</h3>
        <p>&lt;a href="URL"&gt;clickable text&lt;/a&gt;: Creates a hyperlink</p>
        <p>&lt;a href="mailto:EMAIL_ADDRESS"&gt;: Creates a hyperlink to an email</p>
        <p>&lt;a name="NAME"&gt;&lt;/a&gt;: Creates a target location within a document</p>
        <p>&lt;a href="#NAME"&gt;clickable text&lt;/a&gt;: Creates a link to that target location</p>
        <br>
        <h3>Formatting</h3>
        <p>&lt;p&gt;&lt;/p&gt;: Creates a new paragraph</p>
        <p>&lt;br&gt;: Inserts a line break (carriage return)</p>
        <p>&lt;blockquote&gt;&lt;/blockquote&gt;: Puts content in a quote</p>
        <p>&lt;div&gt;&lt;/div&gt;: Used to format block content with CSS</p>
        <p>&lt;span&gt;&lt;/span&gt;: Used to format inline content with CSS</p>
    </div>

    <div id="textTags2">
        <h3>Lists</h3>
        <p>&lt;ul&gt;&lt;/ul&gt;: Creates an unordered list</p>
        <p>&lt;ol start="?"&gt;&lt;/ol&gt;: Creates an ordered list (start=xx, where xx is a counting number)</p>
        <p>&lt;li&gt;&lt;/li&gt;: Encompasses each list item</p>
        <p>&lt;dl&gt;&lt;/dl&gt;: Creates a definition list</p>
        <p>&lt;dt&gt;&lt;/dt&gt;: Precedes each definition term</p>
        <p>&lt;dd&gt;&lt;/dd&gt;: Precedes each definition</p>
        <br>
        <h3>Tables</h3>
        <p>&lt;table&gt; &lt;/table&gt;: Creates a table</p>
        <p>&lt;tr&gt; &lt;/tr&gt;: Sets off each row in a table</p>
        <p>&lt;td&gt; &lt;/td&gt;: Sets off each cell in a row</p>
        <p>&lt;th&gt; &lt;/th&gt;: Sets off the table header (a normal cell with bold, centered text)</p>
    </div>
</div>
    `);
}


function previousButton() {

    replaceContent(originalContent);
}


document.getElementById('nextButton').addEventListener('click', nextButton);
document.getElementById('previousButton').addEventListener('click', previousButton);
