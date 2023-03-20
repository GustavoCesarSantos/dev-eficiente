import { Injectable } from '@nestjs/common';

import { CriarAutorDTO } from 'src/autores/dto/autores.dto';
import { Autor } from 'src/autores/autor.entity';
import { CriarAutorMemoriaRepository } from 'src/autores/repositorio/criar-autor/criar-autor-memoria.repository/criar-autor-memoria.repository';

@Injectable()
export class CriarAutorService {
  constructor(private criarAutorRepository: CriarAutorMemoriaRepository) {}

  public async executar(criarAutorDTO: CriarAutorDTO): Promise<Autor> {
    const autor = new Autor(criarAutorDTO);
    return this.criarAutorRepository.criar(autor);
  }
}
