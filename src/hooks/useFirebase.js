import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        // save user to the database
        saveUser(email, name);
        setAuthError("");
        setAuthSuccess("Register successfully!");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            history.replace("/");
          })
          .catch((error) => {
            setAuthError(error.message);
          });
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

  // google login
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        // save user to database
        upsertUser(result?.user?.email, result?.user?.displayName);
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
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("https://still-wave-56250.herokuapp.com/users", user)
      .then((result) => {
        console.log(result);
        if (result.data?.insertedId) {
          alert("hoiche");
        }
      });
  };
  const upsertUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .put("https://still-wave-56250.herokuapp.com/users", user)
      .then((result) => {
        console.log(result);
        if (result.data?.upsertedCount > 0) {
          alert("hoiche");
        }
      });
  };

  // admin check
  useEffect(() => {
    axios
      .get(`https://still-wave-56250.herokuapp.com/users/${user?.email}`)
      .then((result) => {
        setAdmin(result.data?.admin);
      });
  }, [user.email]);

  return {
    handleRegister,
    handleLogIn,
    signInWithGoogle,
    logOut,
    user,
    admin,
    authError,
    authSuccess,
    isLoading,
    token,
  };
};

export default useFirebase;
