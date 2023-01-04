function wordCount(value) {
    value = value.replace(/^\s+|\s+$/g, '');
    if (value == '') return 0;
    return value.split(/\s+/).length;
}

function letterCount(value) {
    let letterCount = 0;
    for (let i = 0;i < value.length; i++) {
        letterCount++;
    }
    return letterCount;
}

let text = document.getElementById('textarea');
let word = document.getElementById('word-count');
let letter = document.getElementById('letter-count');

text.addEventListener('input', function() {
    word.textContent = wordCount(text.value);
    letter.textContent = letterCount(text.value);
})