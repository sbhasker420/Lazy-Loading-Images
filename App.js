import React, { Component } from "react";
import CardList from "./Photos/CardList";

class App extends Component {
  render() {
    return (
      <div className="cardList">
        <CardList />
      </div>
    );
  }
}

export default App;

// `https://jsonplaceholder.typicode.com/photos?_limit=100&_start=${count}`
