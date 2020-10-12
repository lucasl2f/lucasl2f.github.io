import React from "react";

export default function Footer({}) {
  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#002B2B",
      width: "100%",
      height: "100px"
    }}>
      <h4 style={{color: "white"}}>2020 Lucas Fonseca</h4>
    </div>
  );
}
