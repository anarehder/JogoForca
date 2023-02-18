import forca1 from './assets/forca1.png';

export default function Jogo(){
    return(
        <div className="jogo">
            <div>
                <img src={forca1} alt="forca1" />
            </div>
            <div className="esquerda">
                <button> Escolher Palavra</button>
                <div>_ _ _ _ _ _ _ _ _ _</div>
            </div>
        </div>
    )
}
