import { initialArticles } from "../data-dummy/articles";
import { Category, Direction } from "../enums/inventory-sort-by";
import { IArticle, SortBy } from "../interfaces/article.interface";

export const filterInventory: (query: string, sortBy: SortBy) => IArticle[] = (
  query: string,
  sortBy: SortBy,
) => {
  let articles = [...initialArticles];

  const hasFilterByCategory = sortBy.category !== Category.None;
  const hasFilterByDirection = sortBy.direction !== Direction.None;

  if (hasFilterByCategory && hasFilterByDirection) {
    articles = articles.sort((a, b) => {
      if (sortBy.category === Category.None) return 0;

      if (sortBy.direction === Direction.Asc) {
        return a[sortBy.category] > b[sortBy.category] ? -1 : 1;
      }
      return a[sortBy.category] > b[sortBy.category] ? 1 : -1;
    });
  }

  if (query === "") return articles;

  articles = articles.filter((article) => {
    const articleValues = Object.values(article);
    let hasQuery = false;

    for (let i = 0; i < articleValues.length; i++) {
      const valueAsString = String(articleValues[i]);

      if (valueAsString.toLowerCase().includes(query.toLowerCase())) {
        hasQuery = true;
        break;
      }
    }

    return hasQuery;
  });

  return articles;
};
