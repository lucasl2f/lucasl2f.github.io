import React from "react";

export default function Header({title, subtitle}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#007C7C",
      width: "100%",
      height: "200px"
    }}>
      <h1 style={{color: "white"}}>{title}</h1>
      <h2 style={{color: "white"}}>{subtitle}</h2>
    </div>
  );
}
