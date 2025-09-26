import React, { Component } from 'react'
import NewsItem from './NewsItem';
import download from './download.jpg';  // in case of no image from the news API. // in src folder, we can import images like this.
import Loader from './Loader.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsComponent extends Component {
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      total: 0
    };
    document.title = `${this.capitalize(this.props.category)} - Flash News`;
  } // states of class based component are always defined inside a constructor, inside [this.state] and as an object, and constructor must have a super() call.
  // [this.articles] can be used instead of [this.state.articles] if articles is not a state variable (not wriiten in this.state), but if it is a state variable, then we would use [this.state.articles].
  async componentDidMount() {
    this.setState({ loading: true }); // setting loading to true while fetching data from the API
    this.props.setProgress(10);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=6`);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      total: parsedData.totalResults,
      loading: false
    })  // componentDidMount() is a lifecycle method that runs after the render method, and is used to fetch data from an API.
    this.props.setProgress(100);
  }  // cdm function is a lifecycle method, so it belongs to class itself and therefore "this" keyword is binded with it, so no need to make it an arrow function.

  // previousClick = async() => {
  //   this.setState({loading: true});
  //   this.props.setProgress(10);
  //   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=6&page=${this.state.page - 1}`);
  //   this.props.setProgress(30);
  //   let parsedData = await data.json();
  //   this.props.setProgress(50);
  //   this.setState({
  //     articles: parsedData.articles,  // articles is array of objects
  //     page: this.state.page - 1,
  //     loading: false
  //   }, () => {
  //     window.scrollTo(0, 0); // scrolls to the top of the page when previous button is clicked
  //   }); // setState takes a second argument which is a callback function that runs after the state is updated
  //   this.props.setProgress(100);
  // }

  // nextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.total/6)) {
  //     // this usually wont work since we have already set disabled attribute in the next button
  //   }
  //   else {
  //     this.setState({loading: true});
  //     this.props.setProgress(10);
  //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=6&page=${this.state.page + 1}`);
  //     this.props.setProgress(30);
  //     let parsedData = await data.json();
  //     this.props.setProgress(50);
  //     this.setState({
  //       articles: parsedData.articles,
  //       page: this.state.page + 1,
  //       loading: false
  //     }, () => {
  //       window.scrollTo(0, 0); // scrolls to the top of the page when next button is clicked
  //     });  // ensuring that window scrolls to top after next button is clicked
  //     this.props.setProgress(100);
  //   }
  // }

  fetchMoreData = async () => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=6&page=${this.state.page + 1}`);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles?.concat(parsedData.articles),
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <h2 className='text-center' style={{marginTop: "90px"}}>Flash News - Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Loader />} {/* if loading is true, then show the loader */}
        <InfiniteScroll
          dataLength={this.state.articles?.length}  // defines length of articles that is to be fetched
          next={this.fetchMoreData}  // inside is a function to fetch next page data on scrolling down
          hasMore={this.state.articles?.length < this.state.total}  // condition to stop fetching more articles on scrolling down
          loader={<Loader />}
        >
          <div className='container my-4 ms-auto'>
            {<div className="row mt-4">
              {this.state.articles?.map((element) => {
                return <div className="col-md-4 col-12 col-sm-6" key={element.url}>
                  <NewsItem title={element.title} author={element.author} date={element.publishedAt} source={element.source.name} badgecolor={this.props.badgecolor} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : download} newsUrl={element.url} />
                </div>
              })}
            </div>}
          </div>
        </InfiniteScroll>

        {/* <div className='d-flex justify-content-around my-4'>
          <button type="button" disabled={this.state.page===1} className="btn btn-dark" onClick={this.previousClick}> &larr; Previous</button>
          <h4>Page: {this.state.page} of {Math.ceil(this.state.total/6)}</h4>
          <button type="button" disabled={this.state.page===Math.ceil(this.state.total/6)} className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div> */}

      </>
    )
  }
}
NewsComponent.defaultProps = {
  country: "us",
  category: "general"
};