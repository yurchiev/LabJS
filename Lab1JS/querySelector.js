const button = document.querySelector('#changeTextButton');
const h2 = document.querySelector('#changeableText');
const paragraphs = document.querySelectorAll('p');

let textChanged = false;

button.addEventListener('click', function() {
    if (textChanged) {
        h2.textContent = 'I can be changed!';
    } else {
        h2.textContent = 'Text Changed!';
    }
    textChanged = !textChanged;
});

h2.addEventListener('mouseover', function() {
    h2.style.color = 'red';
});

h2.addEventListener('mouseout', function() {
    h2.style.color = '';
});

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('keydown', function(event) {
        alert('Key pressed in paragraph: ' + event.key);
    });
}
