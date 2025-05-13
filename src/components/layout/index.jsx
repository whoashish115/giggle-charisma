'use client'
import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col ">
      <Preloader />
      <Header />
      <main className="flex-grow h-full mx-auto  flex flex-col justify-start w-full ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;