import { Body, Controller, Delete, Get, Param , Post, Put} from '@nestjs/common';
import { Produtos } from './shared/produtos';
import { ProdutosModule } from './produtos.module';
import { ProdutosService } from './shared/produtos.service';

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService){}

    @Get()
    async getAll() : Promise<Produtos[]>{
        return this.produtosService.getAll();
    }

    @Get(":cod_produto")
    async getByCod(@Param('cod_produto') cod_produto: number) : Promise<Produtos>{
        return this.produtosService.getByCod(cod_produto);
    }

    @Post()
    async create(@Body()produto: Produtos): Promise<Produtos>{
        return this.produtosService.create(produto);
    }

    @Put(':cod_produto')
    async upadate(@Param('cod_produto') cod_produto: number, @Body() produto: Produtos): Promise<Produtos>{
        produto.cod_produto = cod_produto;
        return this.produtosService.update(produto)
    }

    @Delete(':cod_produto')
    async delete(@Param('cod_produto') cod_produto: number){
        this.produtosService.delete(cod_produto);
    }
}
