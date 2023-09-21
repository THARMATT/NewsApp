import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Home from "./Home";
export class News extends Component {
  static defaultProps={
country:'in',
pageSize:10,
category: 'entertainment'
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
      totalResults:0,
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
  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1})
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e37432349ec34b10a8255b5b818f769f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let pastData = await data.json();
  console.log(pastData);
  this.setState({
    articles: this.state.articles.concat(pastData.articles),
    totalResults: pastData.totalResults,
  });
  }
  render() {
    return (
      <div>
      <Home/>
          <div className="text-center my-4 mt-5 p-4 "><h1>NewsFeed-Lets Know Something Crispy</h1></div>

          {/* <NewsItem title="newstime" description="let eat some news" /> */}
          <div className="container">
          <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={this.state.articles.length!=this.state.totalResults}
    // loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
    
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
            })} </div></InfiniteScroll></div>
         
          
        </div>
        
       
     
    );
  }
}

export default News;
