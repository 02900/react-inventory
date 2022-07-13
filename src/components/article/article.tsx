import React from "react";
import './article.scss';
import { IArticle } from "../../interfaces/article.interface";

const Article: React.FC<IArticle> = (article) => {
  return (
    <div className="article">
      <span>{article.code}</span>
      <span>{article.description}</span>
      <span>{article.image}</span>
      <span>{article.position}</span>
      <span>{article.price}</span>
      <span>{article.quantity}</span>
    </div>
  );
};

export default Article;
