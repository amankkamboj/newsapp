import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async fetchNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c200a401fb348578e533af22044751f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.fetchNews();
  }
  
  fetchMoreData = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), async () => {
        // Now, the updated value of this.state.page will be used
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c200a401fb348578e533af22044751f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
          articles: this.state.articles.concat(parseData.articles),
          totalResults: parseData.totalResults
        });
    });
};
  render() {
    return (
      <>
        <h1 className="my-4 text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="my-3 col-md-4">
                    <NewsItem
                      title={element.title.slice(0, 40)}
                      description={element.description}
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://fox8.com/wp-content/uploads/sites/12/2023/08/Top-Thrill-2_05.jpg?w=1280"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
