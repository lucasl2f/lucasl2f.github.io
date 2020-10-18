import React from "react";

import Layout from "../components/layout";
import CustomImageViewer from "../components/image-viewer";
import Image1 from "../images/3d-reator-1.png";
import Image2 from "../images/3d-reator-2.png";
import Image3 from "../images/3d-reator-3.png";
import Image4 from "../images/3d-reator-4.jpg";
import Image5 from "../images/3d-reator-5.jpg";

export default function ThreeD() {
  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    <Layout>
      <h1>3D</h1>
      <div>
        <p><b>Montagem de reatores</b></p>
        <p><b>Softwares:</b> Blender, GIMP</p>
        <p><b>Ano:</b> 2018</p>
        <CustomImageViewer 
          images={images}
        />
      </div>
    </Layout>
  );
}
