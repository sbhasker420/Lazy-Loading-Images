import React from "react";
import Card from "./Card";
import "./card.css";
import { debounce } from "lodash";
import "tachyons";

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      subUrl: []
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    const targets = document.getElementsByClassName("card");
    let pageBottom = document.getElementById("cardList").scrollHeight;
    console.log("pageBottom" + pageBottom);

    for (const key in targets) {
      if (targets.hasOwnProperty(key)) {
        const element = targets[key].getBoundingClientRect();

        if (
          element.top >= 0 &&
          element.bottom < document.documentElement.clientHeight
        ) {
          const url = targets[key].firstChild.getAttribute("data-src");
          targets[key].firstChild.setAttribute("src", url);
          targets[key].firstChild.setAttribute("style", "border-radius:1%;");
        }
      }
    }
  }

  loadMoreData() {
    while (true) {
      //const targets = document.getElementsByClassName("card");
      let pageBottom = document.getElementById("cardList").scrollHeight;
      console.log(pageBottom);
      if (pageBottom > document.documentElement.clientHeight + 50) break;
      // document.body.insertAdjacentHTML("beforeend" , this.setState({photos:}) );
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", debounce(this.handler, 200), true);
    // s
  }

  render() {
    const { photos } = this.props;
    return (
      <div id="cardList">
        {photos.map((photo, i) => {
          return (
            <div key={i}>
              <Card
                url={photo.url}
                thumbnailUrl={photo.thumbnailUrl}
                id={photo.id}
                title={photo.title}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;

//  || (element.top > 0 &&
//     element.top < document.documentElement.clientHeight &&
//     element.bottom > document.documentElement.clientHeight) ||
//   (element.top < 0 &&
//     element.bottom < document.documentElement.clientHeight)
