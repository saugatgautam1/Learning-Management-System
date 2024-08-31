
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Community from "./Pages/community/Community";
import Navbar from "./commons/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
