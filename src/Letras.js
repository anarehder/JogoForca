export default function Letras(props){
/*     let erros = 0; */
    return(
        <div className="letras">
            {props.alfabeto.map((letra) => <button disabled={props.inicio === false ? true : ""} key={letra} data-test="letter">{letra.toUpperCase()}</button>)};
        </div>
    )
}