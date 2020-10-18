import React from "react"

export const ProductCard = ({ title, imageCover, buttonName, about, occupation, year, srcUrl, inverted }) => {
  const imageStyle = {
    width: "150px",
    height: "150px",
    marginRight: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      margin: "50px",
      width: "800px",
    }}>
      {!inverted &&
      <img src={imageCover} alt={`${title}`} style={imageStyle}/>}
      <div style={{display: "flex", flexDirection: "column"}}>
        {title && <span><b>Título: </b>{title}</span>}
        {year && <span><b>Ano: </b>{year}</span>}
        {about && <span><b>Sinopse: </b>{about}</span>}
        {occupation && <span><b>Função: </b>{occupation}</span>}
        {srcUrl && <a href={srcUrl} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: "none",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#002B2B",
        }}>{buttonName || "Saiba mais"}</a>}
      </div>
      {inverted &&
      <img src={imageCover} alt={`${title}`} style={imageStyle}/>}
    </div>
  );
}
