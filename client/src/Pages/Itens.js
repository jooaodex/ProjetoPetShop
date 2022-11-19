import { useState, useEffect } from "react";
import api from '../api.js'

function Itens(){

    const [parametros, setParametros] = useState([])

    useEffect(() => {
        api.get('/itens').then(res => {
          let parametros = (res.data[0].parametroFilme[0])
          setParametros(parametros)
          console.log(parametros)
        })
    }, [])
    
    return (
        <div>
            <h1>Itens</h1>
            <img src={parametros.imgBanner}></img>
            <p>{parametros.nome}</p>
        </div>

    );


}

export default Itens;