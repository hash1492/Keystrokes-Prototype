$(document).keydown(function (e) {

	e.preventDefault();

	$.getJSON( 'keyconfig.json' , function( result ){

		var abc=String.fromCharCode(e.keyCode);

		//Single key press
		if(e.keyCode) {
			$("#pid1").text(result.key[abc]);
		}

		//Only Ctrl is pressed
		if(e.ctrlKey && !e.shiftKey && e.keyCode==17) {
			$("#pid1").text("ctrl");
		}

		//Only Shift is pressed
		if(e.shiftKey && !e.ctrlKey && e.keyCode==16) {
			$("#pid1").text("shift");
		}

		//Ctrl+ key press
		if(e.ctrlKey && ((e.keyCode>=8 && e.keyCode<=16) || (e.keyCode>=18 && e.keyCode<=222)) && !e.shiftKey) { 
			$("#pid1").text("ctrl + " +result.key[abc]);
		}

		//Shift + key press
		if(e.shiftKey && ((e.keyCode>=8 && e.keyCode<=15) || (e.keyCode>=17 && e.keyCode<=222)) && !e.ctrlKey) { 
			$("#pid1").text("shift + " +result.key[abc]);
		}

		//Ctrl + Shift press
		if(e.ctrlKey && e.shiftKey && (e.keyCode==16 || e.keyCode==17)) { 
			$("#pid1").text("ctrl + shift ");
		}

		//Ctrl + Shift + Key press
		if(e.ctrlKey && e.shiftKey && ((e.keyCode>=8 && e.keyCode<=15) || (e.keyCode>=18 && e.keyCode<=222)) ) { 
			$("#pid1").text("ctrl + shift + " +result.key[abc]);
		}

		if(e.keyCode==32) {
			$("#pid1").text("Space");
		}

		if(e.keyCode==27) {
			$("#pid1").text("Escape");
		}

		if(e.keyCode==8) {
			$("#pid1").text("Backspace");
		}

		if(e.keyCode==9) {
			$("#pid1").text("Tab");
		}

		if(e.keyCode==13) {
			$("#pid1").text("Enter");
		}
		
		if(e.keyCode==18) {
			$("#pid1").text("Alt");
		}

		if(e.keyCode==20) {
			$("#pid1").text("Caps Lock");
		}
		
		if(e.keyCode==33) {
			$("#pid1").text("Page Down");
		}
		
		if(e.keyCode==34) {
			$("#pid1").text("Page Up");
		}

		if(e.keyCode==35) {
			$("#pid1").text("End");
		}

		if(e.keyCode==36) {
			$("#pid1").text("Home");
		}

		if(e.keyCode==37) {
			$("#pid1").text("Left Arrow");
		}
		
		if(e.keyCode==38) {
			$("#pid1").text("Up Arrow");
		}
		
		if(e.keyCode==39) {
			$("#pid1").text("Right Arrow");
		}
		
		if(e.keyCode==40) {
			$("#pid1").text("Down Arrow");
		}
		
		if(e.keyCode==45) {
			$("#pid1").text("Insert");
		}
		
		if(e.keyCode==46) {
			$("#pid1").text("Delete");
		}
		
		if(e.keyCode==112) {
			$("#pid1").text("F1");
		}
		
		if(e.keyCode==113) {
			$("#pid1").text("F2");
		}

		if(e.keyCode==114) {
			$("#pid1").text("F3");
		}
		
		if(e.keyCode==115) {
			$("#pid1").text("F4");
		}
		
		if(e.keyCode==116) {
			$("#pid1").text("F5");
		}
		
		if(e.keyCode==117) {
			$("#pid1").text("F6");
		}
		
		if(e.keyCode==118) {
			$("#pid1").text("F7");
		}
		
		if(e.keyCode==119) {
			$("#pid1").text("F8");
		}
		
		if(e.keyCode==120) {
			$("#pid1").text("F9");
		}
		
		if(e.keyCode==121) {
			$("#pid1").text("F10");
		}
		
		if(e.keyCode==122) {
			$("#pid1").text("F11");
		}
		
		if(e.keyCode==123) {
			$("#pid1").text("F12");
		}
		
		if(e.keyCode==144) {
			$("#pid1").text("Num Lock");
		}
		
		if(e.keyCode==145) {
			$("#pid1").text("Scroll Lock");
		}
		
		if(e.keyCode==186) {
			$("#pid1").text("Semi-colon");
		}
		
		if(e.keyCode==187) {
			$("#pid1").text("Equal sign");
		}
		
		if(e.keyCode==188) {
			$("#pid1").text("Comma");
		}
		
		if(e.keyCode==189) {
			$("#pid1").text("Dash");
		}
		
		if(e.keyCode==190) {
			$("#pid1").text("Period");
		}
		
		if(e.keyCode==191) {
			$("#pid1").text("Forward Slash");
		}
		
		if(e.keyCode==192) {
			$("#pid1").text("Grave Accent");
		}
		
		if(e.keyCode==219) {
			$("#pid1").text("Open Bracket");
		}
		
		if(e.keyCode==220) {
			$("#pid1").text("Back Slash");
		}
		
		if(e.keyCode==221) {
			$("#pid1").text("Close Bracket");
		}
		
		if(e.keyCode==222) {
			$("#pid1").text("Single Quote");
		}
	});

});