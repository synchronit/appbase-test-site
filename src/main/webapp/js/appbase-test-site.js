	function renderCommands()
	{
		for (var i=0; i<commands.length; i++)
		{
			$('#commandsDiv').append("<div class='description'>"+
										commands[i].description +
									 "</div>"+
									 "<div class='commandDiv'>"+
									   "<input   id='cmd_"+i+"'   type='text' class='commandInput' value='"+ commands[i].command +"'>"+
									   "<img class='button' src='../img/play.png' "+
									   " onmouseover='active(this)' onmouseout='inactive(this)' onclick='runCommand("+i+")'>"+
									 "</div><br/>");
		}	
	}

	function   active(img)	{		img.src = "../img/play_on.png";		}
	function inactive(img)	{		img.src = "../img/play.png";		}

	$(function() {
		renderCommands();
	});

	function runCommand (i)
	{	
		// sends the command as an anchor to the webconsole page, with a suffix (so even the same command will make a change event in the URL)
		$('#consoleDiv').attr("src", "http://dev.synchronit.com/appbase-webconsole/#" + $('#cmd_'+i).val() + "##" + new Date().valueOf() );
	}
	
