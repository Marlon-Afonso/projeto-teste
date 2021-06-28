"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_1 = require("./shared/produtos");
const produtos_service_1 = require("./shared/produtos.service");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    async getAll() {
        return this.produtosService.getAll();
    }
    async getByCod(cod_produto) {
        return this.produtosService.getByCod(cod_produto);
    }
    async create(produto) {
        return this.produtosService.create(produto);
    }
    async upadate(cod_produto, produto) {
        produto.cod_produto = cod_produto;
        return this.produtosService.update(produto);
    }
    async delete(cod_produto) {
        this.produtosService.delete(cod_produto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "getAll", null);
__decorate([
    common_1.Get(":cod_produto"),
    __param(0, common_1.Param('cod_produto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "getByCod", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produtos_1.Produtos]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "create", null);
__decorate([
    common_1.Put(':cod_produto'),
    __param(0, common_1.Param('cod_produto')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, produtos_1.Produtos]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "upadate", null);
__decorate([
    common_1.Delete(':cod_produto'),
    __param(0, common_1.Param('cod_produto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "delete", null);
ProdutosController = __decorate([
    common_1.Controller('produtos'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map