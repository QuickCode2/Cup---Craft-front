import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import OrderCoffee from "./components/OrderPage/OrderCoffee";
import PremiumMenu from "./components/Hero/PremiumMenu";
import BlogPage from "./components/BlogPage/BlogPage";
import BlogDetail from "./components/BlogPage/BlogDetail";
import CoffeeGallery from "./components/PhotoGallery/CoffeeGallery"
import PremiumCoffee from "./components/Banner/PremiumCoffee";
import HotCoffee from "./components/Banner/HotCoffee";
import ColdCoffee from "./components/Banner/ColdCoffee";
import BaristaSpecial from "./components/Banner/BaristaSpecial";
import Contact from "./components/ContactPage/Contact";
import Admin from "./components/AdminPanel/Admin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={
            <>
              <Hero />
              <CoffeeGallery />
              <Services />
              <Banner />
              <BlogPage />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/Hero" element={<Hero />} />
        <Route path="/CoffeeGallery" element={<CoffeeGallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/banner" element={<Banner />} />    
        <Route path="/footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />


        {/* Orders */}
        <Route path="/order" element={<OrderCoffee />} />
        <Route path="/menu" element={<PremiumMenu />} /> 
        <Route path="/normal-order" element={<OrderCoffee />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Blog Coffee Collections */}
        <Route path="/premium-coffee" element={<PremiumCoffee />} />
        <Route path="/hot-coffee" element={<HotCoffee />} />
        <Route path="/cold-coffee" element={<ColdCoffee />} />
        <Route path="/barista-special" element={<BaristaSpecial />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;