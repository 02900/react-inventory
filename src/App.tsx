import React from "react";
import Searchbox from "./components/searchbox/searchbox";
import Article from "./components/article/article";
import { articles } from "./data-dummy/articles";
import InventoryHeader from "./components/inventory-header/inventory-header";

const App: React.FC = () => {
  return (
    <>
      <Searchbox></Searchbox>

      <InventoryHeader></InventoryHeader>

      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </>
  );
};

export default App;
