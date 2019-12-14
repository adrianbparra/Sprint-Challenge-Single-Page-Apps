import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import {Link, Route} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Route path="/" component={Header} />
      <Route path="/" component={CharacterList} />
    </main>
  );
}
