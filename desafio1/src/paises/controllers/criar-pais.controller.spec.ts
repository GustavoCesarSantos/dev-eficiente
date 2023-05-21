import { Test, TestingModule } from '@nestjs/testing';
import { CriarPaisController } from './criar-pais.controller';

describe('CriarPaisController', () => {
  let controller: CriarPaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarPaisController],
    }).compile();

    controller = module.get<CriarPaisController>(CriarPaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
