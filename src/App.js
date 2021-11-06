import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/400.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog/Blog";
import Contact from "./Pages/Contact/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DentalService from "./Pages/DentalService/DentalService/DentalService";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Reviews from "./Pages/Reviews/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <PrivateRoute exact path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route exact path="/dentalServices">
                <DentalService></DentalService>
              </Route>
              <Route exact path="/reviews">
                <Reviews></Reviews>
              </Route>
              <Route exact path="/blog">
                <Blog></Blog>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
