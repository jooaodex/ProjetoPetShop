import { useState, useEffect } from "react";
import api from '../api.js'
import { useLocation } from "react-router-dom";
import Header from "../Components/Header.jsx";

function Item() {

    const [item, setItem] = useState([])

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const id = query.get('id');

    useEffect(() => {
        api.get('/item').then(res => {
            let parametros = (res.data[0].item)

            let filter = parametros.filter(i => i.idItem == id)
            setItem(filter[0])
        })
    
    }, [id])

    return (
        <div classname="base-projeto">
            <Header />
            <div className="item-main-div">
                <h3>Nome: {item.nomeItem}</h3>
                <img width='200px' src={item.imgUrl}></img>
                <p>Descrição: {item.descricaoItem}</p>
                <p>Preço: {item.precoItem}</p>
            </div>
        </div>
    )

}

export default Item;