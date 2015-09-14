$(document).ready(function(){
	// variables for the time
	var counter=0;
	var dt=new Date();
	var h=dt.getHours();
	var m=dt.getMinutes();
	var s=dt.getSeconds();
	var ms=dt.getMilliseconds();
	var num;
	var seconds_counter=0;
	var tick;

	// sound for clock
	tick=document.createElement('audio');
 	tick.setAttribute('src','tick.mp3');

 		$("#hr").css("background","black");
		$("#hr").css("color","white");
		$("#min").css("background","black");
		$("#min").css("color","white");
		$("#sec").css("background","black");
		$("#sec").css("color","white");
		$("#ms").css("background","black");
		$("#ms").css("color","white");

	//this tells the time 
	var time_out=setInterval(function(){
		timegiver();
		counterHandler();
	},1000);
	//this is for the milliseconds
	var time_ms=setInterval(function(){
		MS();
	},250);

	//main time function
	function timegiver(){
		dt=new Date();
		h=dt.getHours();
		m=dt.getMinutes();
		s=dt.getSeconds();
		ms=dt.getMilliseconds();
		console.log(h);
		console.log(m);
		console.log(s);
		$("#h").html(fix(AM_PM(h)));
		$("#m").html(fix(m));
		$("#s").html(fix(s));
		color_swap_s();
		color_swap_m();
		color_swap_h();
		tick.play();
	};

	//adds milliseconds
	function MS(){
		dt=new Date();
		ms=dt.getMilliseconds();
		$("#milli").html(fix_MS(ms));
		color_swap_ms();
	}

	//alternates colors for the dots
	function counterHandler(){
		if(s%2===0){
			seconds_counter++;
			$(".dots").css("background","black");
			$(".dots").css("color","white");
		}else{
			$(".dots").css("background","white");
			$(".dots").css("color","black");
			seconds_counter=0;
		}
	};

	//changes color for seconds
	function color_swap_s(){
		//defining colors for the background
		r=Math.floor((Math.random()*255));
		g=Math.floor((Math.random()*255));
		b=Math.floor((Math.random()*255));
		//defining colors for the words
		rc=Math.floor((Math.random()*255));
		gc=Math.floor((Math.random()*255));
		bc=Math.floor((Math.random()*255));
		//combined colors in rgb format
		color="rgb("+r+","+g+","+b+")";
		word="rgb("+rc+","+gc+","+bc+")";
		//color changer
		$("#s").fadeOut(200);
		$("#s").fadeIn(200);
		$("#sec").css("background",color);
		$("#sec").css("color",word);	
	}

	//changes color for minutes
	function color_swap_m(){
		if (s===0) {
			//defining colors for the background
			r=Math.floor((Math.random()*255));
			g=Math.floor((Math.random()*255));
			b=Math.floor((Math.random()*255));
			//defining colors for the words
			rc=Math.floor((Math.random()*255));
			gc=Math.floor((Math.random()*255));
			bc=Math.floor((Math.random()*255));
			//combined colors in rgb format
			color="rgb("+r+","+g+","+b+")";
			word="rgb("+rc+","+gc+","+bc+")";
			//color changer
			$("#m").fadeOut(200);
			$("#m").fadeIn(200);
			$("#min").css("background",color);
			$("#min").css("color",word);
		};
	}

	//changes color for hours
	function color_swap_h(){
		if (m===0) {
				//defining colors for the background
			r=Math.floor((Math.random()*255));
			g=Math.floor((Math.random()*255));
			b=Math.floor((Math.random()*255));
			//defining colors for the words
			rc=Math.floor((Math.random()*255));
			gc=Math.floor((Math.random()*255));
			bc=Math.floor((Math.random()*255));
			//combined colors in rgb format
			color="rgb("+r+","+g+","+b+")";
			word="rgb("+rc+","+gc+","+bc+")";
			//color changer
			$("#h").fadeOut(200);
			$("#h").fadeIn(200);
			$("#hr").css("background",color);
			$("#hr").css("color",word);
		};
	}

		//changes color for milliseconds
		function color_swap_ms(){
				//defining colors for the background
			r=Math.floor((Math.random()*255));
			g=Math.floor((Math.random()*255));
			b=Math.floor((Math.random()*255));
			//defining colors for the words
			rc=Math.floor((Math.random()*255));
			gc=Math.floor((Math.random()*255));
			bc=Math.floor((Math.random()*255));
			//combined colors in rgb format
			color="rgb("+r+","+g+","+b+")";
			word="rgb("+rc+","+gc+","+bc+")";
			//color changer
			$("#milli").css("background",color);
			$("#milli").css("color",word);
	}

	//makes numbers display without gaps in case of single digits or 
	//double digits
	function fix(num){
		if(num<10){
			num="0"+num;
		};
		return num;
	};
	function fix_MS(num){
		if (num<100&&num>10){
			num="0"+num
		};
		if (num<100&&num<10){
			num="00"+num
		};
		return num;
	}

	//changes AM and PM
	function AM_PM(num){
		if(num>12){
			num=num-12;
			$('#pm').html('PM');
			$("#pm").css("background","rgba(200,200,200,.7)");
		};
		return num;
		};

		$("li").hover(
			function(){
			$(this).css("background", "pink")
			$(this).css("color", "purple")
			},
			function(){
			$(this).css("background", "black")
			$(this).css("color", "green")
		});

		$("li").click(function(){
			$(this).css("border-radius", "40px")
		});
	});

