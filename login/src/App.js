import React, {useState, useEffect} from 'react';
import fireBase from './firebase';
import Login from './Login';
import Homepage from './Homepage';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setpassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogIn = () =>{
    clearErrors();
    fireBase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code) {
        case "auth/Invalid-email":
        case "auth/user-desable":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleSignup = () => {
    clearErrors();
    fireBase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleLogout = () => {
    fireBase.auth().signOut();
  }

  const authListener = () => {
    fireBase.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInput();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
        <Homepage handleLogout={handleLogout} />
      ) : (
        <Login 
          email={email} 
          setEmail={setEmail}
          password={password} 
          setPassword={setpassword}  
          handleLogIn={handleLogIn}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}  
        />
      )}
    </div>
  );
}

export default App;
