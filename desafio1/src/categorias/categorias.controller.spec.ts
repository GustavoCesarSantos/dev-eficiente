import { Test, TestingModule } from '@nestjs/testing';

import { CategoriasController } from './categorias.controller';
import { CriarCategoriaMemoriaRepository } from './repositorios/criar-categoria/criar-categoria-memoria.repository/criar-categoria-memoria.repository';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasController],
      providers: [CriarCategoriaMemoriaRepository],
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
