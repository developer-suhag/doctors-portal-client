import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const handleRegister = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setAuthError("");
        setAuthSuccess("Register successfully!");
      })
      .catch((error) => {
        setAuthSuccess("");
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const handleLogIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setAuthError("");
        setAuthSuccess("Login successfully!");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthSuccess("");
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    handleRegister,
    handleLogIn,
    logOut,
    user,
    authError,
    authSuccess,
    isLoading,
  };
};

export default useFirebase;
