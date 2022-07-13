import React from "react";
import Searchbox from "./components/searchbox/searchbox";
import Article from "./components/article/article";
import { articles } from "./data-dummy/articles";
import InventoryHeader from "./components/inventory-header/inventory-header";

const filterInventory = (query: string ) => {
  console.log(`Filtering by ${query}`);
}

const App: React.FC = () => {
  return (
    <>
      <Searchbox callback={filterInventory}></Searchbox>

      <InventoryHeader></InventoryHeader>

      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </>
  );
};

export default App;
