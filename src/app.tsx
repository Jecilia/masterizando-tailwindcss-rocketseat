import { Home } from './components/home'
import { Sidebar } from './components/Sidebar'

export default function App() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
      <Sidebar />
      <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:p-8">
        <Home />
      </main>
    </div>
  )
}
