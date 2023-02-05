import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element= {<Header />} >
          </Route>
          <Route path="/login" element= {<Login />} >
          </Route>
          <Route path="/signup" element= {<SignUp />} >
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
