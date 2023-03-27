import { Test, TestingModule } from '@nestjs/testing';
import { Autor } from '../../autor.entity';
import { CriarAutorMemoriaRepository } from '../../repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';
import { EncontrarAutorPeloEmailRepository } from '../../repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';
import { CriarAutorService } from './criar-autor.service';

describe('CriarAutorService', () => {
  let service: CriarAutorService;
  let createRepository: CriarAutorMemoriaRepository;
  let listRepository: EncontrarAutorPeloEmailRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CriarAutorService,
        CriarAutorMemoriaRepository,
        EncontrarAutorPeloEmailRepository,
      ],
    }).compile();

    service = module.get<CriarAutorService>(CriarAutorService);
    createRepository = module.get<CriarAutorMemoriaRepository>(
      CriarAutorMemoriaRepository,
    );
    listRepository = module.get<EncontrarAutorPeloEmailRepository>(
      EncontrarAutorPeloEmailRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an error when e-mail already in use', () => {
    const autorDb = new Autor({
      nome: 'teste',
      email: 'teste@teste.com',
      descricao: 'teste',
    });
    jest
      .spyOn(listRepository, 'encontrar')
      .mockImplementation((email) => autorDb);
    expect(service.execute(autorDb)).rejects.toThrowError(
      new Error('E-mail já utilizado.'),
    );
  });

  it('should return autor when e-mail are not in use', () => {
    const autorDb = new Autor({
      nome: 'teste',
      email: 'teste@teste.com',
      descricao: 'teste',
    });
    jest
      .spyOn(listRepository, 'encontrar')
      .mockImplementation((email) => undefined);
    const repo = jest
      .spyOn(createRepository, 'criar')
      .mockImplementation(() => autorDb);
    expect(service.execute(autorDb)).resolves.toBeInstanceOf(Autor);
    expect(repo).toBeCalledTimes(1);
  });
});
