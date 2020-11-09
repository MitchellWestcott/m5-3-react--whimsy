import React from "react";
import ReactDOM from "react-dom";
import { TweetProvider } from "./components/Tweet/TweetContext";
import App from "./components/App";

ReactDOM.render(
  <TweetProvider>
    <App />
  </TweetProvider>,
  document.getElementById("root")
);
