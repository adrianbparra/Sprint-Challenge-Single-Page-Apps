import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js"

export default function App() {
  return (
    <main>
      <Route path="/" component={WelcomePage}/>
      <Route path="/" component={Header} />
      <Route path="/" component={CharacterList} />
    </main>
  );
}
