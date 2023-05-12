import { Test, TestingModule } from '@nestjs/testing';
import { EncontrarLivroController } from './encontrar-livro.controller';

describe('EncontrarLivroController', () => {
  let controller: EncontrarLivroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncontrarLivroController],
    }).compile();

    controller = module.get<EncontrarLivroController>(EncontrarLivroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
