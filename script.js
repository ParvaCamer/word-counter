let text = document.getElementById('textarea');
let word = document.getElementById('word-count');
let letter = document.getElementById('letter-count');

function wordCount(value) {
    value = value.replace(/^\s+|\s+$/g, '');
    if (value == '') return 0;
    return value.split(/\s+/).length;
}

function letterCount(value) {
    let letterCount = 0;
    for (let i = 0; i < value.length; i++) {
        letterCount++;
    }
    return letterCount;
}

const recognition = new webkitSpeechRecognition();
const startButton = document.getElementById('start');
startButton.addEventListener('click', (event) => {
    event.preventDefault();
    recognition.lang = 'en-US';
    recognition.continuous = true;

    recognition.onresult = (event) => {
        const accumulatedWords = [];
        for (const result of event.results)
            accumulatedWords.push(`${result[0].transcript}`);
        console.log(accumulatedWords)
        text.innerHTML = accumulatedWords;
    }

    if (startButton.classList.contains('listening')) recognition.stop();
    else recognition.start();

    startButton.classList.toggle('listening');
});

document.getElementById('stop').addEventListener('click', (event) => {
    startButton.classList.remove('listening');
    event.preventDefault();
    recognition.stop();
})

text.addEventListener('input', function () {
    word.textContent = wordCount(text.value);
    letter.textContent = letterCount(text.value);
})