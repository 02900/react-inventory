import React from "react";
import './searchbox.scss';

interface ISearchbox {
  innnerQuery: string;
  callback: (query: string) => void;
}

const Searchbox: React.FC<ISearchbox> = ({ innnerQuery, callback }) => {
  return (
    <div className="searchbox">
      <p>Filter by: </p>
      <input value={innnerQuery} onChange={(e) => callback(e.target.value)} />
    </div>
  );
};

export default Searchbox;
