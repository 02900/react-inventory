import React from "react";
import './inventory-header.scss'

const InventoryHeader: React.FC = () => {
  return (
    <div className="header">
      <button className="item code">code</button>
      <button className="item description">description</button>
      <button className="item image">image</button>
      <button className="item position">position</button>
      <button className="item price">price</button>
      <button className="item quantity">quantity</button>
    </div>
  );
}

export default InventoryHeader
