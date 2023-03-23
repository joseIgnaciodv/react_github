import React, { useState } from "react";
import "./App.css";
import OptionsContainer from "../components/OptionsContainer";
import SearchBar from "../components/SearchBar";

function App() {
  const [user, setuser] = useState("");

  function getInput(value: string) {
    setuser(value);
  }

  return (
    <>
      <div className="bar"></div>
      <SearchBar input={getInput} />
      <OptionsContainer user={user} />
    </>
  );
}

export default App;
