import React from "react";
import Searchbox from "./components/searchbox/searchbox";
import Article from "./components/article/article";
import { articles } from "./data-dummy/articles";


const App: React.FC = () => {
  return (
    <>
      <Searchbox></Searchbox>

      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </>
  );
};

export default App;
