
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add dark class to the html element to enable dark mode by default
document.documentElement.classList.add('dark')

createRoot(document.getElementById("root")!).render(<App />);
