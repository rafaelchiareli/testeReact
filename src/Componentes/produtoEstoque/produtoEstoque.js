import React from 'react';



const produtoEstoque = ({ dados, ...props }) => {



    return (
       
            <>
               {dados.map(item => <tr key={`produto-${item.codProduto}`}>
                    <td>
                        {item.Produto}
                    </td>
                    <td>
                        {item.Lote}
                    </td>
                    <td>
                        {item.Validade}
                    </td>
                    <td>
                        {item.Estoque}
                    </td>
                  
                </tr>)}
            </>
    )

}