import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 38,
      articles: [
        {
          source: { id: null, name: "India Today" },
          author: "Ankita Garg",
          title:
            "With iOS 17, Apple likely to change the way you hang up calls on iPhones and access other things - India Today",
          description:
            'iOS 17 update: Apple has repositioned the iconic red "end call" button and mixed it with other buttons. The change will likely affect your daily life as long time iPhone users will initially tap on wrong buttons to hang up calls.',
          url: "https://www.indiatoday.in/technology/news/story/with-ios-17-apple-likely-to-change-the-way-you-hang-up-calls-on-iphones-and-access-other-things-2419577-2023-08-11",
          urlToImage:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/iphone-representationalpng-011411-16x9.png?VersionId=djIH8q13DvYWfUl8Jk4Omir7WdLAgVo6",
          publishedAt: "2023-08-11T08:24:21Z",
          content:
            "Apple's forthcoming iOS 17 has caught the attention of everyone, as images from its beta versions unveil a range of intriguing alterations. The upcoming iOS version is said to add functions for the n… [+2430 chars]",
        },
        {
          source: { id: "the-hindu", name: "The Hindu" },
          author: "The Hindu",
          title:
            "Bill introduced to remove CJI from panel to select Election Commissioners - The Hindu",
          description: null,
          url: "https://www.thehindu.com/news/national/bill-moved-to-remove-cji-from-panel-to-select-election-commissioners/article67180873.ece",
          urlToImage: null,
          publishedAt: "2023-08-11T08:07:00Z",
          content: null,
        },
        {
          source: { id: null, name: "NDTV News" },
          author: "NDTV Sports Desk",
          title:
            "Rohit Sharma Finally Reveals Why He and Virat Kohli Aren't Playing T20Is For India - NDTV Sports",
          description:
            "Rohit Sharma and Virat Kohli didn't feature in a single T20I for India this year.",
          url: "https://sports.ndtv.com/cricket/you-didnt-ask-about-him-rohit-sharma-stumps-reporter-on-virat-kohli-question-4288845",
          urlToImage:
            "https://c.ndtvimg.com/2023-08/fqvdg2gg_virat-kohli-and-rohit-sharma-bcci_625x300_11_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          publishedAt: "2023-08-11T07:43:00Z",
          content:
            "India's two superstar batters, Virat Kohli and Rohit Sharma, haven't played a single T20 international for the national team this year. With Hardik Pandya leading the Indian troops in the shortest fo… [+1487 chars]",
        },
        ],
      },
  ];
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=e37432349ec34b10a8255b5b818f769f"
    let data=await fetch(url);
    let pastData=await data.json()
    console.log(pastData);
    this.setState({articles:pastData.articles})
   }
  render() {
    return (
      <div>
        <div className="container ">
          <h2>NewsFeed-top headlines</h2>

          {/* <NewsItem title="newstime" description="let eat some news" /> */}
          <div className="row mx-2">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem 
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description.slice(0, 80) : " "
                    }
                    imageurl={element.urlToImage ? element.urlToImage : ""}
                    newsurl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
