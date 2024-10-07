import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
