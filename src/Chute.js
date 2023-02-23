import { useState } from "react";
export default function Chute(props){
    const [input, setInput] = useState("");
    
    function chutar() {
        if(input === props.palavra){
            props.setInicio(false);
            props.setStatus("acertou");
            props.setPalavraExibida(props.palavra);
            setInput("");
            console.log(props.inicio);
        } else {
            props.setInicio(false);
            props.setStatus("errou");
            props.setPalavraExibida(props.palavra);
            props.setImagem(props.imagens[6]);
            setInput("");
            console.log(props.inicio);
        }
    }

    return(
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input 
            disabled={props.status !== "" || props.inicio === false ? true : ""}
            value={input} onChange={e => setInput(e.target.value)} data-test="guess-input"/>
            <button onClick={chutar} data-test="guess-button"> Chutar </button>
        </div>
    )
}
