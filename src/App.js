import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainVid from "./components/MainVid";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-main text-white h-full">
      <div className="fixed w-full z-10">
        <Header />
      </div>
      <div className="sm:pt-20 pt-[100px]">
        <Navbar />
        <div className="pt-5">
          <div className="sm:pl-32">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <div className="sm:pl-32">
            <Routes>
              <Route path="/LiveStream" element={<MainVid />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
