import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class PlanetsService {


  getPlanets() {
    // NOTE "GET" is the method to retrieve data
    api.get('planets')
      .then(res => {
        ProxyState.nextPlanet = res.data.next
        ProxyState.planets = res.data.results.map(c => new Planet(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  nextPlanet() {
    if (ProxyState.nextPlanet) {
      api.get(ProxyState.nextPlanet)
        .then(res => {
          ProxyState.previousPlanet = res.data.previous
          ProxyState.nextPlanet = res.data.next
          ProxyState.planets = res.data.results.map(p => new Planet(p))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previousPlanet() {
    if (ProxyState.previousPlanet) {
      api.get(ProxyState.previousPlanet)
        .then(res => {
          ProxyState.previousPlanet = res.data.previous
          ProxyState.nextPlanet = res.data.next
          ProxyState.planets = res.data.results.map(c => new Planet(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const planetsService = new PlanetsService();