import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ClientesModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
