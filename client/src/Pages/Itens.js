import { useState, useEffect } from "react";
import api from '../api.js'
import { useLocation } from "react-router-dom";

function Itens() {

    const [parametros, setParametros] = useState([])

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        api.get('/itens').then(res => {
            let parametros = (res.data[0].itens)

            if (search == null || search == ""){
                setParametros(parametros)
            }
            else {
                let filter = parametros.filter(
                    i => i.nomeItem.toLowerCase().includes(search.toLowerCase())
                )
                setParametros(filter)
            }
        })
    }, [])

    return (
        <div className="items-main-div">
            <div className="items-title">
                <h1>Itens à venda</h1>
            </div>

            <div className="items-grid-container">
                <div className="items-grid">
                    {
                        parametros.map((item, i) => (
                            <div key={i} className="items-item-container">
                                <a href={"item?id=" + item.idItem} style={{ textDecoration: 'none' }}>
                                    <div className="item-img-container">
                                        <div className="item-img-container-inner">
                                            <img className="item-img" src={item.imgUrl}></img>
                                        </div>
                                    </div>

                                    <div className="item-info-container">
                                        <div className="item-name-container">
                                            <p className="item-name" >{item.nomeItem}</p>
                                        </div>

                                        <div className="item-price-container">
                                            <p className="item-price">R${item.precoItem}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }

                </div>


            </div>

        </div>

    );


}

export default Itens;