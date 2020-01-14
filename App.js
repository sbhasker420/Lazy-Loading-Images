import React, { Component } from "react";
import CardList from "./Photos/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      count: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { count, photos } = this.state;
    let newList = [...photos];
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=30&_start=${count}`
    )
      .then(response => response.json())
      .then(data => {
        newList.push(...data);
        this.setState({ photos: newList });
      });
  }
  render() {
    return (
      <div className="cardList">
        <CardList photos={this.state.photos} style={{}} />
      </div>
    );
  }
}

export default App;
