import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  let provider: ProdutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosService],
    }).compile();

    provider = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
