"use strict";
console.log( "user-factory.js" );

app.factory("UserFactory", function($q, $http) {
	//set currentUser default to null
	let currentUser = null;

	const isAuthenticated = () => {
		console.log( "UserFactory: isAuthenticated" );
		return $q((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) =>{
				if(user){
					currentUser = user.uid;
					console.log( "user", user.uid );
					resolve(true);
				}  else  {
					resolve(false);
				}
			});
		});
	};

	const getCurrentUser = () => {
		return currentUser;
	};
	//setup app to log in with email and password
	const logIn = (userObj) => {
		return firebase.auth().
		signInWithEmailAndPassword(userObj.email, userObj.email, userObj.password)
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log( "error", errorCode, errorMessage );
		});
	};

	const logout = (userObj) => {
		return firebase.auth().signOut();
	};
	//setup app to register new users
	const register = (userObj) => {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch((error) => {
			let errorCode = error.code;
            let errorMessage = error.message;
            console.log( "error", errorCode, errorMessage );
		});
	};

	//set up google auth
	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider = () => {
		return firebase.auth().signInWithPopup(provider);
	};

	return{isAuthenticated, logIn, logout, register, authWithProvider};


});