function functionLogin(){
		console.log("Coming inside login");
		var provider = new firebase.auth.GoogleAuthProvider();
		console.log("Aftre creating provider Object");
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			var loginbtn = document.getElementById("loginbtn");
			var logoutbtn = document.getElementById("logoutbtn");
			loginbtn.style.display = "none";
			logoutbtn.style.display = "block";
		
			// ...
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			console.log('errorCode:'+errorCode);
			console.log('errorMessage:'+errorMessage);
			console.log('email:'+email);
			console.log('credential:'+credential);
		});
}

function functionSignOff(){
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
		var loginbtn = document.getElementById("loginbtn");
		var logoutbtn = document.getElementById("logoutbtn");
		loginbtn.style.display = "block";
		logoutbtn.style.display = "none";
		console.log('Sign-out successful.');
	}).catch(function(error) {
		// An error happened.
		console.log(error);
	});
}