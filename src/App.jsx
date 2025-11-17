import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollToTop } from "./utils/scrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import HybridCloudIntegration from "./Pages/HybridCloudIntegration";
import CloudMigration from "./Pages/CloudMigration";
import ArtificialIntelligence from "./Pages/ArtificialIntelligence";
import ApplicationModernization from "./Pages/ApplicationModernization";
import "./App.css";
import Testimonials from "./components/Testimonials";
import CloudOptimization from "./Pages/CloudOptimization";
import DataEnablementServices from "./Pages/DataEnablementServices";
import BiztalkModernizationAssessment from "./Pages/BiztalkModernizationAssessment";
import BiztalkHealthCheck from "./Pages/BiztalkHealthCheck";
import BiztalkAzureintegrationservices from "./Pages/BiztalkAzureintegrationservices";

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
          <Route
            path="services/hybrid-cloud-integration"
            element={<HybridCloudIntegration />}
          />
          <Route path="services/cloud-migration" element={<CloudMigration />} />
          <Route
            path="services/artificial-intelligence"
            element={<ArtificialIntelligence />}
          />
          <Route
            path="services/application-modernization"
            element={<ApplicationModernization />}
          />
          <Route
            path="services/data-enablement-services"
            element={<DataEnablementServices />}
          />
          <Route
            path="services/cloud-optimization"
            element={<CloudOptimization />}
          />
          <Route
            path="services/biztalk-azureintegrationservices-ais"
            element={<BiztalkAzureintegrationservices />}
          />
          <Route
            path="services/biztalk-health-check"
            element={<BiztalkHealthCheck />}
          />
          <Route
            path="services/biztalk-modernization-assessment"
            element={<BiztalkModernizationAssessment />}
          />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
