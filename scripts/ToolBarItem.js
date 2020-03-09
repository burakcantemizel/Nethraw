class ToolBarItem{

    constructor(position_x, position_y, width, height, imagePath){
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;
        this.image = loadImage(imagePath);
    }

    draw(){
        push();
            stroke(255,255,0);
            fill(0,0,0);
            rect(this.position_x,this.position_y,this.width,this.height,3);
            

            this.rollover_effect();
        pop();
    }

    rollover_effect(){
        if(this.rollover()){
            tint(255,255,0);
            image(this.image,this.position_x,this.position_y);
        }else{
            image(this.image,this.position_x,this.position_y);
        }
    }

    rollover(){
        if(mouseX > this.position_x && mouseX < this.position_x + this.width && mouseY > this.position_y && mouseY < this.position_y + this.height){
            return true;
        }else{
            return false;
        }
    }

    click(){
        if(this.rollover() && mouse_clicked == true ){
            return true;
        }else{
            return false;
        }
    }

}