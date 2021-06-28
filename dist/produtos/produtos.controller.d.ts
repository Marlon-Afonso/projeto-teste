import { Produtos } from './shared/produtos';
import { ProdutosService } from './shared/produtos.service';
export declare class ProdutosController {
    private produtosService;
    constructor(produtosService: ProdutosService);
    getAll(): Promise<Produtos[]>;
    getByCod(cod_produto: number): Promise<Produtos>;
    create(produto: Produtos): Promise<Produtos>;
    upadate(cod_produto: number, produto: Produtos): Promise<Produtos>;
    delete(cod_produto: number): Promise<void>;
}
