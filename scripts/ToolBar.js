class ToolBar{

    constructor(position_x, position_y, width, height){
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height;

        this.current_selecting_tool = 'none';

        this.tool_bar_item_mouse = new ToolBarItem(16, 64, 48, 48,'data/mouse_image.png');
        this.tool_bar_item_pencil = new ToolBarItem(16, 64*2, 48, 48,'data/pencil_image.png');
        this.tool_bar_item_brush = new ToolBarItem(16+64, 64*2, 48, 48,'data/brush_image.png');
        this.tool_bar_item_eraser = new ToolBarItem(16, 64*3, 48, 48,'data/eraser_image.png');
        this.tool_bar_item_color_picker = new ToolBarItem(16+64, 64*3, 48, 48,'data/color_picker_image.png');
    }

    draw(){
        push();
            noStroke();
            fill(27,24,17,200);
            rect(this.position_x,this.position_y, this.width, windowHeight);

            this.tool_bar_item_mouse.draw();
            this.tool_bar_item_pencil.draw();
            this.tool_bar_item_brush.draw();
            this.tool_bar_item_eraser.draw();
            this.tool_bar_item_color_picker.draw();

            //ToolBar Kontrolü
            if(this.tool_bar_item_mouse.click()){
                this.current_selecting_tool = 'none';
            }
            
            if(this.tool_bar_item_pencil.click()){
                this.current_selecting_tool = 'pencil';
            }

            if(this.tool_bar_item_brush.click()){
                this.current_selecting_tool = 'brush';
            }

            if(this.tool_bar_item_eraser.click()){
                this.current_selecting_tool = 'eraser';
            }

        pop();
    }

}