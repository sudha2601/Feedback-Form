import { createRoot } from 'react-dom/client';  // ✅ Correct React 18 import
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);  // ✅ Correct way to initialize root in React 18

root.render(
      <App />

);
