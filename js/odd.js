$( "#but1" ).click(function() {
		/*var resp = calc(0);
		ifCorrect("#but1",resp)	*/
		exec("#but1",0);
});
$( "#but2" ).click(function() {
		exec("#but2",1);	
});
$( "#but3" ).click(function() {
		exec("#but3",2);
});
$( "#but4" ).click(function() {
		exec("#but4",3);
});
$( "#but5" ).click(function() {
		exec("#but5",4);	
});
$( "#but6" ).click(function() {
		exec("#but6",5);
});
$( "#but7" ).click(function() {
		exec("#but7",6);	
});
$( "#but8" ).click(function() {
		exec("#but8",7);
});
$( "#but9" ).click(function() {
		exec("#but9",8);
});
//-------------
$( "#buth" ).click(function() {
		changeNum();
		console.log("working");
});
$( "#butstart" ).click(function() {
		denomInit(changing);
		numInit(changing2);
		started = true;
		console.log("Butstart working");
});
/*$( document ).click(function() {
  $( "#butstart" ).effect( "shake" );
});*/
function exec(id, num){
	if (butStat[num] && (life > 0) && started) {
		var resp = calc(num);
		ifCorrect(id,resp)	
		butStat[num] = false;
	}else if(life < 1){
		alert("Game Over! Your score is: "+score);
		clearInterval(denomHandler);
		clearInterval(numHandler);
		changing = false;
		changing2 = false;
		score = 0;
		life = 5;
		i = 1;
		while (i <= 5){
			$("#gm_life"+i).removeClass().addClass("gm_life");
			i++;
		}
		$("#gm_score").empty();
		$("#gm_score").append(score);
		started = false;
	}else if (!started){
		//animate start button
		//$("#butstart").toggle('bounce',500);
	    //$("#butstart").toggle( "bounce", { times: 3 }, "slow" );
	    
	    	$("#butstart").effect( "bounce", {times:3}, 300 );
	    

	};
}

function ifCorrect(id,resp){
	if (resp) {
		$(id).removeClass().addClass("gm_num "+classes[7]+" gm_seleccted");
	} else{
		$(id).removeClass().addClass("gm_num "+classes[8]+" gm_selected");
	};
}
var started = false;
var denom = 0;
var nums = [];
var buts = ["but1","but2","but3","but4",
			"but5","but6","but7","but8","but9"];
var changing = false;
var changing2 = false;
var denomHandler;
var numHandler;
var classes = ["gm_blue","gm_red","gm_orange","gm_yellow",
			"gm_purple","gm_turq","gm_green","gm_asphalt","gm_grey"];
var score = 0;
var life = 5;
var butStat = [true,true,true,true,true,true,true,true,true];

function calc(i){
	if (nums[i]%denom == 0) {
		score = score + (nums[i] / denom);
		$("#gm_score").empty();
		$("#gm_score").append(score);
  		$( "#gm_score" ).effect( "shake",{times:3},300 );

		return true;
	}else{
		setLife(life);
		life = life - 1;
		return false;
	};
}

function setLife(pos){
	$("#gm_life"+pos).removeClass().addClass("gm_dead");
}

function denomInit(state){
	if (!state) {  
		changeDenom();
		denomHandler=setInterval(function(){changeDenom()},5000);
		changing = true;
	}
}
function numInit(state){
	if (!state) {  
		changeNum();
		numHandler=setInterval(function(){changeNum()},10000);
		changing2 = true;
	}
}

function changeDenom(){ 
	
		console.log("working");
		$("#denom").empty();
		denom = Math.floor((Math.random() * 9) + 1);
		$("#denom").append(denom);
    	/*setTimeout(function(){
	    changeDenom(false);},500);*/
		//denomHandler=setInterval(function(){changeDenom(true)},1000);
	    
}
function changeNum(){
	for (var i = 0; i < 9; i++) {
		nums[i] = Math.floor((Math.random() * 100) + 1);
		$("#"+buts[i]).empty();
		$("#"+buts[i]).append(nums[i]);

		$("#"+buts[i]).removeClass().addClass("gm_num "+classes[Math.floor((Math.random() * 7))]);

		//console.log(Math.floor((Math.random() * 7) ));
	};

	butStat = [true,true,true,true,true,true,true,true,true];
};
/*var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}*/

//clearInterval(myVar);
//}
