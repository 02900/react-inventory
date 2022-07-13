import React, { useEffect, useState } from "react";
import { initialArticles } from "./data-dummy/articles";
import InventoryHeader from "./components/inventory-header/inventory-header";
import Article from "./components/article/article";
import Searchbox from "./components/searchbox/searchbox";
import { filterInventory } from "./services/filter-inventory";

const App: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => setArticles(filterInventory(query)), [query]);

  return (
    <main>
      <Searchbox callback={setQuery}></Searchbox>
      <InventoryHeader callback={setSortBy}></InventoryHeader>
      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </main>
  );
};

export default App;
