import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {
    async getAllPokemon() {
        let res = await sandboxApi.get('')
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    }
    getPokemon(id) {
        let pokemon = ProxyState.myPokemon.find(p => p.id === id)
        ProxyState.activePokemon = pokemon
    }

    async addPokemon() {
        let res = await sandboxApi.post('', ProxyState.activePokemon)

        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    }

    async removePokemon() {
        let res = await sandboxApi.delte(ProxyState.activePokemon.id)
        ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== ProxyState.activePokemon.id)
        ProxyState.activePokemon = null
    }
}

export const myPokemonService = new MyPokemonService();