import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainVid from "./components/MainVid";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-main text-white h-full py-5 mb-14">
      <Header />
      <Navbar />
      <div className="sm:pl-24 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LiveStream" element={<MainVid />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
