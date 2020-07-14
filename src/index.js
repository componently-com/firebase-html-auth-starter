import firebase from "firebase";
import * as firebaseui from "firebaseui";
import firebaseConfig from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start("#firebaseui-login-container", {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ]
});