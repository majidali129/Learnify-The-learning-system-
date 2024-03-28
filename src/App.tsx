import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <>
    <Routes >
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/' element={<LandingPage />} /> */}
    </Routes>

    </>
  );
}
