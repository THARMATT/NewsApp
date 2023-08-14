import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // console.log("render")
    let { title, description, imageurl, newsurl,author,date } = this.props;
    return (
      <div className="my-3">
        <div class="card">
          <img
            src={
              !imageurl
                ? "https://i.imgflip.com/1bvm3a.jpg"
                : imageurl
            }
            class="card-img-top"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {!author?"unknown":author} on {date}</small></p>
            <a href={newsurl} target="blank" class="btn btn-dark">
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
