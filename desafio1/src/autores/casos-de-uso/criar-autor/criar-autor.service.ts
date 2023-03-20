import { Injectable } from '@nestjs/common';

import { CriarAutorDTO } from 'src/autores/dto/autores.dto';
import { Autor } from 'src/autores/autor.entity';
import { CriarAutorEmMemoriaRepository } from 'src/autores/repositorio/criar-autor-memoria.repository';

@Injectable()
export class CriarAutorService {
  constructor(private criarAutorRepository: CriarAutorEmMemoriaRepository) {}

  public async executar(criarAutorDTO: CriarAutorDTO): Promise<Autor> {
    const autor = new Autor(
      criarAutorDTO.nome,
      criarAutorDTO.email,
      criarAutorDTO.descricao,
      criarAutorDTO.criadoEm,
    );
    return this.criarAutorRepository.criar(autor);
  }
}
