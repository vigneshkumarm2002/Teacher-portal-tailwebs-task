// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./comps/App.js";


// Create a simple React component
function App() {
  return (
      <App />
  );
}

// Render the React component into the "root" div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
