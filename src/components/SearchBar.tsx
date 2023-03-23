import React, { useState } from "react";

type SearchBarProps = {
  input: (value: string) => void;
};

function SearchBar({ input }: SearchBarProps) {
  const [user, setUser] = useState("");
  const [visible, setVisibility] = useState("hidden");

  function clearSearch() {
    setUser("");
    setVisibility("hidden");
    input("");
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
    input(event.target.value);
    if (event.target.value == "") {
      setVisibility("hidden");
    } else {
      setVisibility("visible");
    }
  };
  return (
    <div className="input-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <input
        value={user}
        onChange={handleOnChange}
        id="input-bar"
        type="text"
        placeholder="Buscar usuario GitHub"
      />

      <svg
        visibility={visible}
        onClick={clearSearch}
        id="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
