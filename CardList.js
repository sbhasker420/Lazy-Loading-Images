import React from "react";
import Card from "./Card";
import "./card.css";
import InfiniteScroll from "react-infinite-scroller";
import "tachyons";

class CardList extends React.Component {
  state = {
    list: [],
    count: 0,
    limit: 30
  };
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    const { list, limit, count } = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${count}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: [...list, ...data],
          count: count + limit,
          limit: 10
        });
      });
  };

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div
        style={{ height: "600px", overflow: "auto" }}
        ref={ref => (this.scrollParentRef = ref)}
      >
        <InfiniteScroll
          pageStart={0}
          hasMore={true}
          useWindow={false}
          initialLoad={false}
          getScrollParent={() => this.scrollParentRef}
          loadMore={this.fetchData}
        >
          <div>
            {list.map((item, i) => {
              return (
                <Card
                  key={i}
                  url={item.url}
                  thumbnailUrl={item.thumbnailUrl}
                  id={item.id}
                  title={item.title}
                />
              );
            })}
          </div>
        </InfiniteScroll>
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

// loadMoreData() {
//   while (true) {
//     //const targets = document.getElementsByClassName("card");
//     let pageBottom = document.getElementById("cardList").scrollHeight;
//     console.log(pageBottom);
//     if (pageBottom > document.documentElement.clientHeight + 50) break;
//     // document.body.insertAdjacentHTML("beforeend" , this.setState({photos:}) );
//   }
// }

//Return statement
// (
//   <div id="cardList">
// {photos.map((photo, i) => {
//   return (
//     <div key={i}>
//       <Card
//         url={photo.url}
//         thumbnailUrl={photo.thumbnailUrl}
//         id={photo.id}
//         title={photo.title}
//       />
//     </div>
//   );
// })}
//   </div>
// );

// pageStart={0}
//         loadMore={this.loadItems.bind(this)}
//         hasMore={this.state.hasMoreItems}
//         loader={loader}

//  handler() {
// if (
//   window.innerHeight + document.documentElement.scrollTop ===
//   document.documentElement.offsetHeight
// ) {
//   this.fetchData();
// }
//  }
