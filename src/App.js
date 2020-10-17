import React, { useState } from "react";
import "./styles.css";
import { Box } from "theme-ui";
import Dropdown from "./components/Molecules/Dropdown";

export default function App() {
  const [state, setState] = useState(null);
  const options = [
    {
      label: "Black",
      value: "#000"
    },
    {
      label: "White",
      value: "#fff"
    },
    {
      label: "Green",
      value: "#0f0"
    }
  ];

  const handleResult = (selected) => {
    setState(selected);
  };

  return (
    <Box as="section" className="App">
      <h1>Hello CodeSandbox</h1>
      {state ? (
        <h2>Wow, cool you seleted {state.label}</h2>
      ) : (
        <h2>Start editing to see some magic happen!</h2>
      )}
      <Dropdown
        options={options}
        captureResult={handleResult}
        placeholder="Select your color"
      />
    </Box>
  );
}
