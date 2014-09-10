$(document).keydown(function (e) {

	e.preventDefault();

	$.getJSON( 'keyconfig.json' , function( result ){

		var keyCharacter=String.fromCharCode(e.keyCode);

		//Single key press
		if(e.keyCode) {
			$("#keyPress").text(result.key[keyCharacter]);
		}

		//Only Ctrl is pressed
		if(e.ctrlKey && !e.shiftKey && e.keyCode===17) {
			$("#keyPress").text("ctrl");
		}

		//Only Shift is pressed
		if(e.shiftKey && !e.ctrlKey && e.keyCode===16) {
			$("#keyPress").text("shift");
		}

		//Ctrl+ key press
		if(e.ctrlKey && ((e.keyCode>=8 && e.keyCode<=16) || (e.keyCode>=18 && e.keyCode<=222)) && !e.shiftKey) { 
			$("#keyPress").text("ctrl + " +result.key[keyCharacter]);
		}

		//Shift + key press
		if(e.shiftKey && ((e.keyCode>=8 && e.keyCode<=15) || (e.keyCode>=17 && e.keyCode<=222)) && !e.ctrlKey) { 
			$("#keyPress").text("shift + " +result.key[keyCharacter]);
		}

		//Ctrl + Shift press
		if(e.ctrlKey && e.shiftKey && (e.keyCode===16 || e.keyCode===17)) { 
			$("#keyPress").text("ctrl + shift ");
		}

		//Ctrl + Shift + Key press
		if(e.ctrlKey && e.shiftKey && ((e.keyCode>=8 && e.keyCode<=15) || (e.keyCode>=18 && e.keyCode<=222)) ) { 
			$("#keyPress").text("ctrl + shift + " +result.key[keyCharacter]);
		}

		if(e.keyCode===32) {
			$("#keyPress").text("Space");
		}

		if(e.keyCode===27) {
			$("#keyPress").text("Escape");
		}

		if(e.keyCode===8) {
			$("#keyPress").text("Backspace");
		}

		if(e.keyCode===9) {
			$("#keyPress").text("Tab");
		}

		if(e.keyCode===13) {
			$("#keyPress").text("Enter");
		}
		
		if(e.keyCode===18) {
			$("#keyPress").text("Alt");
		}

		if(e.keyCode===20) {
			$("#keyPress").text("Caps Lock");
		}
		
		if(e.keyCode===33) {
			$("#keyPress").text("Page Down");
		}
		
		if(e.keyCode===34) {
			$("#keyPress").text("Page Up");
		}

		if(e.keyCode===35) {
			$("#keyPress").text("End");
		}

		if(e.keyCode===36) {
			$("#keyPress").text("Home");
		}

		if(e.keyCode===37) {
			$("#keyPress").text("Left Arrow");
		}
		
		if(e.keyCode===38) {
			$("#keyPress").text("Up Arrow");
		}
		
		if(e.keyCode===39) {
			$("#keyPress").text("Right Arrow");
		}
		
		if(e.keyCode===40) {
			$("#keyPress").text("Down Arrow");
		}
		
		if(e.keyCode===45) {
			$("#keyPress").text("Insert");
		}
		
		if(e.keyCode===46) {
			$("#keyPress").text("Delete");
		}
		
		if(e.keyCode===112) {
			$("#keyPress").text("F1");
		}
		
		if(e.keyCode===113) {
			$("#keyPress").text("F2");
		}

		if(e.keyCode===114) {
			$("#keyPress").text("F3");
		}
		
		if(e.keyCode===115) {
			$("#keyPress").text("F4");
		}
		
		if(e.keyCode===116) {
			$("#keyPress").text("F5");
		}
		
		if(e.keyCode===117) {
			$("#keyPress").text("F6");
		}
		
		if(e.keyCode===118) {
			$("#keyPress").text("F7");
		}
		
		if(e.keyCode===119) {
			$("#keyPress").text("F8");
		}
		
		if(e.keyCode===120) {
			$("#keyPress").text("F9");
		}
		
		if(e.keyCode===121) {
			$("#keyPress").text("F10");
		}
		
		if(e.keyCode===122) {
			$("#keyPress").text("F11");
		}
		
		if(e.keyCode===123) {
			$("#keyPress").text("F12");
		}
		
		if(e.keyCode===144) {
			$("#keyPress").text("Num Lock");
		}
		
		if(e.keyCode===145) {
			$("#keyPress").text("Scroll Lock");
		}
		
		if(e.keyCode===186) {
			$("#keyPress").text("Semi-colon");
		}
		
		if(e.keyCode===187) {
			$("#keyPress").text("Equal sign");
		}
		
		if(e.keyCode===188) {
			$("#keyPress").text("Comma");
		}
		
		if(e.keyCode===189) {
			$("#keyPress").text("Dash");
		}
		
		if(e.keyCode===190) {
			$("#keyPress").text("Period");
		}
		
		if(e.keyCode===191) {
			$("#keyPress").text("Forward Slash");
		}
		
		if(e.keyCode===192) {
			$("#keyPress").text("Grave Accent");
		}
		
		if(e.keyCode===219) {
			$("#keyPress").text("Open Bracket");
		}
		
		if(e.keyCode===220) {
			$("#keyPress").text("Back Slash");
		}
		
		if(e.keyCode===221) {
			$("#keyPress").text("Close Bracket");
		}
		
		if(e.keyCode===222) {
			$("#keyPress").text("Single Quote");
		}
	});

});