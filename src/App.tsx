import React from "react";
import { IArticle } from "./interfaces/article.interface";
import Searchbox from "./components/searchbox/searchbox";
import Article from "./components/article/article";

const dummyArticle : IArticle = {
  "code": "SPUD90-X",
  "position": 2,
  "quantity": 1,
  "image": "02.png",
  "price": 750,
  "description": "XL Sink base unit 1 internal panel, 2 continuous doors"
}

const App: React.FC = () => {
  return (
    <>
      <Searchbox></Searchbox>
      <Article {...dummyArticle}></Article>
    </>
  );
};

export default App;
