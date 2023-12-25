class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    //TODO: why does this not need "../images/face.png"
    // this.load.image("face", "images/face.png");

    this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
  }
  create() {
    // console.log("Ready!");
    this.char = this.add.sprite(0, game.config.height/2, "boy");

    var frameNames= this.anims.generateFrameNumbers('boy');

    this.anims.create({
      key: 'walk',
      frames: frameNames,
      frameRate: 8,
      repeat: -1
    });

    this.char.play('walk');

    this.tweens.add({targets: this.char, duration: 5000, x:game.config.width, onCompleteParams:[custom]});
    //this.tweens.add({targets: child,duration: time,y:targetY,onComplete:onCompleteHandler ,onCompleteParams:[custom]});

onCompleteHandler (tween, targets, custom)
{
    

 
}
  }
  update() {
    this.char.x+=2;
    if (this.char.x > game.config.width) {
      this.char.x = 0;
    }
  }
}