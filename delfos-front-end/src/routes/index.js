import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}
