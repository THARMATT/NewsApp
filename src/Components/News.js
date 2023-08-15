import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
country:'in',
pageSize:8,
category: 'sports'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: [],
      loading: false,
      page: 3,
    };
   
  }
  async updatenews(){
    console.log("cdm");
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e37432349ec34b10a8255b5b818f769f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pastData = await data.json();
    console.log(pastData);
    this.setState({
      articles: pastData.articles,
      totalResults: pastData.totalResults,
    });
  }
  async componentDidMount() {
    this.updatenews()
    // console.log("cdm");
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e37432349ec34b10a8255b5b818f769f&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let pastData = await data.json();
    // console.log(pastData);
    // this.setState({
    //   articles: pastData.articles,
    //   totalResults: pastData.totalResults,
    // });
  }

  handlePrevClick = async () => {

    this.setState({page:this.state.page-1})
    this.updatenews()
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e37432349ec34b10a8255b5b818f769f&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let pastData = await data.json();
    // console.log(pastData);
    // // this.setState({  });

    // this.setState({ articles: pastData.articles, page: this.state.page - 1 });
  };
  handleNextClick = async () => {
    this.setState({page:this.state.page+1})
    this.updatenews()
    // console.log("next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e37432349ec34b10a8255b5b818f769f&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let pastData = await data.json();
    //   console.log(pastData);
    //   // this.setState({  });

    //   this.setState({ articles: pastData.articles, page: this.state.page + 1 });
    // }
  };
  render() {
    return (
      <div>
        <div className="container ">
          <div className="text-center my-4"><h1>NewsFeed-Lets Know Something Crispy</h1></div>

          {/* <NewsItem title="newstime" description="let eat some news" /> */}
          <div className="row mx-2">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description.slice(0,88) : " "
                    }
                    imageurl={element.urlToImage ? element.urlToImage : ""}
                    newsurl={element.url ? element.url : ""}
                    author={element.author} date={element.publishedAt}

                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button disabled={ (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
