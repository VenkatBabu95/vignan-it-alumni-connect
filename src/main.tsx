// Test if JavaScript is working
console.log('JavaScript is loading...');

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('React imports successful');

// Check if root element exists
const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  console.log('Rendering App...');
  root.render(<App />);
  console.log('App rendered successfully!');
} else {
  console.error('Root element not found!');
  // Fallback: create a visible error message
  document.body.innerHTML = '<div style="padding: 20px; background: red; color: white; font-size: 20px;">ERROR: Root element not found! JavaScript is working but React cannot mount.</div>';
}
