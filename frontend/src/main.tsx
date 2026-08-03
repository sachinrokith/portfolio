import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './NewApp.tsx'
import './styles/app.css'
import { PortfolioProvider } from './contexts/PortfolioContext.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary><PortfolioProvider><App /></PortfolioProvider></ErrorBoundary>
  </StrictMode>,
)
