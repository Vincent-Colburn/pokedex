import { ProxyState } from "../AppState.js";
import { pokedexIndexService } from "../Services/PokedexIndexService.js"

function _drawPokemon() {
    let template = ''
    ProxyState.pokedexmon.forEach(p => {
        template += `<li class="action" onclick="app.pokedexIndexController.getSpell('${p.name}')> ${p.name}</li>`
    })

    document.getElementById('pokedex').innerHTML = template
}

function _drawActivePokemon() {
    let template = ''
    if (ProxyState.activePokemon) {
        template = ProxyState.activePokemon.Template
    }
    document.getElementById('activePokemon').innerHTML = template
}


export default class PokedexIndexController {
    constructor() {
        debugger
        ProxyState.on('pokedexmon', _drawPokemon)
        ProxyState.on('activePokemon', _drawActivePokemon)
        this.getAllPokemon()
    }

    getAllPokemon() {
        try {
            pokedexIndexService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    getPokemon(name) {
        try {
            pokedexIndexService.getPokemon(name)
        } catch (error) {
            console.error(error)
        }
    }
}