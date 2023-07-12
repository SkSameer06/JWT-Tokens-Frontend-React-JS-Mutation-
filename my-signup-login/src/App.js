import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Authentication from "./App/Authentication";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Signup from "./Components/Signup";

// import Logout1 from "./Components/Logout1";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>

          {/* <Route exact path="/logout1" element={<Logout1 />}></Route> */}

          {/* <Route exact path="/" App={Authentication} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
