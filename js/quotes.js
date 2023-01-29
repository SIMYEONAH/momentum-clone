const quotes = [
  {
    quote: "A word after a word after a word is power. ",
    author: "Margaret Atwood",
  },
  {
    quote: "Think before you speak. Read before you think. ",
    author: "Fran Lebowitz",
  },
  {
    quote: "We read to know we are not alone. ",
    author: "C.S. Lewis",
  },
  {
    quote: "Once you learn to read, you will be forever free. ",
    author: "Frederick Douglass",
  },
  {
    quote: "Nothing endures but change. ",
    author: "Frederick Douglass",
  },
  {
    quote: "Rome is not built in a day. ",
    author: "Ann Patchett",
  },
  {
    quote: "Better the last smile than the first laughter. ",
    author: "Cicero",
  },
  {
    quote: "A room without books is like a body without a soul. ",
    author: "Cicero",
  },
  {
    quote: "Reading is an exercise in empathy; an exercise in walking in someone else's shoes for a while. ",
    author: "Malorie Blackman",
  },
  {
    quote: "Although there is a long way to go, such progress is significant.",
    author: "C.S. Lewis",
  },

  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const  todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




