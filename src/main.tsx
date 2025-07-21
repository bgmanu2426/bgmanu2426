import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWithErrorBoundary from './AppWithErrorBoundary';

// Performance optimization: Use StrictMode for development only
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Render with performance optimizations
if (import.meta.env.DEV) {
  root.render(
    <StrictMode>
      <AppWithErrorBoundary />
    </StrictMode>
  );
} else {
  root.render(<AppWithErrorBoundary />);
}
