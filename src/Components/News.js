import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles=[ {
    "id": "google-news-ru",
    "name": "Google News (Russia)",
    "description": "Исчерпывающая и актуальная информация, собранная службой &quot;Новости Google&quot; со всего света.",
    "url": "https://news.google.com",
    "category": "general",
    "language": "ru",
    "country": "ru"
  },
  {
    "id": "google-news-sa",
    "name": "Google News (Saudi Arabia)",
    "description": "تغطية شاملة ومتجددة للأخبار، تم جمعها من مصادر أخبار من جميع أنحاء العالم بواسطة أخبار Google.",
    "url": "https://news.google.com",
    "category": "general",
    "language": "ar",
    "country": "sa"
  },
  {
    "id": "google-news-uk",
    "name": "Google News (UK)",
    "description": "Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.",
    "url": "https://news.google.com",
    "category": "general",
    "language": "en",
    "country": "gb"
  },
  {
    "id": "goteborgs-posten",
    "name": "Göteborgs-Posten",
    "description": "Göteborgs-Posten, abbreviated GP, is a major Swedish language daily newspaper published in Gothenburg, Sweden.",
    "url": "http://www.gp.se",
    "category": "general",
    "language": "sv",
    "country": "se"
  },
  {
    "id": "gruenderszene",
    "name": "Gruenderszene",
    "description": "Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.",
    "url": "http://www.gruenderszene.de",
    "category": "technology",
    "language": "de",
    "country": "de"
  },
  {
    "id": "hacker-news",
    "name": "Hacker News",
    "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
    "url": "https://news.ycombinator.com",
    "category": "technology",
    "language": "en",
    "country": "us"
  },
  {
    "id": "handelsblatt",
    "name": "Handelsblatt",
    "description": "Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.",
    "url": "http://www.handelsblatt.com",
    "category": "business",
    "language": "de",
    "country": "de"
  }]
  constructor(){
    super();
    console.log("hello")
    this.state={
      articles:this.articles, 
      loading:false

    }
  }
  render() {
    return (
      <div>
        <div className="container my-2 mx-2 ">
          <h2>NewsFeed-top headlines</h2>
          
          {/* <NewsItem title="newstime" description="let eat some news" /> */}
          <div className="row mx-2"  >
          {this.state.articles.map((element)=>{
         return  <div className="col-md-3"key={element.url}>
          <NewsItem  title={element.name.slice(0,10)} description={element.description.slice(0,80)} imageurl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9jQnpJ27JuQ9mMqfVbj5pwHaEH%26pid%3DApi&f=1&ipt=df7ae9b4e3e00f8b24a689a5fc26609879030373ded0e7672a5cee50ecc87cb5&ipo=images" newsurl={element.url}/>
            </div> 
          })}
         
          </div>
        </div>
      </div>
    );
  }
}

export default News;
