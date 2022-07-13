import React, { useState } from "react";
import "./inventory-header.scss";
import { SortBy } from "../../enums/inventory-sort-by";

interface IInventoryHeader {
  callback: (sortBy: string) => void;
}

const InventoryHeader: React.FC<IInventoryHeader> = ({ callback }) => {
  const [sortBy, setSortBy] = useState(SortBy.None);

  const onSortChanged = (newSort: SortBy) => {
    setSortBy(newSort);
  };

  return (
    <div className="header">
      <button className="code" onClick={() => onSortChanged(SortBy.Code)}>
        code {sortBy === SortBy.Code? '↑' : ''}
      </button>

      <span className="description">description</span>
      <span className="image">image</span>

      <button
        className="position"
        onClick={() => onSortChanged(SortBy.Position)}
      >
        position
      </button>

      <button className="price" onClick={() => onSortChanged(SortBy.Price)}>
        price
      </button>

      <button
        className="quantity"
        onClick={() => onSortChanged(SortBy.Quantity)}
      >
        quantity
      </button>
    </div>
  );
};

export default InventoryHeader;
