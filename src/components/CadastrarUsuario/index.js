import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "antd";

import Axios from "axios";

const LoginUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const history = useHistory();

  async function onSubmit() {
    const data = {
      nome_usuario: nome,
      email_usuario: email,
      senha_usuario: senha,
      tipo_usuario: tipo,
    };

    await Axios.post("http://localhost:3333/usuarios", data);
    alert("Usuario Cadastrado com Sucesso");
    history.push("/");
  }

  return (
    <div className='form-wrapper'>
      <h2>Novo Usuario</h2>

      <div className='input-text'>
        <h6>Nome</h6>
        <Input
          id='_id'
          name='nome_usuario'
          type='text'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <h6>Email</h6>
      <div className='input-text'>
        <Input
          id='_id'
          name='email_usuario'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='input-text'>
        <h6>Senha</h6>
        <Input
          id='_id'
          name='senha_usuario'
          type='text'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className='input-text'>
        <h6>Tipo</h6>
        <Input
          id='_id'
          name='tipo_usuario'
          type='text'
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>
      <button onClick={onSubmit}>Salvar</button>
    </div>
  );
};

export default LoginUser;
