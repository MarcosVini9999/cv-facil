import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@/components";
import "@/assets/css/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
