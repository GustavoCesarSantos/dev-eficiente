import { Test, TestingModule } from '@nestjs/testing';

import { Autor } from '../../autor.entity';
import { EncontrarAutorPeloEmailRepository } from '../../repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';
import { EmailInUseRule } from './email-in-use.rule';

describe('EmailInUseRule', () => {
  let rule: EmailInUseRule;
  let listService: EncontrarAutorPeloEmailRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailInUseRule, EncontrarAutorPeloEmailRepository],
    }).compile();

    rule = module.get<EmailInUseRule>(EmailInUseRule);
    listService = module.get<EncontrarAutorPeloEmailRepository>(
      EncontrarAutorPeloEmailRepository,
    );
  });

  it('should be defined', () => {
    expect(rule).toBeDefined();
  });

  it('should return false when e-mail already exist', () => {
    jest
      .spyOn(listService, 'encontrar')
      .mockImplementation(
        (email: string) =>
          new Autor({ nome: 'teste', email: 'teste', descricao: 'teste' }),
      );
    expect(rule.validate('teste')).resolves.toBeFalsy();
  });

  it('should return true when e-mail not exist', () => {
    jest
      .spyOn(listService, 'encontrar')
      .mockImplementation((email: string) => undefined);
    expect(rule.validate('teste')).resolves.toBeTruthy();
  });
});
