import React from "react"

import "typeface-source-sans-pro";

import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import AboutMe from "../components/about-me";

export default function Home() {
  return (
    <div style={{fontFamily: "Source Sans Pro"}}>
      <Header title="Entre a arte e o código" subtitle="Em construção"/>
      <Navigation />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",
        marginTop: "50px"}}>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}
