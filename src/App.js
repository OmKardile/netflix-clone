import { Route, Routes } from "react-router-dom";
import logo from "./logo.png";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
