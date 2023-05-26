import { Injectable } from '@nestjs/common';

import { Estado } from '../estado.entity';

@Injectable()
export class EncontrarEstadoPeloNomeMemoriaRepository {
  private db: Estado[] = [];

  public async encontrar(nome: string): Promise<Estado | undefined> {
    return this.db.find((estado) => estado.getNome() === nome);
  }
}
