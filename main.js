let quotesList = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];
const quote = document.querySelector(".quote");
const quoteOwner = document.querySelector(".quote-owner");
const newButton = document.querySelector(".new-btn");
let lastQuote = null;
function getRandomQuote() {
  let quote;
  do {
    quote = quotesList[Math.floor(Math.random() * quotesList.length)];

  } while (lastQuote !== null && lastQuote.text === quote);
  lastQuote = quote;
  return quote;
}
function showQuote() {
  let getQuote = getRandomQuote();
  quote.textContent = getQuote.text;
  quoteOwner.textContent = getQuote.author;
}
showQuote();
newButton.addEventListener("click", () => showQuote());
