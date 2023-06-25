import { Injectable } from '@nestjs/common';

import { Estado } from '../estado.entity';

@Injectable()
export class EncontrarEstadosPeloIdPaisMemoriaRepository {
  private db: Estado[] = [];

  public async encontrar(idPais: string): Promise<Estado[]> {
    return this.db.filter((estado) => estado.getIdPais() === idPais);
  }
}
