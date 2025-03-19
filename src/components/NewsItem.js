import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
        <div 
          className="card shadow-sm rounded-3 border-0"
          style={{ 
            width: "18rem", 
            height: "25rem", 
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out",
            cursor: "pointer" // Makes it clear that the card is clickable
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
            e.currentTarget.style.boxShadow = "4px 6px 15px rgba(0, 0, 0, 0.2)";
            e.currentTarget.style.border = "2px solid black"; // Black border on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.border = "none"; // Remove border on hover out
          }}
          onClick={() => window.open(newsUrl, "_blank", "noopener,noreferrer")} // Open news in a new tab
        >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="News"
            style={{ height: "150px", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
           
            <p className="card-text">
              <small className="text-muted">By {author} on {date}</small>
            </p>
            <p className="card-text flex-grow-1">{description}</p>    
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
