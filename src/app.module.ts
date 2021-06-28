import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/shared/produtos.service';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ClientesModule, ProdutosModule],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
