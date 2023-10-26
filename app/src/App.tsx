import "@picocss/pico";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Add from "./pages/Add";
// import Edit from "./pages/Edit";

const Add = lazy(() => import("./pages/Add"));
const Edit = lazy(() => import("./pages/Edit"));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
