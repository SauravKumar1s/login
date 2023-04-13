import React , {useState} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import ChatSection from "./pages/ChatSection";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    // handle the logout logic here
    setIsLoggedIn(false);
  }

  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatsection" element={<ChatSection />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
