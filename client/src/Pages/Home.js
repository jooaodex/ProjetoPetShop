import { useState, useEffect } from "react";
import Logo from './imgs/logo.png'
import Banner1 from './imgs/teste2.png'
import carrinho from './imgs/carrinho-compra.png'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import '../styles/home.css'
import api from '../api.js'
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";



function Home() {
 
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
    <div classname="base-projeto">
      <Header />

      <div class="full-content">
    <div class="content-slider">
      <div class="slider-img">
          {/* <!--Botões de troca--> */}
          <input class="input-slider" type="radio" name="radio" id="slide-1"/>
          <input class="input-slider" type="radio" name="radio" id="slide-2"/>
          <input class="input-slider" type="radio" name="radio" id="slide-3"/>
          <input class="input-slider" type="radio" name="radio" id="slide-4"/>
          <input class="input-slider" type="radio" name="radio" id="slide-5"/>
          <input class="input-slider" type="radio" name="radio" id="slide-6"/>

          {/* <!--imagens a serem trocadas--> */}
          <div class="slide-img s1">
              <img src={Banner1} alt="img1"/>
          </div>
          <div class="slide-img s2">
              <img src={Banner1} alt="img2"/>
          </div>
          <div class="slide-img s3">
              <img src={Banner1} alt="img3"/>
          </div>
          <div class="slide-img s4">
              <img src={Banner1} alt="img4"/>
          </div>
          <div class="slide-img s5">
              <img src={Banner1} alt="img5"/>
          </div>
          <div class="slide-img s6">
              <img src={Banner1} alt="img6"/>
          </div>

          {/* <!--botões de navegação--> */}
          <div class="navigator-slide">
              <label class="lbl-slide" for="slide-1"></label>
              <label class="lbl-slide" for="slide-2"></label>
              <label class="lbl-slide" for="slide-3"></label>
              <label class="lbl-slide" for="slide-4"></label>
              <label class="lbl-slide" for="slide-5"></label>
              <label class="lbl-slide" for="slide-6"></label>
          </div>
      </div>
      
      
  </div>
  <div class="content-inicio">
        <ul>

          <li class="li-inicio li-1">
            <h2>Resgate na loja</h2>
            <a href=""><p>Ver Regras</p></a>
          </li>

          <li class="li-inicio li-2">
            <h2>Frete Gratis</h2>
            <a href=""><p>Ver Regras</p></a>
          </li>

          <li class="li-inicio li-3">
            <h2>Qualidade dos produtos</h2>
            <a href=""><p>Ver Regras</p></a>
          </li>

          <li class="li-inicio li-4">
            <h2><b>Descontos</b></h2>
            <a href=""><p>Ver Regras</p></a>
          </li>

        </ul>
    </div>
    <div class="content-produtos">
      <h1>Produtos</h1>
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


        </div>



</div>
  );
}

export default Home;