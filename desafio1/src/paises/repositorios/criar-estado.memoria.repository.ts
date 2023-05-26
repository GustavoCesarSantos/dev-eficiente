import { Injectable } from '@nestjs/common';

import { Estado } from '../estado.entity';

@Injectable()
export class CriarEstadoMemoriaRepository {
  private readonly db: Estado[] = [];

  public async criar(estado: Estado): Promise<Estado> {
    this.db.push(estado);
    return estado;
  }
}
