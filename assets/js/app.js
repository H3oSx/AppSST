function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Acceso exitoso, puedes acceder a la información del usuario en result.user
            const user = result.user;
            console.log(user);

            // Ejemplo de cómo agregar información del usuario a Firestore
            db.collection('usuarios').doc(user.uid).set({
                nombre: user.displayName,
                email: user.email
            }).then(() => {
                console.log('Información del usuario agregada a Firestore.');
            }).catch((error) => {
                console.error('Error al agregar información del usuario a Firestore:', error);
            });
        })
        .catch((error) => {
            // Manejar errores
            console.error('Error al iniciar sesión con Google:', error.message);
        });
}
