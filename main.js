var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_y = 10;
var player_x = 10;
var player_object = "";
var blockObject = "";
//faces
var avengerFaces = ["hulk_face.png","ironman_face.png","thor_face.png","spiderman_face.png"];

var faceImage = avengerFaces[ranNum];

var ranNum = Math.floor(Math.random() * 4);
//bodies
var avengerBodies = ["hulk_body.png","ironman_body.png","thor_body.png","spiderman_body.png"];

var ranNum1 = Math.floor(Math.random() * 4);

var bodyImage = avengerBodies[ranNum1];

//legs
var avengerLegs = ["hulk_legs.png","ironman_legs.png","thor_legs.png","spiderman_legs.png"];

var ranNum2 = Math.floor(Math.random() * 4);

var legImage = avengerLegs[ranNum2];
//right hands
var avengerRight_Hands = ["hulk_right_hands.png","ironman_right_hands.png","thor_right_hands.png","spiderman_right_hands.png"];

var ranNum3 = Math.floor(Math.random() * 4);

var rhandImage = avengerRight_Hands[ranNum];
//left hands
var avengerLeft_Hands = ["hulk_left_hands.png","ironman_left_hands.png","thor_left_hands.png","spiderman_left_hands.png", "captain_america_left_hand.png"];

var ranNum4 = Math.floor(Math.random() * 4);

var lhandImage = avengerLeft_Hands[ranNum];



function player_update() 
{ fabric.Image.fromURL("player.png", function(Img) 
{ player_object = Img; 
    player_object.scaleToWidth(150); 
    player_object.scaleToHeight(140); 
    player_object.set({ 
        top:player_x, 
        left:player_y 
    }); 
    canvas.add(player_object); 
});} 


function blockImage(get_image) 
{ 
    fabric.Image.fromURL(get_image, function(Img){ 
        blockObject = Img; 
        blockObject.scaleToWidth(block_image_width); 
        blockObject.scaleToHeight(block_image_height); 
        blockObject.set({ 
            top:player_x, 
            left:player_y 
        }); 
        canvas.add(blockObject); 
    }); }



    window.addEventListener("keydown", myKeydown);

    function myKeydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (e.shiftkey == true && keyPressed == '80')
        {
            console.log("P and Shift pressed together");
            block_image_width = block_image_width + 10;
            block_image_height = block_image_height + 10
            document.getElementById("currentWidth").innerHTML = block_image_width;
            document.getElementById("currentHeight").innerHTML = block_image_height;
        }
    
        if (e.shiftkey == true && keyPressed == '77')
        {
            console.log("M and Shift pressed together");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10
            document.getElementById("currentWidth").innerHTML = block_image_width;
            document.getElementById("currentHeight").innerHTML = block_image_height;
        }
    
        if (keyPressed == "38")
        {
           up();
           console.log("up");
        }
    
        if (keyPressed == "40")
        {
           down();
           console.log("Down");
        }
    
        if (keyPressed == "39")
        {
           right();
           console.log("Right");
        }
    
        if (keyPressed == "37")
        {
           left();
           console.log("Left");
        }
    
        if (keyPressed == "70")
        {
           blockImage(faceImage);
           console.log("F");
        }
    
        if (keyPressed == "66")
        {
           blockImage(bodyImage);
           console.log("B");
        }

        if (keyPressed == "76")
        {
           blockImage(legImage);
           console.log("L");
        }

        if (keyPressed == "82")
        {
           blockImage(rhandImage);
           console.log("R");
        }

        if (keyPressed == "72")
        {
           blockImage(lhandImage);
           console.log("H");
        }
    }

    function Up()
{
	if(player_y >= 0)
	{
		player_y = player_y - block_image_height;
		console.log("block_image_height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+ player_y);
		canvas.remove(player_object);
		playerUpdate();
	}
}

function up()
{
	if(player_y >= 0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <= 800)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x > 0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <= 850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
