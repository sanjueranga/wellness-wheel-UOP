import Navbar from "./components/Navbar/Navbar"

export default function Home() {
  return (
  <main>
    <div className="flex bg-gradient-to-l from-cyan-400 to-green-200 h-full">
      <div className="w-3/5 h-full rounded-2xl">
        <Navbar />
      </div>
      <div className="w-2/5 h-full"></div>
    </div>
  </main>
  )
}
