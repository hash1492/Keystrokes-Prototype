$(document).keydown(function (e) {

//Single key press
if(e.keyCode)
{
e.preventDefault();
$("#pid1").text(String.fromCharCode(e.keyCode));
}

//Ctrl + Shift + Key press
if(e.ctrlKey && e.shiftKey && e.keyCode) { 
e.preventDefault();
$("#pid1").text("ctrl + shift + " +String.fromCharCode(e.keyCode));
}

//Ctrl+ key press
if(e.ctrlKey && e.keyCode && !e.shiftKey) { 
e.preventDefault();
$("#pid1").text("ctrl + " +String.fromCharCode(e.keyCode));
}

//Shift + key press
if(e.shiftKey && e.keyCode && !e.ctrlKey) { 
e.preventDefault();
$("#pid1").text("shift + " +String.fromCharCode(e.keyCode));
 }

if(e.keyCode==32)
{e.preventDefault();
	$("#pid1").text("Space");
}


if(e.keyCode==27)
{e.preventDefault();
	$("#pid1").text("Escape");
}


if(e.keyCode==8)
{e.preventDefault();
	$("#pid1").text("Backspace");
}

if(e.keyCode==9)
{e.preventDefault();
	$("#pid1").text("Tab");
}
if(e.keyCode==13)
{e.preventDefault();
	$("#pid1").text("Enter");
}
if(e.keyCode==18)
{e.preventDefault();
	$("#pid1").text("Alt");
}

if(e.keyCode==20)
{e.preventDefault();
	$("#pid1").text("Caps Lock");
}
if(e.keyCode==33)
{e.preventDefault();
	$("#pid1").text("Page Down");
}
if(e.keyCode==34)
{e.preventDefault();
	$("#pid1").text("Page Up");
}

if(e.keyCode==35)
{e.preventDefault();
	$("#pid1").text("End");
}

if(e.keyCode==36)
{e.preventDefault();
	$("#pid1").text("Home");
}

if(e.keyCode==37)
{e.preventDefault();
	$("#pid1").text("Left Arrow");
}
if(e.keyCode==38)
{e.preventDefault();
	$("#pid1").text("Up Arrow");
}
if(e.keyCode==39)
{e.preventDefault();
	$("#pid1").text("Right Arrow");
}
if(e.keyCode==40)
{e.preventDefault();
	$("#pid1").text("Down Arrow");
}
if(e.keyCode==45)
{e.preventDefault();
	$("#pid1").text("Insert");
}
if(e.keyCode==46)
{e.preventDefault();
	$("#pid1").text("Delete");
}
if(e.keyCode==112)
{e.preventDefault();
	$("#pid1").text("F1");
}
if(e.keyCode==113)
{e.preventDefault();
	$("#pid1").text("F2");
}

if(e.keyCode==114)
{e.preventDefault();
	$("#pid1").text("F3");
}
if(e.keyCode==115)
{e.preventDefault();
	$("#pid1").text("F4");
}
if(e.keyCode==116)
{e.preventDefault();
	$("#pid1").text("F5");
}
if(e.keyCode==117)
{e.preventDefault();
	$("#pid1").text("F6");
}
if(e.keyCode==118)
{e.preventDefault();
	$("#pid1").text("F7");
}
if(e.keyCode==119)
{e.preventDefault();
	$("#pid1").text("F8");
}
if(e.keyCode==120)
{e.preventDefault();
	$("#pid1").text("F9");
}
if(e.keyCode==121)
{e.preventDefault();
	$("#pid1").text("F10");
}
if(e.keyCode==122)
{e.preventDefault();
	$("#pid1").text("F11");
}
if(e.keyCode==123)
{e.preventDefault();
	$("#pid1").text("F12");
}
if(e.keyCode==144)
{e.preventDefault();
	$("#pid1").text("Num Lock");
}
if(e.keyCode==145)
{e.preventDefault();
	$("#pid1").text("Scroll Lock");
}
if(e.keyCode==186)
{e.preventDefault();
	$("#pid1").text("Semi-colon");
}
if(e.keyCode==187)
{e.preventDefault();
	$("#pid1").text("Equal sign");
}
if(e.keyCode==188)
{e.preventDefault();
	$("#pid1").text("Comma");
}
if(e.keyCode==189)
{e.preventDefault();
	$("#pid1").text("Dash");
}
if(e.keyCode==190)
{e.preventDefault();
	$("#pid1").text("Period");
}
if(e.keyCode==191)
{e.preventDefault();
	$("#pid1").text("Forward Slash");
}
if(e.keyCode==192)
{e.preventDefault();
	$("#pid1").text("Grave Accent");
}
if(e.keyCode==219)
{e.preventDefault();
	$("#pid1").text("Open Bracket");
}
if(e.keyCode==220)
{e.preventDefault();
	$("#pid1").text("Back Slash");
}
if(e.keyCode==221)
{e.preventDefault();
	$("#pid1").text("Close Bracket");
}
if(e.keyCode==222)
{e.preventDefault();
	$("#pid1").text("Single Quote");
}

});

