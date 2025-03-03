function showAlert() {
    alert("Hello world from Macbook i cannot wait to see how the world look one day when Ai takes over ");
}

const sentences = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Believe you can, and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Your only limit is your mind. Push past it, and anything is possible",
    "Difficult roads often lead to beautiful destinations. Keep going."
];

const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

console.log(randomSentence);