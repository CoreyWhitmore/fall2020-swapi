// NOTE ProxyState is the new STORE.State
import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";

function _draw() {
  let chars = ProxyState.planets
  let template = ''
  chars.forEach(c => template += c.Template)
  document.getElementById("planets").innerHTML = template
}

export default class PlanetsController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on('planets', _draw)
    // Go get the relevant data
    planetsService.getPlanets();
  }

  nextPlanet() {
    planetsService.nextPlanet()
  }

  previousPlanet() {
    planetsService.previousPlanet()
  }
}