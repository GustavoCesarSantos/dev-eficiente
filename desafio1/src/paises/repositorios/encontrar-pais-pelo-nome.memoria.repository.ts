import { Injectable } from '@nestjs/common';

import { Pais } from '../pais.entity';

@Injectable()
export class EncontrarPaisPeloNomeMemoriaRepository {
  private db: Pais[] = [];

  public async encontrar(nome: string): Promise<Pais | undefined> {
    return this.db.find((pais) => pais.getNome() === nome);
  }
}
