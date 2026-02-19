import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ImportServices } from './pages/ImportServices';
import { ExportServices } from './pages/ExportServices';
import { LogisticsServices } from './pages/LogisticsServices';
import { Products } from './pages/Products';
import { Process } from './pages/Process';
//import { WhyChooseUs } from './pages/WhyChooseUs';
import { Certifications } from './pages/Certifications';
import { Contact } from './pages/Contact';
import {WhyChooseUs} from "./pages/WhyChooseUs";
import { ScrollToTop } from "./pages/ScrollToTop";
import { useLocation } from "react-router-dom";
 



export default function App() {
 
  return (
    <Router>
      <Layout>
<>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/import" element={<ImportServices />} />
          <Route path="/services/export" element={<ExportServices />} />
          <Route path="/services/logistics" element={<LogisticsServices />} />
          <Route path="/products" element={<Products />} />
          <Route path="/process" element={<Process />} />
          {/*<Route path="/why-choose-us" element={<WhyChooseUs />} />*/}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  </>
      </Layout>
    </Router>
  );
}
