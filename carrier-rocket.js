module.exports = class CarrierRocket {
  constructor(stages) {
    this.stages = stages.slice();
  }

  detachStage() {
    return this.stages.shift();
  }
};
