class Paper 
{
    constructor()
    {
        var options= 
        { 
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.radius = 30;
        this.image = loadImage("SPRITES/paper.png");
        this.image.resize(20, 20);
        this.body = Bodies.circle(100,500, 15, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display()
    {
        push()
        translate(this.body.position.x, this.body.position.y); 
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}


