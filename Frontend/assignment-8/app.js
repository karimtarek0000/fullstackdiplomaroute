const section = document.getElementById("section");
const btnNewQuote = document.getElementById("newQuote");

// Click on button to generate a new quote
btnNewQuote.addEventListener("click", generateNewQuote);

// Add all tags in HTML
const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
div.setAttribute("class", "quote");
p.setAttribute("id", "quote");
span.setAttribute("id", "author");

// Append in HTML
div.append(p, span);
section.append(div);

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "--Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "--Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "--Bernard M. Baruch",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "--Elbert Hubbard",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "--Mahatma Gandhi",
  },
];

function generateNewQuote() {
  const index = Math.floor(Math.random() * quotes.length + 1);
  quote.textContent = quotes[index].quote;
  author.textContent = quotes[index].author;
}
