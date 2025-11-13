import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollToTop } from "./utils/scrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import "./App.css";
import Testimonials from "./components/Testimonials";

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <main role="main">
        <div className="container">
          {/* Outlet renders the page based on the current route */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped inside the MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
