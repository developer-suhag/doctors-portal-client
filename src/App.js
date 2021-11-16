import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/400.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About/About";
import AdminRoute from "./Pages/AdminRoute/AdminRoute";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog/Blog";
import Contact from "./Pages/Contact/Contact/Contact";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./Pages/Dashboard/Payment/Payment";
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
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route exact path="/home" element={<Home></Home>}></Route>
              <Route exact path="/about" element={<About></About>}></Route>
              <Route
                exact
                path="/appointment"
                element={
                  <PrivateRoute>
                    <Appointment></Appointment>
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard></Dashboard>
                  </PrivateRoute>
                }
              >
                <Route
                  exact
                  path="/dashboard"
                  element={<DashboardHome></DashboardHome>}
                ></Route>
                <Route
                  path={`/dashboard/payment/:id`}
                  element={<Payment></Payment>}
                ></Route>
                <Route
                  path={`/dashboard/makeAdmin`}
                  element={
                    <AdminRoute>
                      <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path={`/dashboard/addDoctor`}
                  element={
                    <AdminRoute>
                      <AddDoctor></AddDoctor>
                    </AdminRoute>
                  }
                ></Route>
              </Route>
              <Route
                exact
                path="/dentalServices"
                element={<DentalService></DentalService>}
              ></Route>
              <Route
                exact
                path="/reviews"
                element={<Reviews></Reviews>}
              ></Route>
              <Route exact path="/blog" element={<Blog></Blog>}></Route>
              <Route
                exact
                path="/contact"
                element={<Contact></Contact>}
              ></Route>
              <Route exact path="/login" element={<Login></Login>}></Route>
              <Route
                exact
                path="/register"
                element={<Register></Register>}
              ></Route>
              <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
