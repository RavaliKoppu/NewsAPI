import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
   
    constructor(){
        super();
        this.state={
            articles: [],
            loading:false,
            page:1,
            totalResult:0
        };
    }

    updateNews(){
      //var url = `https://newsapi.org/v2/everything?q=Apple&from=2022-11-16&sortBy=popularity&apiKey=0acfa1f0af8149c6aa4bb005a0537224&page=${this.state.page}&pageSize=100`;
      var url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        var req = new Request(url);
        this.setState({loading:true});
        fetch(req)
        .then((response)=> response.json())
        .then((json)=>{
                this.setState({
                    articles:json.articles,
                    totalResult:json.totalResults,
                    loading:false
                })
        });
    }

    handlePreviousClick=()=>{
        this.setState({
          page:this.state.page-1
        });
        this.updateNews();
    }

    handleNextClick=()=>{
      this.setState({
        page:this.state.page+1
      });
      this.updateNews();
    }

      componentDidMount(){
        this.updateNews();
    };
    
  render() {
    const {articles } = this.state;
    return (
        <div className="container my-4">
            <h2>Daily News Reading</h2>
            {this.state.loading  && <Spinner/>}
            <div className="row">
                {articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,44):""} desc={element.description?element.description.slice(0,88):""} 
                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                        source={element.source.name}
                        >
                        </NewsItem>
                    </div>
                    })}
            </div>

            <div className="container d-flex justify-content-between my-2">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
            </div>
        </div>
    )
  }
}

export default News
