import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

window.addEventListener("error", (event) => {
  console.log(`message: `, event);
  console.log(`------------------------------------`);
});
document.addEventListener("error", (event) => {
    console.log(`message: `, event);
    console.log(`------------------------------------`);
});


ReactDOM.createRoot(document.getElementById('root')!).render (<App/>)
