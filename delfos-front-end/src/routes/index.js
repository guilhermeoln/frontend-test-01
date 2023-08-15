import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}
