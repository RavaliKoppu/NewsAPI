import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imageUrl,newsUrl,author,date,source}=this.props;
    return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...
                      <span class="badge badge-info">{source}</span>
                    </h5>
                    <p className="card-text">{desc}...</p>
                    <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="nopener no referrer" className="btn btn-primary">Read More</a>
                </div>
            </div>
    )
  }
}

export default NewsItem
