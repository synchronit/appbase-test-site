	var commands = [];

	commands.push({     command : "SHOW FORMS", 
					description : "Shows all existing Forms in the Application Base" });

	commands.push({     command : "CREATE FORM PEOPLE (id number, name text, birthdate date)", 
					description : "Creates a Form about people with basic data" });

	commands.push({     command : "SHOW FORMS -F PEOPLE", 
					description : "Shows original FQL command that created this form" });

	commands.push({     command : "DELETE FORM PEOPLE", 
					description : "Deletes the Form called PEOPLE" });
