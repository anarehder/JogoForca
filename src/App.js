import './App.js';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from './palavras.js';
import { useState } from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function App() {
  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const[imagem,setImagem] = useState(imagens[0]);
  const[palavra,setPalavra] = useState("");
  const[inicio, setInicio] = useState(false);
  const[palavraExibida,setPalavraExibida] = useState([]);
  const[status, setStatus] = useState("");
  console.log(palavra);

  return (
    <div>
      <Jogo key={palavras} palavras={palavras} imagem={imagem} palavra={palavra} inicio={inicio}
      setPalavra={setPalavra} setInicio={setInicio} setPalavraExibida={setPalavraExibida}
      palavraExibida={palavraExibida} status={status} setStatus={setStatus} setImagem={setImagem} imagens={imagens}/>
      <Letras key={palavra} imagem={imagem} setImagem={setImagem} imagens={imagens}
      palavra={palavra} setPalavra={setPalavra} inicio={inicio} setInicio={setInicio} setStatus={setStatus}
      setPalavraExibida={setPalavraExibida} palavraExibida={palavraExibida}  />
    </div>
  );
}
