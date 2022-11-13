import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home as OnlineHome} from "./components/Online";
import { Home as OfflineHome} from "./components/Offline";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<OnlineHome/>}/>
          <Route path="/offline-todo" element={<OfflineHome/>}/>
        </Routes>
      </Router>
    </div>
  )
};

export default App;
