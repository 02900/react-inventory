import React, { useEffect, useState } from "react";
import { initialArticles } from "./data-dummy/articles";
import InventoryHeader from "./components/inventory-header/inventory-header";
import Article from "./components/article/article";
import Searchbox from "./components/searchbox/searchbox";
import { filterInventory } from "./services/filter-inventory";
import { SortBy } from "./interfaces/article.interface";
import { Category, Direction } from "./enums/inventory-sort-by";

const App: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>({
    category: Category.None,
    direction: Direction.None,
  });

  useEffect(() => setArticles(filterInventory(query)), [query]);

  return (
    <main>
      <Searchbox innnerQuery={query} callback={setQuery}></Searchbox>
      <InventoryHeader sortBy={sortBy} callback={setSortBy}></InventoryHeader>
      {articles.map((article) => (
        <Article key={article.code} {...article}></Article>
      ))}
    </main>
  );
};

export default App;
