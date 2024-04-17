import React, { Suspense } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-white">
        <HiOutlineRefresh className="animate-spin h-8 w-8 mr-2" />
        Loading...
      </div>
    </div>
  );
}

const LazyLandingPage = React.lazy(() => import("./LandingPage"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyLandingPage />
    </Suspense>
  );
}

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
