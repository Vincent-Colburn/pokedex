import MyPokemonController from "./Controllers/MyPokemonController.js"
import PokedexIndexController from "./Controllers/PokedexIndexController.js"

class App {
  myPokemonController = new MyPokemonController();
  pokedexIndexController = new PokedexIndexController();
}

window["app"] = new App();
