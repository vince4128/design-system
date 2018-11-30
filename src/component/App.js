import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <svg xmlns="http://www.w3.org/2000/svg" className="display-none"><symbol id="icon-tag" viewBox="0 0 24 24"><title>tag</title><g><path fill="currentColor" d="M22.707,12.293l-11-11C11.52,1.106,11.265,1,11,1H2C1.448,1,1,1.448,1,2v9c0,0.265,0.105,0.52,0.293,0.707 l11,11C12.488,22.903,12.744,23,13,23s0.512-0.098,0.707-0.293l9-9C23.098,13.317,23.098,12.684,22.707,12.293z M7,9 C5.895,9,5,8.105,5,7c0-1.105,0.895-2,2-2s2,0.895,2,2C9,8.105,8.105,9,7,9z"/></g></symbol></svg>

        <h1>Hello</h1>
        <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <h4>Hello</h4>
        <h5>Hello</h5>

        <hr/>
          <svg class="icon icon--xl"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
          <svg class="icon icon--lg"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
          <svg class="icon icon--md"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
          <svg class="icon icon--sm"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
          <svg class="icon icon--xs"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
          
          <p class="icon-text-aligner">
            <svg class="icon"><use href="#icon-tag" xlinkHref="#icon-tag"/></svg>
            <span>This icon inherits the text color and size.</span>
          </p>
        <hr/>

        <div class="example1-grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
        </div>

        <hr/>

        <div class="flex-grid example2-grid">
          <div class="col col--9 col--md-12">1</div>
          <div class="col col--3 col--md-12">2</div>
          <div class="col col--3 col--md-12">3</div>
          <div class="col col--9 col--md-12">4</div>
        </div>

        <hr/>

        <div class="example3-grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>

        <hr/>

        <div class="example4-grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

      </div>
    );
  }
}

export default App;
