var randomNumber;
var timeOut = window.setInterval(printQuote, 15000); //sets a timer to change quotes after 15000ms, runs printQuote(). 
var quotes = [
{
  quote: "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
  source: "Arnold Schwarzenegger",
  citation: "From a 1982 interview with Boston Globe journalist Marian Christy.",
  year: "1982",
  tag: ["Inspiration"]
},
{
  quote: "When you're young, you look at television and think, There's a conspiracy. The networks have conspired to dumb us down. But when you get a little older, you realize that's not true. The networks are in business to give people exactly what they want. That's a far more depressing thought. Conspiracy is optimistic! You can shoot the bastards! We can have a revolution! But the networks are really in business to give people what they want. It's the truth.",
  source: "Steve Jobs",
  citation: "Interview in WIRED magazine",
  year: "1996"
},
{
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source: "Mahatma Ghandi",
  citation: "pre-dating Gandhi, attributed to Isidore of Seville",
  year: "c. 560 – 636",
  tag: ["Inspiration", "Life"],
},
{
  quote: "This above all: To thine own self be true.",
  source: "William Shakespeare" 
},
{
  quote: "A journey of a thousand leagues begins beneath one’s feet.",
  source: "Lao Tzu",
  tag: ["Inspiration"]
},
{
  quote: 'But man is not made for defeat.A man can be destroyed but not defeated.',
  source: 'Ernest Hemingway',
  tag: ["Inspiration"]

},
{
  quote: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
  source: 'Oscar Wilde',
  tag: ["Beauty","Life", "Love"]
}
];


// returns a random quote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


//Gets random number from 0 - 255
function randomRGB(){
var rgb = Math.floor(Math.random() * 256 ); //returns 0-255
return rgb;
}

//Changes Background color to random rgb value generated by random RGB
function changeBG() {
  var rgbValue = 'rgb(' + randomRGB() + 
  ',' + randomRGB() + ',' + randomRGB() + ')'; //returns numbers in rgb(num,num,num) format 
  document.body.style.backgroundColor = rgbValue;
}

//changes the color of the background of the change quote button. 
function changeButtonBg() {
  var buttonBGColor = document.getElementById('loadQuote')
  var rgbValue = 'rgb(' + randomRGB() +
    ',' + randomRGB() + ',' + randomRGB() + ')'; //returns numbers in rgb(num,num,num) format 
  buttonBGColor.style.backgroundColor = rgbValue;
}

//prints the quote returned in getRandomQuote()
function printQuote() {
  var ranQuote = getRandomQuote();
  var htmlString = '';
  var quoteBox = document.getElementById('quote-box');

  
  htmlString += '<p class="quote">' + ranQuote.quote +  '</p> <p class="source">' + ranQuote.source;
  if (ranQuote.citation) {
   htmlString += '<span class="citation">' + ranQuote.citation + '</span>';
  }
  if (ranQuote.year) {
    htmlString += '<span class="year">' + ranQuote.year + '</span></p>';
  }
  if (ranQuote.tag) {
    htmlString += '<p> <span class="tag">' + ranQuote.tag.join(", ") + '</span>' + '</p>';
  }
  quoteBox.innerHTML = htmlString;
  changeBG();
  changeButtonBg();
};


//listens for click on load another quote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


