import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Home from './Components/Home';
import { AuthProvider } from "./AuthProvider";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element= {<Home />} >
          </Route>
          <Route path="/login" element= {<Login />} >
          </Route>
          <Route path="/signup" element= {<SignUp />} >
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
