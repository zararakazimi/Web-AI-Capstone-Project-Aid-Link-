import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Organizations from "./pages/Organizations";
import RequestHelp from "./pages/RequestHelp";
import Results from "./pages/Results";
import SavedResources from "./pages/SavedResources";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Push content below the fixed navbar */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/results" element={<Results />} />
          <Route path="/saved" element={<SavedResources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;