import { Produtos } from './produtos';
export declare class ProdutosService {
    produtos: Produtos[];
    getAll(): Produtos[];
    getByCod(cod_produto: number): Produtos;
    create(produto: Produtos): Produtos;
    update(produto: Produtos): Produtos;
    delete(cod_produto: number): void;
}
