class TitleBar{

    constructor(position_x, position_y, width, height){
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;

    }

    draw(){
        push();
            noStroke();
            fill(0,0,0);
            rect(this.position_x,this.position_y, windowWidth, this.height);
            this.drawLogo();
            button_config.draw();
            button_new_draw.draw();
            button_close_draw.draw();
            button_save.draw();
            
        pop();
    }

    drawLogo(){
        push();
            textAlign(RIGHT,CENTER);
            textSize(20);
            textStyle(BOLD);
            fill(210,105,30);
            text('NethDraw::Simple Animator',windowWidth-16,this.height/2);
            //fill(123,63,0);
            fill(255,255,255);
            text("::Simple Animator",windowWidth-16,this.height/2);
            fill(255,255,152);
            text("Simple Animator",windowWidth-16,this.height/2);
        pop();
    }

}