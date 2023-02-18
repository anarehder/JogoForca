
export default function Jogo(props){
    let palavras = props.palavras;

    function escolherPalavra(){
        if (props.palavra === "") {
        const indice = Math.floor(Math.random() * palavras.length);
        props.setPalavra(palavras[indice]);
        props.setInicio(!props.inicio);
        }
    }

    const palavraSelecionada = props.palavra;
    const palavraVazia = [];
    for(let i=0; i<palavraSelecionada.length; i++){
        palavraVazia.push("_");
    }

    return(
        <div className="jogo">
            <div>
                <img src={props.imagem} alt="forca" data-test="game-image"/>
            </div>
            <div className="esquerda">
                <button onClick={escolherPalavra} data-test="choose-word"> Escolher Palavra </button>
                <div data-test="word">{palavraVazia.join(" ")}</div>
            </div>
        </div>
    )
}
