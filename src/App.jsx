import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <main className="bg-slate-300/20 h-full">
        <Suspense>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
