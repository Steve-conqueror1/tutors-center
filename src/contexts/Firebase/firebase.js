import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  //   Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => {
    this.auth.signOut();
    console.log('signed out');
  };

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // Database API: Cloud Firestore
  // Writing Data
  doAddUserDetail = async (usersData) => {
    try {
      await this.db.collection('users').add({ ...usersData });
    } catch (error) {
      console.log('error...................', error);
    }
  };

  //Storing image in storage
  doStoreImage = async (fileName, file) => {
    const storageRef = this.storage.ref();
    const imagesRef = storageRef.child(`images/tutors/${fileName}`);

    // let uploadTask;
    let uploadTask = await imagesRef.put(file);

    let url = await uploadTask.ref.getDownloadURL();
    return url;
  };

  //Reading Data
  doReadUserDetail = () => {
    const data = [];
    this.db
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
      });
    return data;
  };
}

export default Firebase;
