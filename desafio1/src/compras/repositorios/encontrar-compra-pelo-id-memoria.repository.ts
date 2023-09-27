import { Injectable } from '@nestjs/common';

import { Compra } from '../compra.entity';

@Injectable()
export class EncontrarCompraPeloIdMemoriaRepository {
  private readonly db: Compra[] = [];

  public async encontrar(id: string): Promise<Compra | undefined> {
    return this.db.find((compra) => {
      return compra.getId() === id;
    });
  }
}
