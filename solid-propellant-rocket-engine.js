const RocketEngine = require('./rocket-engine');

module.exports = class SolidPropellantRocketEngine extends RocketEngine {
  constructor(name, specificImpulse, rocketPropellant) {
    super(specificImpulse, rocketPropellant);
    this.name = name;
  }
};
