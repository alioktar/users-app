import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/User/Users";

function App() {
  return (
    <div className="flex flex-col h-full items-center">
      <Header title={"Users App"} />
      <Router>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
