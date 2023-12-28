class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    this.load.image("road", "images/road.jpg");
    this.load.image("line", "images/line.png");
    this.load.sprite("cars", "images/cars.png", {fameWidth: 60, frameHeight: 126});
  }
  create() {
    this.graphics = this.add.graphics();
  }
  
  update() {
    
  }
}