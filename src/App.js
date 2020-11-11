import React, { useState } from 'react';
import "./styles.css";

const source = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

//random function
const randome = (max) => Math.floor(Math.random() * Math.floor(max));

//load data
let data;
async function fetchData(src){
  let response = await fetch(src, { headers: { Accept: 'application/json' }})
  data = await response.json();
  const index = randome(data.quotes.length);

  document.getElementById('quote-wrapper').nextElementSibling.innerHTML = data.quotes[index].quote
  document.getElementById('author').innerHTML = `- ${ data.quotes[index].author }`
}
fetchData(source)

//main app
const App = () => {
  let [ state, handleState ] = useState({ quote: '', author: '', color: '', textColor: '' });

  function randomQuoteHandler(){
    if(data){
      const index = randome(data.quotes.length);
      const str = randome(randome(200)) + "," + randome(randome(200)) + "," + randome(randome(200));
      handleState({ ...state, textcolor: '245,245,245' })
      setTimeout(()=>handleState({ quote: data.quotes[index].quote, author: "- " + data.quotes[index].author, color: str, textcolor: str }), 500)
    }
  }

  return (
    <div id="quote-box" style={{ backgroundColor:`rgb(${state.color})` }}>
      <div id="container">
        <p id="text" style={{ color:`rgb(${state.textcolor})` }}>
        <span id="quote-wrapper"><i className="fas fa-quote-left"></i></span><span>{ state.quote }</span>
        </p>
        <p id="author" style={{ color:`rgb(${state.textcolor})` }}>{ state.author }</p>
        <div id="button-div">
          <div id="button12">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
              <button id="button1" style={{ backgroundColor:`rgb(${state.color})` }}><i className="fab fa-twitter"></i></button>
            </a>
            <a href="tg://resolve?domain=steveblobs666" target="_blank">
              <button id="button2" style={{ backgroundColor:`rgb(${state.color})` }}><i className="fab fa-telegram-plane"></i></button>
            </a>
          </div>
          <button id="new-quote" onClick={ randomQuoteHandler } style={{ backgroundColor:`rgb(${state.color})` }}>New quote</button>
        </div>
      </div>
      <p id="by">by Slavik Merkulov</p>
    </div>);
}

export default App;