import React from "react";
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ProdutoEstoque from './Componentes/produtoEstoque/produtoEstoque.js';

const [dados, setDados] = useState([])

useEffect(() => {


}, [])

const App = () => {
  return (<>
    <Table striped bordered hover>
      <th>
        <tr>
          <td>
            Produto
          </td>
          <td>
            Lote
          </td>
          <td>
            Validade
          </td>
          <td>
            Estoque
          </td>
        </tr>
      </th>
      <tbody>
        <ProdutoEstoque dados={dados}>
          
        </ProdutoEstoque>
      </tbody>
    </Table>
  </>
  );
}

export default App;
