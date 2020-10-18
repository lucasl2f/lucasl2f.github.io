import React from "react";
import Background from "../images/header_background.jpg"

export default function Header({title, subtitle}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      width: "100%",
      height: "200px"
    }}>
      <h1 style={{color: "white"}}>{title}</h1>
      <h2 style={{color: "white"}}>{subtitle}</h2>
    </div>
  );
}
