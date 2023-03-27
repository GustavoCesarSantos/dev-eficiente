import { Injectable } from '@nestjs/common';

import { Autor } from '../../autor.entity';

const autores = [
  new Autor({ nome: 'teste', email: 'teste@teste.com', descricao: 'teste' }),
];

@Injectable()
export class EncontrarAutorPeloEmailRepository {
  private db: Autor[] = autores;

  public encontrar(email: string): Autor | undefined {
    return this.db.find((autor) => autor.getEmail() === email);
  }
}
