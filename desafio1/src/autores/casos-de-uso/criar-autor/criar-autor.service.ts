import { Injectable } from '@nestjs/common';
import { Autor } from '../../autor.entity';
import { CriarAutorMemoriaRepository } from '../../repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';
import { EncontrarAutorPeloEmailRepository } from '../../repositorio/encontrar-autor-pelo-email.repository/encontrar-autor-pelo-email.repository';

@Injectable()
export class CriarAutorService {
  constructor(
    private encontrarAutorPeloEmailRepository: EncontrarAutorPeloEmailRepository,
    private criarAutorRepository: CriarAutorMemoriaRepository,
  ) {}

  public async execute(autor: Autor): Promise<Autor> {
    const emailJaUtilizado = this.encontrarAutorPeloEmailRepository.encontrar(
      autor.getEmail(),
    );
    if (emailJaUtilizado) throw new Error('E-mail já utilizado.');
    return await this.criarAutorRepository.criar(autor);
  }
}
