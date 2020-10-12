import React from "react"

import "typeface-source-sans-pro";

import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <div style={{fontFamily: "Source Sans Pro"}}>
      <Header title="Entre a arte e o código" subtitle="Em construção"/>
      <Navigation />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
      }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
