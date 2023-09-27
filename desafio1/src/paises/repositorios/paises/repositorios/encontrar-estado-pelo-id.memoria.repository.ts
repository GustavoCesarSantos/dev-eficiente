import { Injectable } from '@nestjs/common';

import { Estado } from 'src/paises/estado.entity';

@Injectable()
export class EncontrarEstadoPeloIdMemoriaRepository {
  private db: Estado[] = [];

  public async encontrar(id: string): Promise<Estado | undefined> {
    return this.db.find((estado) => estado.getId() === id);
  }
}
