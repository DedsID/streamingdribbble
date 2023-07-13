import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import SmallVid from "./components/SmallVid";
import MainVid from "./components/MainVid";

function App() {
  return (
    <div className="bg-main text-white h-screen">
      <Header />
      <Navbar />
      <div className="pl-[10%]">
        {/* <SmallVid /> */}
        <MainVid />
      </div>
    </div>
  );
}

export default App;
