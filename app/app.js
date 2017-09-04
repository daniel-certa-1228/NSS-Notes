"use strict";
console.log( "app.js" ); 

const app = angular.module("NotesApp", ['ngRoute']);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/note-list.html',
		controller: 'NoteControl'
	});
});

app.filter('reverse', function() {
  return function(notes) {
    return notes.slice().reverse();
  };
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL,
		projectId: creds.projectId,
		storageBucket: creds.storageBucket,
		messagingSenderId: creds.messagingSenderId
	};
	firebase.initializeApp(authConfig);
});