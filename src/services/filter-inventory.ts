import { initialArticles } from "../data-dummy/articles";
import { IArticle, SortBy } from "../interfaces/article.interface";

export const filterInventory: (query: string) => IArticle[] = (
  query: string,
) => {
  if (query === "") return initialArticles;

  return initialArticles.filter((article) => {
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
};
