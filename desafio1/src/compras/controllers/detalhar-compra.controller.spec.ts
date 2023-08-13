import { Test, TestingModule } from '@nestjs/testing';
import { DetalharCompraController } from './detalhar-compra.controller';

describe('DetalharCompraController', () => {
  let controller: DetalharCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalharCompraController],
    }).compile();

    controller = module.get<DetalharCompraController>(DetalharCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
