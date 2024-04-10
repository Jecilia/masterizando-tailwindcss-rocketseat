import { Home } from './components/home'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />
      <main className="px-8 pb-12 pt-8">
        <Home />
      </main>
    </div>
  )
}

export default App
