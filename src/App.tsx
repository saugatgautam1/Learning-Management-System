import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Community from "./Pages/community/Community";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
