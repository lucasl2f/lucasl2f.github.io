import React from "react";

import Profile from "../images/profile.jpg"

export default function AboutMe() {
  return (
    <div style={{
      padding: "10px",
      width: "800px",
      height: "200px",
      display: "flex",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#AAA",
      borderRadius: "8px",
      justifyContent: "space-between",
    }}>
      <img src={Profile} alt="profile-picture" style={{
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        marginRight: "30px",
      }}/>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <h3>Lucas Fonseca</h3>
          <p>
            Formado em Imagem e Som pela Universidade Federal de São Carlos,
            atuou como programador de jogos por 5 anos. Hoje trabalha com desenvolvimento de software na Stoq Tecnologia.
            </p>
      </div>
    </div>
  );
}
