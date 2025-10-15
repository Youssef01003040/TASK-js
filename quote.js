// HTML
var btnInput = document.getElementById("New-quote");
var quoteTextInput = document.getElementById("quote-text");
var quoteAuthorInput = document.getElementById("quote-author");

var quotes = [
  {
    text: "You miss 100% of the shots you don't take.",
    author: "--Wayne Gretzy",
  },
  {
    text: "Do not take life too seriously. You will not get out alive.",

    author: "--Elbert Hubbard",
  },
  {
    text: "Resentment is like drinking poison and waiting for your enemies to die.",

    author: "--Nelson Mandela",
  },
  
];


function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];

  quoteTextInput.textContent = '"' + randomQuote.text + '"';
quoteAuthorInput.textContent = " " + randomQuote.author;

 }

