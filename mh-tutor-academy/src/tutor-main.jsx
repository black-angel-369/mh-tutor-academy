import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BecomeTutor from "./components/BecomeTutor.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BecomeTutor />
  </StrictMode>,
);
