import React from 'react';
import "./styles.css";

const arr = [
  {text:'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.', author:'- Mae Jemison'},
  {text:'The only person you are destined to become is the person you decide to be.', author:'- Ralph Waldo Emerson'},
  {text:'The best time to plant a tree was 20 years ago. The second best time is now.', author:'- Chinese Proverb'},
  {text:'Certain things catch your eye, but pursue only those that capture the heart.', author:'- Ancient Indian Proverb'},
  {text:'Everything you’ve ever wanted is on the other side of fear.', author:'- George Addair'},
  {text:'Every strike brings me closer to the next home run.', author:'- Babe Ruth'},
  {text:'I would rather die of passion than of boredom.', author:'- Vincent van Gogh'},
  {text:'Life shrinks or expands in proportion to one’s courage.', author:'- Anais Nin'},
  {text:'Teach thy tongue to say, “I do not know,” and thous shalt progress.', author:'- Maimonides'},
  {text:'The best revenge is massive success.', author:'- Frank Sinatra'},
  {text:'Our lives begin to end the day we become silent about things that matter.', author:'- Martin Luther King Jr.'},
  {text:'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.', author:'- Johann Wolfgang von Goethe'},
  {text:'Build your own dreams, or someone else will hire you to build theirs.', author:'- Farrah Gray'},
  {text:'I am not a product of my circumstances. I am a product of my decisions.', author:'- Stephen Covey'},
  {text:'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.', author:'- John Lennon'},
  {text:'Happiness is not something readymade. It comes from your own actions.', author:'- Chinese Proverb'},
  {text:'When I let go of what I am, I become what I might be.', author:'- Lao Tzu'},
  {text:'Do what you can, where you are, with what you have.', author:'- Teddy Roosevelt'},
  {text:'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.', author:'- Oprah Winfrey'},
  {text:'Life is not measured by the number of breaths we take, but by the moments that take our breath away.', author:'- Maya Angelou'},
];



class MyComp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text: '', 
      author: '',
      color: '0,0,0',
      textcolor: '0,0,0'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    function ran(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const index = ran(arr.length);
    const str = ran(150) + "," + ran(150) + "," + ran(150);
    this.setState({color:str, textcolor:'245,245,245'});

    setTimeout(() => this.setState({textcolor:str}), 500);
    setTimeout(() => this.setState({text: arr[index].text, author: arr[index].author}), 500);
  }
  
  componentWillMount(){
    this.handleClick();
  }

  render(){
    return (
    <div id="quote-box" style={{backgroundColor:"rgb("+this.state.color+")"}}>
      <div id="white-container">
        <p id="text" style={{color:"rgb("+this.state.textcolor+")"}}><span id="quote-wrapper"><i class="fas fa-quote-left"></i></span>{this.state.text}</p>
        <p id="author" style={{color:"rgb("+this.state.textcolor+")"}}>{this.state.author}</p>
        <div id="button-div">
          <div id="button12">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><button id="button1" style={{backgroundColor:"rgb("+this.state.color+")"}}><i className="fab fa-twitter"></i></button></a>
            <a href="tg://resolve?domain=steveblowjobs666" target="_blank"><button id="button2" style={{backgroundColor:"rgb("+this.state.color+")"}}><i className="fab fa-telegram-plane"></i></button></a>
          </div>
          <button id="new-quote" onClick={this.handleClick} style={{backgroundColor:"rgb("+this.state.color+")"}}>New quote</button>
        </div>
      </div>
      <p id="by">by Slava Merkulov</p>
    </div>);
  }
}


const App = () => {
  return (
    <MyComp/>
  );
}

export default App;