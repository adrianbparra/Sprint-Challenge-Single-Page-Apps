import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>


      <Link to="/"><Button color="info" size="lg">Characters</Button></Link>
      <Link to="/episodes"><Button color="info" size="lg">Episodes</Button></Link>
    </header>
  );
}
