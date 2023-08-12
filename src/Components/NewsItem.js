import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // console.log("render")
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div class="card" style={{ width: "18rem"}}>
          <img 
            src={
              !imageurl
                ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.u5FXGNMuIWLUWBSkLPxTXwHaGP%26pid%3DApi&f=1&ipt=211458d26f20ec400fc3a7d2d642f85b230cf4a31dfbfb860b6aef1ba12d0c5d&ipo=images"
                : imageurl
            }
            class="card-img-top"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}...</p>
            <a href={newsurl} target="blank" class="btn btn-primary">
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
