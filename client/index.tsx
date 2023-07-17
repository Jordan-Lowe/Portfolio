import { createRoot } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './components/App'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
})
