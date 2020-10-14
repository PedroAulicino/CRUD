import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import Api from "Services/api";

const schema = Yup.object().shape({
  nome_produto: Yup.string().required("Nome do Produto obrigatorio"),
  descricao: Yup.string().required("Descrição Obrigatoria"),
  preco_produto: Yup.string().required("Preço é obrigatorio"),
  quantidade_produto: Yup.string().required("Quantidade obrigatoria"),
});

const Formulario = () => {
  const [values, setValues] = useState("");
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  async function onSubmit() {
    await Api.post("/produtos", values).then(() => {
      history.push("/");
    });
  }

  return (
    <div className='form-wrapper'>
      <h2>Novo Produto</h2>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className='input-text'>
          <label>Nome do Produto</label>
          <Input
            id='nome_produto'
            name='nome_produto'
            type='text'
            onChange={onChange}
          />
        </div>
        <div className='input-text'>
          <label>Descrição</label>
          <Input
            id='descricao'
            name='descricao'
            type='text'
            onChange={onChange}
          />
        </div>
        <div className='input-text'>
          <label>Preço</label>
          <Input
            id='preco_produto'
            name='preco_produto'
            type='text'
            onChange={onChange}
          />
        </div>
        <div className='input-text'>
          <label>Quantidade</label>
          <Input
            id='quantidade_produto'
            name='quantidade_produto'
            type='text'
            onChange={onChange}
          />
        </div>
        <div className='input-text'>
          <label htmlFor='label2'>Imagem Do Produto</label>
          <Input
            id='img_produto'
            name='img_produto'
            type='text'
            onChange={onChange}
          />
        </div>

        <div>
          <button type='submit'>Salvar</button>
        </div>
        <div>
          <Link to={"/"}>Voltar </Link>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
