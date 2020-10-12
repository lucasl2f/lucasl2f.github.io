import React from "react"

import Layout from "../components/layout";
import Thai from "../images/movie-thai.jpg";
import Izabel from "../images/movie-izabel.png";

const Movie = ({ title, imageCover, about, occupation, year, srcUrl, inverted }) => {
  const imageStyle = {
    width: "150px",
    height: "150px",
    margin: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "50px",
      width: "800px",
    }}>
      {!inverted &&
      <img src={imageCover} style={imageStyle}/>}
      <div style={{display: "flex", flexDirection: "column"}}>
        <span><b>Título: </b>{title}</span>
        <span><b>Ano: </b>{year}</span>
        <span><b>Sinopse: </b>{about}</span>
        <span><b>Função: </b>{occupation}</span>
        <a href={srcUrl} style={{
          color: "black",
          textDecoration: "none",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#002B2B",
        }}>Assista aqui</a>
      </div>
      {inverted &&
      <img src={imageCover} style={imageStyle}/>}
    </div>
  );
}

export default function Movies() {
  return (
    <Layout>
      <h1>Filmes</h1>
      <div>
        <Movie 
          imageCover={Thai}
          srcUrl="https://www.youtube.com/watch?v=L_ZR-1CE9q0"
          title="Thai"
          year="2014"
          occupation="Operador de câmera"
          about="Thai tem 15 anos e está começando a entender quem é. Em uma festa com sua irmã, tem um encontro que vai mudar sua perspectiva de si e do mundo."
        />
        <Movie 
          imageCover={Izabel}
          srcUrl="https://www.youtube.com/watch?v=Lx-fuBsdeoI"
          title="Izabel"
          year="2013"
          occupation="Edição | Pós-produção"
          about="Em São Carlos, cidade conhecida por ter sido a última a abolir de fato a escravidão no Brasil, o documentário faz um passeio pelo bairro Vila Izabel, a fim de conhecer seus antigos moradores e compreender como suas histórias de vida se relacionam com a história do bairro fundado por ex-escravos."
          inverted
        />
      </div>

    </Layout>
  );
}
