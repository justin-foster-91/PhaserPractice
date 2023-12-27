class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    //TODO: why does this not need "../images/face.png"
    // this.load.image("face", "images/face.png");
  }
  create() {
    this.graphics = this.add.graphics();
  }
  
  update() {
    
  }
}