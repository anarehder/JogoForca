
export default function Jogo(props){
    let palavras = props.palavras;

    function escolherPalavra(){
        if (props.palavra === "") {
            const indice = Math.floor(Math.random() * palavras.length);
            props.setPalavra(palavras[indice]);
            props.setInicio(!props.inicio);
            const palavraVazia = [];
            for(let i=0; i<palavras[indice].length; i++){
                palavraVazia.push("_");
            }
            props.setPalavraExibida(palavraVazia.join(" "))
        }
    }

 /*    const palavraSelecionada = props.palavra;
    const palavraVazia = []; */
    

    return(
        <div className="jogo">
            <div>
                <img src={props.imagem} alt="forca" data-test="game-image"/>
            </div>
            <div className="esquerda">
                <button onClick={escolherPalavra} data-test="choose-word"> Escolher Palavra </button>
                <div data-test="word">{props.palavraExibida}</div>
            </div>
        </div>
    )
}
