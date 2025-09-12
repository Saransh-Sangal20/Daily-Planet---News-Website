import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source, badgecolor}= this.props; // destructuring props
    return (
      <div className='my-3 mx-2'>
        <div className="card">
          <span className= {`position-absolute top-0 translate-middle badge rounded-pill ${badgecolor}`} style={{left: "95%", zIndex: "1"}}>{source}</span>
            <img src={imgUrl} className="card-img-top" alt={title}/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    ) // target="_blank" opens the link in a new tab
  }
}
