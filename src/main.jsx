import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./compo/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout></Layout>
  </BrowserRouter>
);
