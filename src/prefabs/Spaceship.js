class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture, frame, pointValue){
        super(scene,x,y,texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 3;
    }

    update(){
        // move left
        this.x -= this.moveSpeed;
        // wrap around from left edge to the right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }
}