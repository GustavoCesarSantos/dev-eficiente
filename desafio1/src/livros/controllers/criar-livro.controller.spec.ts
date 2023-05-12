import { Test, TestingModule } from '@nestjs/testing';
import { CriarLivroController } from './criar-livro.controller';

describe('CriarLivroController', () => {
  let controller: CriarLivroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarLivroController],
    }).compile();

    controller = module.get<CriarLivroController>(CriarLivroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
