export default class AudioController {
  constructor(){
    this.batteryPower = 100
    this.speed = 0
  }

  updateSpeedometer(){
    console.error("updateSpeedometer has not been set");
    return false;
  }

  setUpdateSpeedometer(ref){
    this.updateSpeedometer = ref
  }

  updateBatteryDisplay(){
    console.error("Updäte Bätterie has not bien sät");
    return false;
  }

  setUpdateBatteryDisplay(ref){
    this.updateBatteryDisplay = ref
  }

  setBatteryPower(value){
    //console.log("I have been called upon to serve!");
    if(value < 0) value = 0
    if(value > 100) value = 100
    if(value <= 0) this.setSpeed(0)
    this.batteryPower = value
    this.updateBatteryDisplay()
  }

  getBatteryPower(){
    return this.batteryPower
  }

  setSpeed(value){
    //console.log("I have been called upon to serve!");
    if(value < 0) value = 0
    if(value > 20) value = 20
    this.speed = value
    this.updateSpeedometer()
  }

  setSetSpeed(ref){
    this.setSpeed = ref
  }

  speedDidChange(ref){
    this.setSpeed = ref
  }

  getSpeed(){
    return this.speed
  }

}
