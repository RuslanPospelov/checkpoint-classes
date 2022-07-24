class CarrierRocket {
  constructor(stages) {
    this.stages = [...stages];
  }

  detachStage() {
    this.stages.shift();
  }
}
module.exports = CarrierRocket;
