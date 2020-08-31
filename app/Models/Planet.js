export default class Planet {
  constructor({ climate, gravity, name, orbital_period, population, rotation_period, terrain }) {
    this.climate = climate
    this.gravity = gravity
    this.name = name
    this.orbitalPeriod = orbital_period
    this.population = population
    this.rotationPeriod = rotation_period
    this.terrain = terrain
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.climate} ${this.terrain}
      </div>
    </div>
    `
  }
}