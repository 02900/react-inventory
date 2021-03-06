import React from "react";
import "./inventory-header.scss";
import { Category, Direction } from "../../enums/inventory-sort-by";
import { SortBy } from "../../interfaces/article.interface";

const PRIORITIES_TYPES = 3;

const prioritySymbol = {
  0: "↑",
  1: "↓",
  2: "",
};

interface IInventoryHeader {
  sortBy: SortBy;
  callback: (sortBy: SortBy) => void;
}

const InventoryHeader: React.FC<IInventoryHeader> = ({ sortBy, callback }) => {
  const onSortChanged = (category: Category) => {
    let priority = Direction.Asc;

    if (sortBy.category === category) {
      priority = (sortBy.direction + 1) % PRIORITIES_TYPES;
    }

    callback({
      category,
      direction: priority,
    });
  };

  return (
    <div className="header">
      <div className="code">
        <button onClick={() => onSortChanged(Category.Code)}>
          Code
          {sortBy.category === Category.Code &&
            prioritySymbol[sortBy.direction]}
        </button>
      </div>

      <div className="description">
        <span>Description</span>
      </div>

      <div className="image">
        <span>Image</span>
      </div>

      <div className="position">
        <button onClick={() => onSortChanged(Category.Position)}>
          Position{" "}
          {sortBy.category === Category.Position &&
            prioritySymbol[sortBy.direction]}
        </button>
      </div>

      <div className="price">
        <button onClick={() => onSortChanged(Category.Price)}>
          Price{" "}
          {sortBy.category === Category.Price &&
            prioritySymbol[sortBy.direction]}
        </button>
      </div>

      <div className="quantity">
        <button onClick={() => onSortChanged(Category.Quantity)}>
          Quantity{" "}
          {sortBy.category === Category.Quantity &&
            prioritySymbol[sortBy.direction]}
        </button>
      </div>
    </div>
  );
};

export default InventoryHeader;
