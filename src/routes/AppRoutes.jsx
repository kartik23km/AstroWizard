import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import Services from '@/pages/services/Services';
import Contact from '@/pages/contact/Contact';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
