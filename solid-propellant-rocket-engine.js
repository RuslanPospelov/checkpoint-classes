const RocketEngine = require('./rocket-engine');

class SolidPropellantRocketEngine extends RocketEngine {
  constructor(name, specificImpulse, rocketPropellant, engine) {
    super(engine);
    this.name = name;
    this.specificImpulse = 2000;
    this.rocketPropellant = rocketPropellant;
  }
}
module.exports = SolidPropellantRocketEngine;
