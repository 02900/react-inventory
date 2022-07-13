import React, { useState } from "react";

interface ISearchbox {
  callback: (query: string) => void;
}

const Searchbox: React.FC<ISearchbox> = ({ callback }) => {
  const [query, setQuery] = useState("");

  const onValueChanged = (value: string) => {
    setQuery(value);
    callback(value);
  };

  return (
    <input value={query} onChange={(e) => onValueChanged(e.target.value)} />
  );
};

export default Searchbox;
