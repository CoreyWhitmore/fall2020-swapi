// NOTE ProxyState is the new STORE.State
import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";

function _draw() {
  let chars = ProxyState.characters
  let template = ''
  chars.forEach(c => template += c.Template)
  document.getElementById("characters").innerHTML = template
}

export default class CharactersController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on('characters', _draw)
    // Go get the relevant data
    charactersService.getCharacters();
  }

  nextChar() {
    charactersService.nextChar()
  }

  previousChar() {
    charactersService.previousChar()
  }
}