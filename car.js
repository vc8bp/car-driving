class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed = 0;
        this.acceleration = 1;
        this.maxSpeed = 3;
        this.frection = 0.05;
        this.angele = 0;
        this.controlls = new Controlls()
    }

    update() {
        if(this.controlls.forword){
            this.speed += this.acceleration;
        }
        if(this.controlls.backword){
            this.speed -= this.acceleration;
        } 
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if(this.speed <- this.maxSpeed/2) {
            this.speed =- this.maxSpeed/2;
        }
        if(this.speed > 0) {
            this.speed -= this.frection;
        }
        if(this.speed < 0) {
            this.speed += this.frection;
        }

        if(this.controlls.right){
            this.angele -= 0.03;
        }
        if(this.controlls.left){
            this.angele += 0.03;
        }
        this.x -= Math.sin(this.angele)*this.speed;
        this.y -= Math.cos(this.angele)*this.speed;
    }

    drow(ctx){
        ctx.save()
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angele)
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height 
        );
        ctx.fill();
        ctx.restore();
    }
}