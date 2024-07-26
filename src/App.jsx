import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyNavBar from "./components/MyNavBar";
import { MyProfileContext } from "./context/MyProfileContext";
import { useContext, useEffect, useState } from "react";

function App() {
  const { myProfile } = useContext(MyProfileContext);
  const [user, setUser] = useState({});
  // verificare che id myPr e id prop siano uguali
  // se uguali usare context altrimenti fetch
  // usare stato terzo contenente dati context o fetch
  useEffect(() => {
    myProfile?._id && setUser(myProfile);
  }, [myProfile]);
  return (
    <BrowserRouter>
      <nav className="mb-5">
        <MyNavBar />
      </nav>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path={`/profile/${user._id}`} element={<Profile />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
          <Route path="/404" element={<NotFound />} />
          {/* <Route path="/*" element={<Navigate to="/404" />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
