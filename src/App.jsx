import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Organizations from "./pages/Organizations";
import RequestHelp from "./pages/RequestHelp";
import Results from "./pages/Results";
import SavedResources from "./pages/SavedResources";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/request-help" element={<RequestHelp />} />
        <Route path="/results" element={<Results />} />
        <Route path="/saved" element={<SavedResources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;