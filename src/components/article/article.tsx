import React from "react";
import './article.scss';
import { IArticle } from "../../interfaces/article.interface";

const Article: React.FC<IArticle> = (article) => {
  return (
    <div className="article">
      <span className="item code">{article.code}</span>
      <span className="item description">{article.description}</span>
      <span className="item image">{article.image}</span>
      <span className="item position">{article.position}</span>
      <span className="item price">{article.price}</span>
      <span className="item quantity">{article.quantity}</span>
    </div>
  );
};

export default Article;
