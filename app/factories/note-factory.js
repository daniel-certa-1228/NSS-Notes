"use strict";
console.log( "note-factory.js" );

app.factory("NoteFactory", function($q, $http, FBCreds) {

	const getAllNotes = () => {
		let notes = [];
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/notes.json`)
			.then((noteObj) => {
				let noteCollection = noteObj.data;
				Object.keys(noteCollection).forEach((key) => {
					noteCollection[key].id = key;
					notes.push(noteCollection[key]);
				});
				console.log( "notes", notes );
				resolve(notes);
			})
			.catch((error) => {
				console.log( "getAllNotes error", error );
				reject(error);
			});
		});
	};

	const deleteNote = (id) => {
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/notes/${id}.json`)
			.then((response) => {
				console.log( "delete response", response );
				resolve(response);
			})
			.catch((error) => {
				console.log( "error", error );
				reject(error);
			});
		});
	};
	return {getAllNotes, deleteNote};
});