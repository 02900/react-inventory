import React from "react";
import Searchbox from "./components/searchbox/searchbox";
import Article from "./components/article/article";

const App: React.FC = () => {
  return (
    <>
      <Searchbox></Searchbox>
      <Article></Article>
    </>
  );
};

export default App;
