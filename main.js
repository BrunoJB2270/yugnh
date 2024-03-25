canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	rover_imgTag = new Image(); 
	rover_imgTag.onload = uploadrover; 
	rover_imgTag.src = rover_image;   
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}

		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}

		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}

		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
	

/*Agregar función para mover hacia arriba */		
function up()
{
	/*Si la nave mayor o igual a 0*/
	if(rover_y >=0)
	{
		/*Agregar variable de la nave que contiene la posición actual y Disminuir 10 */
		rover_y = rover_y - 10;
		console.log("Cuando se presione la flecha arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}

/*Agregar función para mover hacia abajo */
function down()
{
	/*Si la nave menor o igual a 500*/
	if(rover_y <=500)
	{
		/*Agregar variable de la nave que contiene la posición actual y aumentar 10 */
		rover_y = rover_y + 10;
		console.log("Cuando se presione la flecha abajo,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}

/*Agregar función para mover hacia la izquierda */
function left()
{
	/*Si la nave mayor o igual a 0*/
	if(rover_x >=0)
	{
		/*Agregar variable de la nave que contiene la posición actual y disminuir 10 */
		rover_x = rover_x - 10;
		console.log("Cuando se presione la flecha izquierda,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}

/*Agregar función para mover hacia la derecha */
function right()
{
	/*Si la nave menor o igual a 700*/
	if(rover_x <=700)
	{
		/*Agregar variable de la nave que contiene la posición actual y aumentar 10 */
		rover_x = rover_x + 10;
		console.log("Cuando se presione la flecha derecha,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
}