$(document).ready(function(){
	var counter=0;
	var dt=new Date();
	var h=dt.getHours();
	var m=dt.getMinutes();
	var s=dt.getSeconds();
	var ms=dt.getMilliseconds();
	var num;
	var seconds_counter=0;
	var tick;
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

	var time_out=setInterval(function(){
		//clearInterval(timer);
		//console.log("time's up");
		timegiver();
		counterHandler();
	},1000);

	var time_ms=setInterval(function(){
		MS();
	},100);

	function timegiver(){
		dt=new Date();
		h=dt.getHours();
		m=dt.getMinutes();
		s=dt.getSeconds();
		ms=dt.getMilliseconds();
		console.log(h);
		console.log(m);
		console.log(s);
		$("#hr").html(fix(AM_PM(h)));
		$("#min").html(fix(m));
		$("#sec").html(fix(s));
		color_swap_s();
		color_swap_m();
		color_swap_h();
		tick.play();
	};

	function MS(){
		dt=new Date();
		ms=dt.getMilliseconds();
		$("#milli").html(ms);
		color_swap_ms();
	}

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
		$("#sec").css("background",color);
		$("#sec").css("color",word);
		$("#sec_s").fadeOut(100);
		$("#sec_s").fadeIn(100);
	}
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
			$("#min").css("background",color);
			$("#min").css("color",word);
		};
	}
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
			$("#hr").css("background",color);
			$("#hr").css("color",word);
		};
	}

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

	function fix(num){
		if(num<10){
			num="0"+num;
		};
		return num;
	};
	function AM_PM(num){
		if(num>12){
			num=num-12;
			$('#pm').html('PM');
			$("#pm").css("background","rgba(200,200,200,.7)");
		};
		return num;
		};
	});

