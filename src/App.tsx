import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <Homepage />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
