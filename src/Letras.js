import { useState } from "react";
export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const[letraSelecionada,setLetraSelecionada] = useState([]);
    const[erro,setErro] = useState(0);
    let palavraTeste = [];


    function SelecionaLetra(letra){
        setLetraSelecionada([...letraSelecionada,letra]);
        // se a letra selecionada tiver na palavra guardo o index dela em um array
        if (props.palavra.includes(letra)){
            for (let i=0 ; i<props.palavra.length; i++){
                if (props.palavra[i] === letra){
                    palavraTeste.push(letra);
                }else{
                    palavraTeste.push(props.palavraExibida[2*i]);
                }
            }
            props.setPalavraExibida(palavraTeste.join(" "));
            //alterar na palavra exibida a letra
            if(palavraTeste.join("") === props.palavra){
                props.setInicio(false);
                props.setStatus("acertou");
                setErro(0);
                props.setPalavraExibida(props.palavra);
            }
        } else {
            setErro(erro+1);
            console.log("Não tem a letra", erro+1);
            props.setImagem(props.imagens[erro+1])
            if (erro+1 === 6){
                props.setInicio(false);
                props.setStatus("errou");
                setErro(0);
                props.setPalavraExibida(props.palavra);
            }
        }
        // se a letra selecionado não tiver na palavra somo o erro em mais 1 e altero a imagem
        // finalizar o jogo quando erro+1 for igual a 6 ou quando a palavra for descoberta
        // uso props.setInicio(false) e adiciono classe errou na div
    }

    return(
        <div className="letras">
            {alfabeto.map((letra) => <button onClick={() => SelecionaLetra(letra)} 
            disabled={props.inicio === false || letraSelecionada.includes(letra) ? true : ""}
            key={letra} 
            data-test="letter">{letra.toUpperCase()}</button>)}
        </div>
    )
}