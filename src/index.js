import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import $ from 'jquery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

let top;
let bottom;

class DogeMeme extends React.Component{

  render(){
    return (
      <div class="bg-img-doge-meme container" style={{height: (window.innerHeight - document.getElementById('inputs').offsetHeight) + 'px'}}>
        <div class="flex-start col-12 text-center font-impact py-3 text-uppercase" id="top">
          {top}
        </div>
        <div class="flex-end col-12 text-center font-impact py-3 text-uppercase" id="bottom">
          {bottom}
        </div>
      </div>
    );
    // return null;
  }
}

class InputsMeme extends React.Component{

  insertText(e)
  {
    // console.log(e.target.value);
    var target = e.target.getAttribute('data-target');
    var value = e.target.value;
    target === "top" ? top = value : bottom = value;
    ReactDOM.render(
      <DogeMeme/>,
      document.getElementById('root')
    );
  }

  render(){
    return(
      <div class="container-fluid">
        <div class="col-6 px-2 py-1">
          <input type="text" class="col-12" placeholder="Top" id="txtTop" data-target="top" onChange={this.insertText}/>
        </div>
        <div class="col-6 px-2 py-1">
          <input type="text" class="col-12" placeholder="Bottom" id="txtBottom" data-target="bottom" onChange={this.insertText}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <InputsMeme/>,
  document.getElementById('inputs')
);

ReactDOM.render(
  <DogeMeme/>,
  document.getElementById('root')
);
