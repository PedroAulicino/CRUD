import React, { useEffect, useState } from "react";
import { Input } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  const [promotions, setPromotions] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    loadUsers();
  }, [busca]);

  const params = {};

  if (busca) {
    params.nome_produto = busca;
  }

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3333/api/produtos", {
      params,
    });
    setPromotions(result.data);
    console.log(result.data);
  };

  const deleteUser = async (_id) => {
    await axios.delete(`http://localhost:3333/api/delete/produtos/${_id}`);
    loadUsers();
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Input
        type='search'
        placeholder='Buscar'
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      <Link to='/PageForm'>Cadastrar Produto</Link>
      <Link to='/cadastrar'>Cadastrar Usuario</Link>
      <Link to='/grafico'>Vizualizar Gráfico</Link>
      <table className='table table-responsive'>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((user) => (
            <tr key={user._id}>
              <td>
                <img
                  src={user.img_produto}
                  alt={user.nome}
                  className='promotion-card__image'
                />
              </td>
              <td>{user.nome_produto}</td>
              <td>{user.descricao}</td>
              <td>R$ {user.preco_produto}</td>
              <td>{user.quantidade_produto}</td>
              <td>
                <Link className='Vizualizar' to={`/users/${user._id}`}>
                  Vizualizar
                </Link>
                <br></br>
                <Link className='Edit' to={`/users/edit/${user._id}`}>
                  Editar
                </Link>
                <br></br>
                <Link
                  className='Delet'
                  to='/'
                  onClick={() => deleteUser(user._id)}
                >
                  Deletar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
