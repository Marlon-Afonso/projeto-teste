"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
let ProdutosService = class ProdutosService {
    constructor() {
        this.produtos = [
            { cod_produto: 1, nome: 'Tenis', fabricacao: 'Nacional', tamanho: 10, valor: 20.43 },
            { cod_produto: 2, nome: 'Bolsa', fabricacao: 'Importado', tamanho: 10, valor: 203.43 },
            { cod_produto: 3, nome: 'Notebook', fabricacao: 'Nacional', tamanho: 10, valor: 201.43 },
        ];
    }
    getAll() {
        return this.produtos;
    }
    getByCod(cod_produto) {
        const produto = this.produtos.find((value) => value.cod_produto == cod_produto);
        return produto;
    }
    create(produto) {
        let cod = 0;
        if (this.produtos.length > 0) {
            cod = this.produtos[this.produtos.length - 1].cod_produto;
        }
        produto.cod_produto = cod + 1;
        this.produtos.push(produto);
        return produto;
    }
    update(produto) {
        const alterarProduto = this.getByCod(produto.cod_produto);
        if (alterarProduto) {
            alterarProduto.nome = produto.nome,
                alterarProduto.fabricacao = produto.fabricacao,
                alterarProduto.tamanho = produto.tamanho,
                alterarProduto.valor = produto.valor;
        }
        return alterarProduto;
    }
    delete(cod_produto) {
        const index = this.produtos.findIndex((value) => value.cod_produto == cod_produto);
        this.produtos.splice(index, 1);
    }
};
ProdutosService = __decorate([
    common_1.Injectable()
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=produtos.service.js.map