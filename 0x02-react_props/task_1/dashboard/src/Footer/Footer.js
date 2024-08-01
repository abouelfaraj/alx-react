import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
  );
}

export default App;
