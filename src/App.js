import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainVid from "./components/MainVid";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-main text-white h-full py-5 mb-14">
      <Header />
      <Navbar />
      <div className="sm:pl-24">
        {/* <MainVid /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
