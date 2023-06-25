import { Injectable } from '@nestjs/common';

import { Compra } from '../compra.entity';

@Injectable()
export class CriarCompraMemoriaRepository {
  private db: Compra[] = [];

  public criar(compra: Compra): Compra {
    this.db.push(compra);
    return compra;
  }
}
