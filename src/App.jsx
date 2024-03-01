import Buttom from "./components/Buttom"
import Input from "./components/Input"
import PokemonDisplay from "./components/PokemonDisplay"
import PokemonImage from "./components/PokemonImage"
import TypeDisplay from "./components/TypeDisplay"

function App() {
  return (
    <main>
      <section className="pokedex_container">
        <img src="/pokedex.png" alt="pokedex" className="pokedex" />
        <PokemonImage />
        <TypeDisplay />
        <PokemonDisplay />
        <Input />
        <nav>
          <Buttom
            btnText='Anterior &lt;'
          />
          <Buttom
            btnText='Próximo &gt;'
          />
        </nav>
      </section>
    </main>
  )
}

export default App
