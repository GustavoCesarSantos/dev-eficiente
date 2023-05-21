import { Test, TestingModule } from '@nestjs/testing';
import { CriarEstadoController } from './criar-estado.controller';

describe('CriarEstadoController', () => {
  let controller: CriarEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarEstadoController],
    }).compile();

    controller = module.get<CriarEstadoController>(CriarEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
