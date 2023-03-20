import { Test, TestingModule } from '@nestjs/testing';
import { CriarAutorService } from './criar-autor.service';

describe('CriarAutorService', () => {
  let service: CriarAutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriarAutorService],
    }).compile();

    service = module.get<CriarAutorService>(CriarAutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
