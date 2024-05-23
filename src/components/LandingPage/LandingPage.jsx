import React, { Suspense } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Body from '../Body/Body';
import Layout from '../Layout/Layout';
import Footer from '../Footer/Footer';

function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
      <div className="text-white">
        <HiOutlineRefresh className="animate-spin h-12 w-12" />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Layout>
        <section id="whyus?">
          <Hero />
        </section>
        <Body />
      </Layout>
      <Footer />
    </div>
  );
}

export default LandingPage;
