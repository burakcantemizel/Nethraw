class Button{

    constructor(position_x, position_y, width, height, type, color, text){
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
        this.text = text;
    }

    draw(){
        push();
            switch(this.type){
                case "rounded":
                    fill(this.color);
                    noStroke();
                    rect(this.position_x, this.position_y, this.width, this.height,3);

                    this.rollover_effect();

                    textAlign(CENTER,CENTER);
                    textSize(14);
                    textStyle(BOLD);
                    fill(0,0,0);
                    text(this.text, this.position_x + this.width/2, this.position_y + this.height/2);
                    
                    
                break;

                case "normal":
                    fill(255);
                    noStroke();
                    rect(this.position_x, this.position_y, this.width, this.height);
                break;

                default:
                    fill(255);
                    noStroke();
                    rect(this.position_x, this.position_y, this.width, this.height);
            }
        pop();
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

    one_click(){
        if(this.rollover() && mouse_one_clicked == true ){
            return true;
        }else{
            return false;
        }
    }

    rollover_effect(){
        switch(this.type){
            case "rounded":
                if(this.rollover()){
                    fill(0,0,0,120);
                    noStroke();
                    rect(this.position_x, this.position_y, this.width, this.height,3);
                }
            break;

            case "normal":
                fill(255);
                noStroke();
                rect(this.position_x, this.position_y, this.width, this.height);
            break;

            default:
                fill(255);
                noStroke();
                rect(this.position_x, this.position_y, this.width, this.height);
        }
    }

}