import { BrowserRouter, Route, Routes } from "react-router";
import LandingView from "./views/Landing/Landing.view";
import LoginView from "./views/Login/Login.view";
import "./styles/base.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
