function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('protected-content').style.display = 'block';
            fetchDataAndAnalyze();
        })
        .catch((error) => {
            alert('Erro: ' + error.message);
        });
}

window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('protected-content').style.display = 'block';
            fetchDataAndAnalyze();
        } else {
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('protected-content').style.display = 'none';
        }
    });
};
