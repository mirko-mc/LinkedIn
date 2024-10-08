import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <BrowserRouter>
      <nav className="mb-5">
        <MyNavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
