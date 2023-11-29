import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Company from './Pages/Company/Company';
import Career from './Pages/Career/Career';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import News from './Pages/News/News';
import BlogInner from './Pages/BlogInner/BlogInner';
import Team from './Pages/Team/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog-inner" element={<BlogInner />} />
          <Route path="/egorov" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
