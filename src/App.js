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
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const[imagem,setImagem] = useState(imagens[0]);
  const[letras,setLetras] = useState("disabled");
  const[palavra,setPalavra] = useState("");
  const[inicio, setInicio] = useState(false);
  const[tracos,setTracos] = useState([]);
  console.log(palavra);

  return (
    <div>
      <Jogo key={palavras} palavras={palavras} imagem={imagem} palavra={palavra}
      setPalavra={setPalavra} setInicio={setInicio} tracos={tracos} setTracos={setTracos}/>
      <Letras key={alfabeto} alfabeto={alfabeto} imagem={imagem} setImagem={setImagem} letras={letras} setLetras={setLetras}
      palavra={palavra} setPalavra={setPalavra} inicio={inicio} setInicio={setInicio}/>
    </div>
  );
}
