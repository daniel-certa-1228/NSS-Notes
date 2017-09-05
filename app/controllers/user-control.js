"use strict";
console.log( "user-control.js" );

app.controller("UserCtrl", function ($scope, $window, UserFactory, $location) {
	console.log( "UserControl is loaded" );

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		console.log( "you clicked Register" );
		UserFactory.register({email: $scope.account.email, password: $scope.account.password
		})
		.then((userData) => {
			console.log( "User Data", userData);
			$scope.logIn();
		})
		.catch((error) => {
			console.log( "error", error );
		});
	};

	$scope.logIn = () => {
		UserFactory.logIn($scope.account)
		.then(() => {
			$window.location.href="#!/";
		});
	};

	$scope.loginGoogle = () => {
		console.log( "you clicked on google" );
		UserFactory.authWithProvider()
		.then((result) => {
			let user = result.uid;
			$location.path('/');
			$scope.$apply();
		}).catch((error) => {
			console.log( "error with google" );
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log( "error", errorCode, errorMessage );
		});
	};
});