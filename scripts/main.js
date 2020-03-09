var mainCanvas;

let title_bar;
let button_new_draw;
let button_close_draw;

let tool_bar;

let properties_bar;

let frame_bar;

let draw_area;
let is_draw_area_exists = false;
let is_draw_create_window_exists = false;

var mouse_clicked = false;
var mouse_one_clicked = false;

function setup() {
    mainCanvas = createCanvas(windowWidth, windowHeight);
    title_bar = new TitleBar(0, 0, windowWidth, 48);
    button_config = new Button(16, 12, 112, 24, "rounded", color(255, 255, 0),"Ayarlar");
    button_new_draw = new Button(144, 12, 112, 24, "rounded", color(255, 255, 0),"Yeni Çizim");
    button_close_draw = new Button(272, 12, 112, 24, "rounded", color(255, 255, 0), "Çizimi Kapat");
    button_save = new Button(400, 12, 112, 24, "rounded", color(255, 255, 0), "Çizimi Kaydet");
    tool_bar = new ToolBar(0,0,144,windowHeight);
    properties_bar = new PropertiesBar();
    frame_bar = new FrameBar();
}

function draw() {
  background(71, 71, 71);
  
  create_new_draw_area();
  close_draw();



  if(is_draw_area_exists == true){
    draw_area.draw();
  }

  tool_bar.draw();
  properties_bar.draw();
  frame_bar.draw();

  if(is_draw_create_window_exists == true){
    draw_create_window.draw();
  }

  title_bar.draw();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
    mouse_clicked = true;
}

function mouseReleased(){
    mouse_clicked = false;
    mouse_one_clicked = false;
}

function create_new_draw_area(){
  if(button_new_draw.click() && is_draw_create_window_exists == false){
    draw_create_window = new DrawCreateWindow();
    is_draw_create_window_exists = true;
  }
}

function close_draw(){
  if(button_close_draw.click()){
    is_draw_area_exists = false;
  }
}

/*
document.oncontextmenu = function() {
  return false;
}
*/

function mouseClicked() {
  mouse_one_clicked = true;
}