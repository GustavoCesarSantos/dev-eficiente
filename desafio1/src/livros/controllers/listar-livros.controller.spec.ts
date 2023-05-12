import { Test, TestingModule } from '@nestjs/testing';
import { ListarLivrosController } from './listar-livros.controller';

describe('ListarLivrosController', () => {
  let controller: ListarLivrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListarLivrosController],
    }).compile();

    controller = module.get<ListarLivrosController>(ListarLivrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
