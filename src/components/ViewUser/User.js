import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    nome_produto: "",
    descricao: "",
    preco_produto: "",
    quantidade_produto: "",
    img_produto: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(
      `http://localhost:3333/api/produtos.details/${id}`
    );
    setUser(res.data);
    console.log(res.data);
  };

  return (
    <div className='container py-4'>
      <h1 className='display-4'>Id do Produto:{id}</h1>
      <hr />
      <ul className='list-group w-50'>
        <li className='list-group-item'>
          Nome do Produto: {user.nome_produto}
        </li>
        <li className='list-group-item'>Descrição: {user.descricao}</li>
        <li className='list-group-item'>Preço: {user.preco_produto}</li>
        <li className='list-group-item'>
          Quantidade: {user.quantidade_produto}
        </li>
        <li className='list-group-item'>
          Imagem:
          <img
            src={user.img_produto}
            alt={user.nome}
            className='promotion-card__image'
          />
        </li>
      </ul>
      <Link className='btn btn-primary' to='/'>
        Voltar para o Inicio
      </Link>
    </div>
  );
};

export default User;
