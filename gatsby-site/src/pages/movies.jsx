import React from "react"

import Layout from "../components/layout";
import { ProductCard } from "../components/product-card";

import Thai from "../images/movie-thai.jpg";
import Abuso from "../images/movie-abuso.jpg";
import AbreOJogo from "../images/movie-abre-o-jogo.jpg";
import Izabel from "../images/movie-izabel.png";
import TerraAVista from "../images/movie-terra-a-vista.png";
import BadThings from "../images/movie-bad-things.png";

export default function Movies() {
  return (
    <Layout>
      <h1>Curtas</h1>
      <div>
        <ProductCard 
          imageCover={Thai}
          srcUrl="https://www.youtube.com/watch?v=L_ZR-1CE9q0"
          buttonName="Assista aqui"
          title="Thai"
          year="2014"
          occupation="Operador de câmera"
          about="Thai tem 15 anos e está começando a entender quem é. Em uma festa com sua irmã, tem um encontro que vai mudar sua perspectiva de si e do mundo."
        />
        <ProductCard 
          imageCover={Izabel}
          srcUrl="https://www.youtube.com/watch?v=Lx-fuBsdeoI"
          buttonName="Assista aqui"
          title="Izabel"
          year="2013"
          occupation="Edição de vídeo | Pós-produção"
          about="Em São Carlos, cidade conhecida por ter sido a última a abolir de fato a escravidão no Brasil, o documentário faz um passeio pelo bairro Vila Izabel, a fim de conhecer seus antigos moradores e compreender como suas histórias de vida se relacionam com a história do bairro fundado por ex-escravos."
        />
        <ProductCard 
          imageCover={AbreOJogo}
          srcUrl="https://www.dailymotion.com/video/k2mCjUeLsWi4D49wtxH"
          buttonName="Assista aqui"
          title="Abre o Jogo"
          year="2014"
          occupation="Direção de fotografia"
          about="Toni Ferreira é o técnico de uma seleção brasileira que não vai muito bem. Sofrendo pressões da imprensa e dos torcedores, decide procurar ajuda de um psicólogo. É aí que conhece Edson Guerra, um apaixonado por futebol que, de repente, se vê diante da oportunidade de conhecer e participar dos bastidores do mundo do futebol."
        />
        <ProductCard 
          imageCover={Abuso}
          srcUrl="https://www.youtube.com/watch?v=DCweK4IpPIs"
          buttonName="Assista aqui"
          title="Abuso"
          year="2011"
          occupation="Animação 2D"
          about="Augusto Ferraz é um professor do ensino fundamental de uma instituição de ensino particular. Viviane é uma de suas alunas, e a responsável por disseminar um boato que irá crescer a cada minuto."
        />
        <ProductCard 
          imageCover={BadThings}
          srcUrl="https://v1.genero.com///watch-video/37074"
          buttonName="Assista aqui"
          title="Houndmouth - Casino (Bad Things)"
          year="2013"
          occupation="Operador de câmera | Edição de vídeo"
          about=""
        />
      </div>
      <h1>Animações</h1>
      <div>
        <ProductCard 
          imageCover={TerraAVista}
          srcUrl="https://www.youtube.com/watch?v=1dU3pxnJg8o"
          buttonName="Assista aqui"
          title="Teaser Terra à Vista"
          year="2014"
          occupation="Animação 2D"
          about="Terra à vista é um jogo eletrônico de multiplayer local para dois jogadores que utiliza mecânica de boardgame e temática de construção de pontes."
        />
      </div>

    </Layout>
  );
}
