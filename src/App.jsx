import BlockInTextCard from "./components/BlockInTextCard"
import DrawCircleText from "./components/DrawCircleText"
import HoverImageLinks from "./components/HoverImageLinks"
import DivOrigami from "./components/LogoOrigami"
import Projects from "./components/Projects"
import RevealBento from "./components/RevealBento"
import SmoothScrollHero from "./components/SmoothScrollHero"

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-slate-100">
        <RevealBento/>
        <Projects/>
        <HoverImageLinks/>
        <SmoothScrollHero/>
        
    </div>
  )
}

export default App
