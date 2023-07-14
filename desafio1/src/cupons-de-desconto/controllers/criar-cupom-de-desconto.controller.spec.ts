import { Test, TestingModule } from '@nestjs/testing';
import { CriarCupomDeDescontoController } from './criar-cupom-de-desconto.controller';

describe('CriarCupomDeDescontoController', () => {
  let controller: CriarCupomDeDescontoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarCupomDeDescontoController],
    }).compile();

    controller = module.get<CriarCupomDeDescontoController>(
      CriarCupomDeDescontoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
