import React from "react";
import "tachyons";
import "./card.css";
import LazyLoad from "react-lazy-load";

class Card extends React.Component {
  render() {
    const { url, id, title, thumbnailUrl } = this.props;
    return (
      <div className="card grow bg-light-green tc dib br1 pa1 ml1">
        <LazyLoad height={600} offsetVertical={300}>
          <img
            src={thumbnailUrl}
            data-src={url}
            alt=" "
            id="image"
            style={{ borderRadius: "50%" }}
          />
        </LazyLoad>
        <div className="cardDetails">
          <p>
            {id} <br />
            {title}
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
