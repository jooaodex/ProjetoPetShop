import Logo from './imgs/logo.png'
import Banner1 from './imgs/teste2.png'
import carrinho from './imgs/carrinho-compra.png'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';


function Home() {
    return (
      <div className="Home">
              <div className="divtopo">
                  <header>
                    <nav>
                      <div className="menu"></div>
                      <a href="/index.html">
                        <img src={Logo} height="120px" width="120px" id="logo"/>
                      </a>
                      <a href="/#">
                      <img src={carrinho} height="50px" width="50px" id="carrinhoCompra"/>
                      </a>
  
                    </nav>
                  </header>
                  <div className="menubuttons">
  
                  <ul class="nav-list">
                          <li><a href="/#" id="letter">Categorias</a>
                              <ul>
                                <li><a href="/">Cachorros</a></li>
                                <li><a href="/">Gatos</a></li>
                                <li><a href="/">Brinquedos</a></li>
                              </ul>
                          </li>
                          <li><a href="/" id="letter">Ofertas</a></li>
                          <li><a href="/" id="letter">Serviços</a>
                          <ul>
                            <li>
                              <Link to="/agendamento">Banho e Tosa</Link>
                            </li>
                          </ul>
                          </li>
                  </ul>
  
  
                  </div>
  
              </div>
  
              <div  class="slideshow-container">
                  <div class="mySlidesfade" id="firstdiv">
                  <img src={Banner1} width="100%" id="banner"/>
                        </div>
                      
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
  
      </div>
    );
  }
  
  export default Home;