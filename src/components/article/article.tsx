import React from "react";
import "./article.scss";
import { IArticle } from "../../interfaces/article.interface";

const Article: React.FC<IArticle> = (article) => {
  return (
    <div className="article">
      <div className="code">
        <span>{article.code}</span>
      </div>
      <div className="description">
        <span>{article.description}</span>
      </div>
      <div className="image">
        <img src={article.image} />
      </div>
      <div className="position">
        <span>{article.position}</span>
      </div>
      <div className="price">
        <span>{article.price}</span>
      </div>
      <div className="quantity">
        <span>{article.quantity}</span>
      </div>
    </div>
  );
};

export default Article;
