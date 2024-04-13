import { Home } from './components/home'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />
      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:p-8">
        <Home />
      </main>
    </div>
  )
}

export default App
