import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/400.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog/Blog";
import Contact from "./Pages/Contact/Contact/Contact";
import DentalService from "./Pages/DentalService/DentalService/DentalService";
import Home from "./Pages/Home/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Reviews from "./Pages/Reviews/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Router>
          <Navigation></Navigation>
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
            <Route exact path="/appointment">
              <Appointment></Appointment>
            </Route>
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
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
