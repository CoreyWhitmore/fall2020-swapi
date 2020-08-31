import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class CharactersService {


  getCharacters() {
    // NOTE "GET" is the method to retrieve data
    api.get('people')
      .then(res => {
        ProxyState.nextChar = res.data.next
        ProxyState.characters = res.data.results.map(c => new Character(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  nextChar() {
    if (ProxyState.nextChar) {
      api.get(ProxyState.nextChar)
        .then(res => {
          ProxyState.previousChar = res.data.previous
          ProxyState.nextChar = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previousChar() {
    if (ProxyState.previousChar) {
      api.get(ProxyState.previousChar)
        .then(res => {
          ProxyState.previousChar = res.data.previous
          ProxyState.nextChar = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const charactersService = new CharactersService();