export default function Jogo(props){
    const ac = "acertou";
    const er = "errou";

    function escolherPalavra(){
        const indice = Math.floor(Math.random() * props.palavras.length);
            props.setPalavra(props.palavras[indice]);
            /* props.setInicio(!props.inicio); */
            props.setInicio(true);
            const palavraVazia = [];
            for(let i=0; i<props.palavras[indice].length; i++){
                palavraVazia.push("_");
            }
            props.setPalavraExibida(palavraVazia.join(" "));
            props.setStatus("");
            props.setImagem(props.imagens[0])
        /* if (props.palavra === "" || props.status === ac || props.status === er) {
            
        } */
    }

    return(
        <div className="jogo">
            <div>
                <img src={props.imagem} alt="forca" data-test="game-image"/>
            </div>
            <div className="esquerda">
                <button onClick={escolherPalavra} data-test="choose-word"> Escolher Palavra </button>
                <div className={`${props.status === ac ? ac : props.status === er ? er : ""}`}
                data-test="word">{props.palavraExibida}</div>
            </div>
        </div>
    )
}
// quando o props.status = "acertou" coloco a className="acertou" se for "errou" coloc className="errou"
