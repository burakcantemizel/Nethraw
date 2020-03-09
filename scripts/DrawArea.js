class DrawArea{

    constructor(width,height){
        this.width = width;
        this.height = height;
        this.area = createGraphics(this.width, this.height);
        this.frames = [];
        this.frames[0] = createGraphics(this.width,this.height);
        
    }

    draw(){
        push();
            //Mouse Hesaplamaları Çizim İşlemlerini Bunlara Göre Yapıyoruz.
            this.area_mouse_x = mouseX - (windowWidth/2 - this.width/2);
            this.area_mouse_y = mouseY - (windowHeight/2 - this.height/2);
            this.p_area_mouse_x = pmouseX - (windowWidth/2 - this.width/2);
            this.p_area_mouse_y = pmouseY - (windowHeight/2 - this.height/2);

            //Tanımsız Argüman Göndermemek için Mouse Değişkenlerini Kontrol Ediyoruz.
            if(this.area_mouse_x <= 0){
                this.area_mouse_x = 0;
            }
            if(this.area_mouse_x >= this.width){
                this.area_mouse_x = this.width;
            }
            if(this.area_mouse_y <= 0){
                this.area_mouse_y = 0;
            }
            if(this.area_mouse_y >= this.height){
                this.area_mouse_y = this.height;
            }
            if(this.p_area_mouse_x <= 0){
                this.p_area_mouse_x = 0;
            }
            if(this.p_area_mouse_x >= this.width){
                this.p_area_mouse_x = this.width;
            }
            if(this.p_area_mouse_y <= 0){
                this.p_area_mouse_y = 0;
            }
            if(this.p_area_mouse_y >= this.height){
                this.p_area_mouse_y = this.height;
            }

            //Beyaz Arkaplan Çizimi
            noStroke();
            rect(windowWidth/2-this.width/2,windowHeight/2-this.height/2,this.width,this.height);

            
            //Deneme katman çizimi
            this.frames[0].noStroke();
                if (mouse_clicked == true) {
                    push();
                        this.frames[0].fill(0,0,0);
                        this.frames[0].stroke(0,0,0);
                        this.frames[0].strokeWeight(1);
                        this.frames[0].line(this.area_mouse_x, this.area_mouse_y, this.p_area_mouse_x, this.p_area_mouse_y);
                    pop();
                }

            image(this.frames[0],windowWidth/2 - this.width/2,windowHeight/2 - this.height/2);
            
            
            /*
            this.area.noStroke();

            switch(tool_bar.current_selecting_tool){
                case 'none':
                break;
    
                case 'pencil':
                    //Kalem ile Çizim
                    if (mouse_clicked == true) {
                        push();
                            this.area.fill(0,0,0);
                            this.area.stroke(0,0,0);
                            this.area.strokeWeight(1);
                            this.area.line(this.area_mouse_x, this.area_mouse_y, this.p_area_mouse_x, this.p_area_mouse_y);
                        pop();
                    }
                break;
    
                    case 'brush':
                        //Fırça ile çizilen
                        if (mouse_clicked == true) {
                            push();
                                this.area.fill(0,0,0);
                                this.area.stroke(0,0,0);
                                this.area.strokeWeight(5);
                                this.area.line(this.area_mouse_x, this.area_mouse_y, this.p_area_mouse_x, this.p_area_mouse_y);
                            pop();
                        }
                    break;
    
                    case 'eraser':
                        //Silgi
                        if (mouse_clicked == true) {
                            push();
                                this.area.fill(255,255,255);
                                this.area.stroke(255,255,255);
                                this.area.strokeWeight(10);
                                this.area.line(this.area_mouse_x, this.area_mouse_y, this.p_area_mouse_x, this.p_area_mouse_y);
                            pop();
                        }
                    break;
    
                    case 'color_picker':
                    break;
                }
    
    
                //Alanın Komple Çizimi
                image(this.area,windowWidth/2 - this.area.width/2, windowHeight/2 - this.area.height/2);
            */
           

        pop();
    }

}