import { Injectable } from '@nestjs/common';
import { Produtos } from './produtos';

@Injectable()
export class ProdutosService {
    produtos: Produtos[] = [
        {cod_produto: 1, nome: 'Tenis', fabricacao: 'Nacional', tamanho: 10, valor: 20.43 },
        {cod_produto: 2, nome: 'Bolsa', fabricacao: 'Importado', tamanho: 10, valor: 203.43 },
        {cod_produto: 3, nome: 'Notebook', fabricacao: 'Nacional', tamanho: 10, valor: 201.43 },
    ];

     /**
     * @returns todos produtos cadastrados
     */
      getAll(){
        return this.produtos;
    }

    /**
     * @param cod_produto Código do Produto
     * @returns produto encontrado pelo Código
     */
    getByCod(cod_produto: number){
        const produto = this.produtos.find((value) => value.cod_produto == cod_produto );
        return produto;
    }

    /**
     * @param produto parametro do produto para cadastro
     * @returns produto cadastrado no sistema
     */
    create(produto: Produtos){
        let cod = 0;
        if(this.produtos.length > 0) {
            cod = this.produtos[this.produtos.length - 1].cod_produto;
        }

        produto.cod_produto = cod + 1;
        this.produtos.push(produto);
        return produto;
    }

    /**
     * 
     * @param produto parametro do produto para alterar dados
     * @returns alteracao do produto
     */
    update(produto: Produtos){
        const alterarProduto = this.getByCod(produto.cod_produto);
        if(alterarProduto){
            alterarProduto.nome = produto.nome,
            alterarProduto.fabricacao = produto.fabricacao,
            alterarProduto.tamanho = produto.tamanho,
            alterarProduto.valor = produto.valor
        }

        return alterarProduto;
    }
    
    /**
     * 
     * @param cod_produto Código do produto
     */
    delete(cod_produto: number){
        const index = this.produtos.findIndex((value) => value.cod_produto == cod_produto);
        this.produtos.splice(index, 1);
    }
}
