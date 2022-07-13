import React from "react";
import './article.scss';
import { IArticle } from "../../interfaces/article.interface";

const Article: React.FC<IArticle> = (article) => {
  return (
    <div className="article">
      <span className="code">{article.code}</span>
      <span className="description">{article.description}</span>
      <span className="image">{article.image}</span>
      <span className="position">{article.position}</span>
      <span className="price">{article.price}</span>
      <span className="quantity">{article.quantity}</span>
    </div>
  );
};

export default Article;
