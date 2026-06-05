import HoverImageLinks from "./components/HoverImageLinks"
import DivOrigami from "./components/LogoOrigami"
import RevealBento from "./components/RevealBento"
import SmoothScrollHero from "./components/SmoothScrollHero"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
        <RevealBento/>
        <DivOrigami/>
        <HoverImageLinks/>
        <SmoothScrollHero/>
        
    </div>
  )
}

export default App
