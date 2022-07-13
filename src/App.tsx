import React, { useEffect, useState } from "react";
import { initialArticles } from "./data-dummy/articles";
import { IArticle } from "./interfaces/article.interface";
import InventoryHeader from "./components/inventory-header/inventory-header";
import Article from "./components/article/article";
import Searchbox from "./components/searchbox/searchbox";

const filterInventory: (query: string) => IArticle[] = (query: string) => {
  if (query === '') return initialArticles;

  return initialArticles.filter((article) => {
    const articleValues = Object.values(article);
    let hasQuery = false;

    for (let i = 0; i < articleValues.length; i++) {
      const valueAsString = String(articleValues[i]);
      
      if (valueAsString.toLowerCase().includes(query.toLowerCase())){
        hasQuery = true;
        break;
      }
    }

    return hasQuery;
  });
};

const App: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [query, setQuery] = useState("");

  useEffect(() => setArticles(filterInventory(query)), [query]);

  return (
    <>
      <Searchbox callback={setQuery}></Searchbox>
      <InventoryHeader></InventoryHeader>
      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </>
  );
};

export default App;
