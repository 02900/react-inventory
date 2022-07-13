import React, { useState } from "react";

interface ISearchbox {
  callback: (query: string) => void;
}

const Searchbox: React.FC<ISearchbox> = ({ callback }) => {
  const [innnerQuery, setInnerQuery] = useState("");

  const onValueChanged = (value: string) => {
    setInnerQuery(value);
    callback(value);
  };

  return (
    <input value={innnerQuery} onChange={(e) => onValueChanged(e.target.value)} />
  );
};

export default Searchbox;
