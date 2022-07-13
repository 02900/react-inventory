import React from "react";

interface ISearchbox {
  innnerQuery: string,
  callback: (query: string) => void;
}

const Searchbox: React.FC<ISearchbox> = ({ innnerQuery, callback }) => {
  return (
    <input value={innnerQuery} onChange={(e) => callback(e.target.value)} />
  );
};

export default Searchbox;
