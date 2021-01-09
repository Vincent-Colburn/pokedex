import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokedexIndexService {
    async getAllPokemon() {
        debugger
        let res = await pokeApi.get('')
        ProxyState.pokedexmon = res.data.results
        console.log(res)
    }
    async getPokemon(name) {
        let res = await pokeApi.get(name)
        ProxyState.activePokemon = new Pokemon(res.data)
    }
}

export const pokedexIndexService = new PokedexIndexService();