import React from "react";
import Navbar from "./screens/Navbar/Navbar";
import HeroSection from "./screens/Home/Home";
import HousePriceForm from "./HousePriceForm";
import PropertyForm from "./screens/PropertyForm/PropertyForm";
import HowItWorks from "./screens/HowItWorks/HowItWorks";
import ContactUs from "./screens/ContactUs/ContactUs";
import Footer from "./screens/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HousePriceForm />
      <HowItWorks />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
