function wordCount(value) {
    value = value.replace(/^\s+|\s+$/g, '');
    if (value == '') return 0;
    return value.split(/\s+/).length;
}

let input = document.getElementById('text-input');
let word = document.getElementById('word-count');

input.addEventListener('input', function() {
    word.textContent = wordCount(input.value);
})