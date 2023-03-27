import { Test, TestingModule } from '@nestjs/testing';

import { AutoresController } from './autores.controller';
import { CriarAutorService } from './casos-de-uso/criar-autor/criar-autor.service';
import { CriarAutorMemoriaRepository } from './repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';
import { EncontrarAutorPeloEmailRepository } from './repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';

describe('AutoresController', () => {
  let controller: AutoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoresController],
      providers: [
        CriarAutorMemoriaRepository,
        CriarAutorService,
        EncontrarAutorPeloEmailRepository,
      ],
    }).compile();

    controller = module.get<AutoresController>(AutoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
