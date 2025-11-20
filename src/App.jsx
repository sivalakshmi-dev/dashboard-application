import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">

        <div className="bg-white shadow-lg rounded-xl flex w-full max-w-6xl min-h-[80vh]">

          <Sidebar />

          <div className="flex-1 p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data" element={<Data />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
};

export default App;
