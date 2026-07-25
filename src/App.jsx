import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BundleBuilder from './pages/BundleBuilder.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <BundleBuilder />
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
