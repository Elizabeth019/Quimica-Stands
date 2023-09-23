import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { ChakraProvider } from "@chakra-ui/react";
//import theme from "./components/Resourse/theme/theme.js";
import App from "./App";
import "./main.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     
              <App />
          
    </BrowserRouter>
  </React.StrictMode>
);
