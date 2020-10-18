import React from "react";

export default function Navigation() {
  const Divider = () => {
    return (
      <span style={{color: "white"}}>|</span>
    );
  };

  const Link = ({ title, page }) => {
    return (
        <a href={page} style={{
          color: "white",
          textDecoration: "none",
          "&:hover": {
            color: "yellow",
            textDecoration: "none",
          },
        }}>
          {title}
        </a>
    );
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "80px",
      backgroundColor: "#035C5C",
      position: "sticky",
      top: 0,
    }}>
      <div style={{
        display: "flex",
        width: "800px",
        justifyContent: "space-between",
        backgroundColor: "#035C5C",
      }}>
        <Link title="Início" page="/" />
        <Divider />
        <Link title="3D" page="/threed" />
        <Divider />
        <Link title="Jogos" page="/games" />
        <Divider />
        <Link title="Filmes" page="/movies" />
      </div>
    </div>
  );
}
