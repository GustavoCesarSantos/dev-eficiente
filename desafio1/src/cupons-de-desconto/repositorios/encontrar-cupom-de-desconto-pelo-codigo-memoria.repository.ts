import { Injectable } from '@nestjs/common';
import { CupomDeDesconto } from '../cupom-de-desconto.entity';

@Injectable()
export class EncontrarCupomDeDescontoPeloCodigoMemoriaRepository {
  private db: CupomDeDesconto[] = [];

  public encontrar(codigo: string): CupomDeDesconto | undefined {
    return this.db.find(
      (cupomDeDesconto) => cupomDeDesconto.getCodigo() === codigo,
    );
  }
}
