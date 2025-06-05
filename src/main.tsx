import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
} else {
  console.error('找不到 root 容器');
}