// 1. import React and ReactDOM libararies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './style.css';

// 2. Tham chieu den ID = ROOT
const el = document.getElementById("root");

// 3. Goi reactDOM de kiem soat cac element
const root = ReactDOM.createRoot(el);

// 4. Tao cac component
// 5. Hien thi cac component len man hinh
root.render(<App />);
