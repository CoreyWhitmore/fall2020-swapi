import Character from "./Models/Character.js"
import Planet from "./Models/Planet.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// NOTE AppState is the object used to hold all the data from the app, this replaces _state = {}
class AppState extends EventEmitter {
  nextChar = ''
  previousChar = ''
  nextPlanet = ''
  previousPlanet = ''
  /** @type { Character[] } */
  characters = []
  planets = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    // calls all the functions that are subcribed/listenting/'on'
    target.emit(prop, value)
    return true
  }
})
