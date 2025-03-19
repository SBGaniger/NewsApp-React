import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    document.title = "NewsMate - " + this.props.category;
  }

  async fetchNews(query) {
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=1919e63f40c042819d19400fd983489c`;
    let response = await fetch(url);
    let data = await response.json();
    let filteredArticles = data.articles.filter(
      (article) => article.source.name !== "Yahoo Entertainment"
    );

    this.setState({ articles: filteredArticles });
  }

  componentDidMount() {
    const query = this.props.searchQuery || this.props.category || "news";
    this.fetchNews(query);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.searchQuery !== this.props.searchQuery
    ) {
      const query = this.props.searchQuery || this.props.category;
      this.fetchNews(query);
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="mb-4 text-center">
        {this.props.searchQuery 
          ? `Results for "${this.props.searchQuery}"`
          : this.props.category === "news" || !this.props.category
          ? "Top News"
          : `Top ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News`}
      </h2>


        <div className="row">
          {this.state.articles.length > 0 ? (
            this.state.articles.map((element, index) => (
              <NewsItem
                key={index}
                title={element.title ? element.title.slice(0, 40) + "..." : "No Title"}
                description={element.description ? element.description.slice(0, 80) + "..." : "No Description"}
                imageUrl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                newsUrl={element.url}
                author={element.author ? element.author : "Unknown"}
                date={new Date(element.publishedAt).toGMTString()}
              />
            ))
          ) : (
            <h4 className="text-center">No articles found</h4>
          )}
        </div>
      </div>
    );
  }
}

export default function NewsWithParams() {
  const { category, query } = useParams();
  return <News category={category} searchQuery={query} />;
}
