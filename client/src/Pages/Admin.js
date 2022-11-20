import { useState, useEffect } from "react";
import api from '../api.js'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Admin() {

    const [login, setLogin] = useState(localStorage.getItem('login'))
    const [parametros, setParametros] = useState([])
    const [itemInsertState, setItemInsertState] = useState({nome: '', img: '', desc: '', preco: ''})

    useEffect(() => {
        api.get('/admin').then(res => {
            let parametros = (res.data[0].itens)
            setParametros(parametros)
        })
    }, [])

    const navigate = useNavigate();

    function loginForm() {
        let adminUser = document.getElementById('adminUser').value
        let adminPassword = document.getElementById('adminPass').value
        if (adminUser == "admin" && adminPassword == "12345") {
            localStorage.setItem('login', 'true')
            navigate(0)
        }
        else {
            window.alert('Login ou senha errados, tente novamente.')
        }
    }

    function deslogar() {
        localStorage.setItem('login', 'false')
        navigate(0)
    }

    function OpenCreateModal() {
        document.getElementById('new-modal').style.display = 'flex'
    }

    function closeCreateModal() {
        document.getElementById('new-modal').style.display = 'none'
    }

    function insertItem() {
        fetch('http://localhost:5000/admin/insertItem', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(itemInsertState)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            })
        navigate(0)
    }


    if (login === 'true') return (
        <div className="admin-main-div">
            <button onClick={() => deslogar()}>Deslogar</button>
            <div className="admin-header">
                <span>Produtos</span>
                <button onClick={() => OpenCreateModal()}>Criar</button>
            </div>
            <div className="admin-crud-container">
                <div className="admin-table">
                    <div className="header-crud">
                        <div className="crud-id crud-line">id</div>
                        <div className="crud-img crud-line">Imagem</div>
                        <div className="crud-name crud-line">Nome</div>
                        <div className="crud-desc crud-line">Descrição</div>
                        <div className="crud-price crud-line">Preço</div>
                        <div className="crud-act crud-line">Ações</div>
                    </div>
                    {
                        parametros.map((item, i) => (
                            <div key={i} className='item-crud'>
                                <div className="crud-id crud-line">{item.idItem}</div>
                                <div className="crud-img crud-line"><img src={item.imgUrl} width='50px'></img></div>
                                <div className="crud-name crud-line">{item.nomeItem}</div>
                                <div className="crud-desc crud-line">{item.descricaoItem}</div>
                                <div className="crud-price crud-line">R${item.precoItem}</div>
                                <div className="crud-act crud-line">
                                    <div className="edit-item"><p className="edit-item-p">Edit</p></div>
                                    <div className="delete-item"><p className="edit-item-p">Del</p></div>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <div id="new-modal" className="insert-new-modal">
                    <div className="new-modal-container">
                        <div className="insert-new-modal-top">
                            <p className="create-new-product">Criar novo produto</p>
                            <span className="close-insert-new-modal" onClick={() => closeCreateModal()}>X</span>
                        </div>

                        <div>

                            <label>Nome do produto</label>
                            <br></br>
                            <input onChange={e => setItemInsertState({ ...itemInsertState, nome: e.target.value})} type='text' required name="nomeProd" id="nomeProd" className="input-new-modal"></input>
                            <br></br>
                            <label>URL da imagem</label>
                            <br></br>
                            <input onChange={e => setItemInsertState({ ...itemInsertState, img: e.target.value})} type='text' name="imgProd" id="imgProd" className="input-new-modal"></input>
                            <br></br>
                            <label>Descrição</label>
                            <br></br>
                            <input onChange={e => setItemInsertState({ ...itemInsertState, desc: e.target.value})} type='text' name="descProd" id="descProd" className="input-new-modal"></input>
                            <br></br>
                            <label>Preço</label>
                            <br></br>
                            <input onChange={e => setItemInsertState({ ...itemInsertState, preco: e.target.value})} type='text' required name="precoProd" id="precoProd" className="input-new-modal"></input>
                            <br></br>
                            <button onClick={() => insertItem()} className="input-new-modal">Criar</button>

                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>

    )

    return (
        <div className="admin-main-div">
            <h1>Login Admin</h1>
            <div className="admin-form" method='get'>
                <input type="text" id="adminUser" placeholder="Usuário" className="admin-user-input" required name="user"></input>
                <br></br>
                <input type="password" id="adminPass" placeholder="Senha" className="admin-password-input" required name="password"></input>
                <br></br>
                <button id="adminButton" onClick={() => loginForm()}>Entrar</button>
            </div>

        </div>
    )


}

export default Admin;