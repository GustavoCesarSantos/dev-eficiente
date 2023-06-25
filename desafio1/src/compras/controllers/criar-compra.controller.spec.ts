import { Test, TestingModule } from '@nestjs/testing';
import { CriarCompraController } from './criar-compra.controller';

describe('CriarCompraController', () => {
  let controller: CriarCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarCompraController],
    }).compile();

    controller = module.get<CriarCompraController>(CriarCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
