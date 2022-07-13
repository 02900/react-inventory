import React from "react";
import { IArticle } from "../../interfaces/article.interface";

const Article: React.FC<IArticle> = (article) => {
  return (
    <>
      <p>{article.code}</p>
      <p>{article.description}</p>
      <p>{article.image}</p>
      <p>{article.position}</p>
      <p>{article.price}</p>
      <p>{article.quantity}</p>
    </>
  );
};

export default Article;
