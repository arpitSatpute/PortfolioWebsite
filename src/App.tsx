import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";


function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<DocsPage />} path="/docs" /> */}
      <Route element={<Contact />} path="/contact" />
      {/* <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" /> */}
    </Routes>
  );
}

export default App;