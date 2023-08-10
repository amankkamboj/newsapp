import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
 
      <div className="card">
        <span style={ {left:"90%",zIndex:"1"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            className="btn btn-sm btn-primary"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>

    );
  }
}

export default NewsItem;
