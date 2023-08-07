import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading: false,
      page:1,
       
    }
  }
  async componentDidMount(){
    let url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c200a401fb348578e533af22044751f&page=1&pageSize=20';
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles,totalResults: parseData.totalResults});
  }
 handelNext = async ()=>{
  
   console.log("Next clicked ");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c200a401fb348578e533af22044751f&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles,page:this.state.page + 1});
    }

   
    
}
 handelPrev = async () =>{
  console.log("Prev clicked ");
  let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c200a401fb348578e533af22044751f&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles,page:this.state.page - 1});
}
  render() {
    return (
      <>
        <div className='container my-3'>
          <h1 className='my-4 text-center'>NewsMonkey - Top Headlines</h1>
          <div className="row">            
              {this.state.articles.map((element)=>{
                return <div key={element.url} className='my-3 col-md-4'>
                <NewsItem title={element.title.slice(0,40)} description={element.description} imgUrl={element.urlToImage?element.urlToImage:"https://fox8.com/wp-content/uploads/sites/12/2023/08/Top-Thrill-2_05.jpg?w=1280"} newsUrl={element.url} />
                </div>
              })}
            
                       
            
          </div>
          <div className='mt-5 container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} onClick={this.handelPrev} className='btn btn-dark'>&larr; Previous</button>
            <button onClick={this.handelNext} className='btn btn-dark'>Next &rarr;</button>
          </div>
        
        </div>
        
      </>
    )
  }
}
