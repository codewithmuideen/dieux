import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Preloader from "./components/loading/Preloader";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Only the very first load of the session gets the cinematic preloader.
let hasShownPreloader = false;

function App() {
  const [showPreloader, setShowPreloader] = useState(!hasShownPreloader);

  const handleFinish = () => {
    hasShownPreloader = true;
    setShowPreloader(false);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        {showPreloader && <Preloader onFinish={handleFinish} />}
        <div
          style={{ visibility: showPreloader ? "hidden" : "visible" }}
          aria-hidden={showPreloader}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="why-us" element={<WhyUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
