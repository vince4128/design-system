import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <h4>Hello</h4>
        <h5>Hello</h5>
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
