"use strict";
console.log( "all-notes-contr.js" );

app.controller("NoteControl", function($scope, NoteFactory) {

	$scope.notes = [];

	const showAllNotes = () => {
		NoteFactory.getAllNotes()
		.then((notes) => {
			console.log( "showAllNotes from controller", notes );
			$scope.notes = notes;
		});
	};

	showAllNotes();

	$scope.deleteNote = (id) => {
		NoteFactory.deleteNote(id)
		.then(() => {
			showAllNotes();
		});
	};

});
