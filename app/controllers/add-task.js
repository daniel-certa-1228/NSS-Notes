"use strict";
console.log( "add-task.js" );

app.controller("AddControl", function($scope, NoteFactory, $location){

	$scope.noteContent = {
		note: "",
		uid: ""
	};

	$scope.addNewNote = () => {
		NoteFactory.addNewNote($scope.noteContent)
		.then((data) => {
			$location.url("/");
		});
	};

});

