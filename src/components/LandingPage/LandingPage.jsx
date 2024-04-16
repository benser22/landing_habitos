import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Hero />
        <Body />
      </Layout>
      <Footer />
    </div>
  );
}

export default LandingPage;
