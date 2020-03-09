class FrameBar{

    constructor(){

        this.button_new_frame = new Button(16, windowHeight-144 + 16, 112, 24, "rounded", color(255, 255, 0), "Yeni Kare");
        this.button_copy_frame = new Button(16, windowHeight-144 + 40 + 16, 112, 24, "rounded", color(255, 255, 0), "Kareyi Çoğalt");

    }

    draw(){
        push();
            fill(0,0,0);
            rect(0,windowHeight-144,windowWidth,144);

            this.button_new_frame.draw();
            this.button_copy_frame.draw();

            this.add_one = false;
            if(this.button_new_frame.one_click() && is_draw_area_exists == true ){
                draw_area.frames.push(createGraphics(draw_area.width,draw_area.height));
                print(draw_area.frames.length);
            }
        pop();
    }

}