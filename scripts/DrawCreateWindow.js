class DrawCreateWindow{

    constructor(){
        this.position_x = windowWidth/2;
        this.position_y = windowHeight/2;
        this.width = 480;
        this.height = 260;

        this.input_draw_area_width = createInput();
        this.input_draw_area_height = createInput();
        this.button_confirm = new Button(this.position_x-this.width/2+16, this.position_y-this.height/2+112, 112, 24, "rounded", color(255, 255, 255), "Onayla");
        this.button_close = new Button(this.position_x-this.width/2+16, this.position_y-this.height/2+112+32, 112, 24, "rounded", color(255, 255, 255), "Kapat");
        
    }

    draw(){
        this.position_x = windowWidth/2;
        this.position_y = windowHeight/2;
        push();
            fill(27,24,17,200);
            rect(this.position_x-this.width/2,this.position_y-this.height/2,this.width,this.height);

            this.input_draw_area_width.position(this.position_x-this.width/2+16,this.position_y-this.height/2+48);
            this.input_draw_area_height.position(this.position_x-this.width/2+16,this.position_y-this.height/2+80);
            this.button_confirm.position_x = this.position_x-this.width/2+16;
            this.button_confirm.position_y = this.position_y-this.height/2+112;
            this.button_close.position_x = this.position_x-this.width/2+16;
            this.button_close.position_y = this.position_y-this.height/2+112+32;
            //this.button_confirm.position(this.position_x-this.width/2+16,this.position_y-this.height/2+112);

            if(this.button_confirm.click()){
                this.check_settings();
            }

            if(this.button_close.click()){
                is_draw_create_window_exists = false;
                this.input_draw_area_width.remove();
                this.input_draw_area_height.remove();
            }
            

            //this.button_confirm.mousePressed(this.check_settings());
            
            textAlign(LEFT,CENTER);
            textSize(12);
            textStyle(BOLD);
            fill(255,255,255);
            text('piksel',this.position_x-this.width/2+16+186,this.position_y-this.height/2+48+12);
            text('piksel',this.position_x-this.width/2+16+186,this.position_y-this.height/2+80+12);

            textAlign(LEFT,CENTER);
            textSize(20);
            textStyle(BOLD);
            fill(210,105,30);
            text('Çizim Ayarları',this.position_x-this.width/2+16,this.position_y-this.height/2+24);

            this.button_confirm.draw();
            this.button_close.draw();
        pop();
    }

    check_settings(){
        this.value_draw_area_width = this.input_draw_area_width.value();
        this.value_draw_area_height = this.input_draw_area_height.value();

        if(this.value_draw_area_width == int(this.value_draw_area_width) && this.value_draw_area_height == int(this.value_draw_area_height) ){
            this.create_draw_window();
        }else{
            push();          
                textAlign(LEFT,CENTER);
                textSize(12);
                textStyle(BOLD);
                fill(255,255,255);
                text("Hatalı Ayar...",this.position_x-this.width/2+16,this.position_y-this.height/2+112+44);
            pop();
        }
    }

    create_draw_window(){
        draw_area = new DrawArea(this.value_draw_area_width,this.value_draw_area_height);
        is_draw_area_exists = true;
        this.input_draw_area_width.remove();
        this.input_draw_area_height.remove();
        is_draw_create_window_exists = false;
        tool_bar.current_selecting_tool = 'none';
    }

}