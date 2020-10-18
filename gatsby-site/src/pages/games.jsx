import React from "react";

import Layout from "../components/layout";
import { ProductCard } from "../components/product-card";

import GrandShooter from "../images/game-grand-shooter.png";
import Musikinesia from "../images/game-musikinesia.png";
import ProduzindoAudiovisual from "../images/game-produzindo-audiovisual.jpeg";

export default function Games() {
  return (
    <Layout>
      <h1>Jogos</h1>
      <div>
        <ProductCard 
          imageCover={GrandShooter}
          srcUrl="https://grumpypandastudios.itch.io/grand-shooter"
          title="Grand Shooter"
          year="2017"
          occupation="Desenvolvedor Unity"
          about="O jogador assume o controle de Joan, uma ex-militar que foi levada a uma guerra muito mais pessoal quando Ellior, sua namorada, foi raptada por uma misteriosa força inimiga. Ela precisa perseguir os bandidos numa ilha paradisíaca para salvá-la."
        />
        <ProductCard 
          imageCover={Musikinesia}
          srcUrl="http://www.loa.sead.ufscar.br/musikinesia.html"
          title="Musikinésia"
          year="2014"
          occupation="Desenvolvedor Unity"
          about="Musikinésia traz a fantástica e cômica história de Tom, um garoto do subúrbio que, por acaso, descobre um teclado dotado de habilidades telecinéticas em seu sótão. Leigo em música, ele resolve aprender a tocar o instrumento para tentar desvendar seus mistérios e poderes."
        />
        <ProductCard 
          imageCover={ProduzindoAudiovisual}
          srcUrl="http://sistemas3.sead.ufscar.br/ojs/index.php/2014/article/view/779"
          title="Produzindo Audiovisual"
          year="2014"
          occupation="Desenvolvedor Unity"
          about="Jogo para auxiliar professores em formação na modalidade a distância no conhecimento do sistema de produção de materiais didáticos audiovisuais."
        />
      </div>
    </Layout>
  );
}
