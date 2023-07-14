import { Injectable } from '@nestjs/common';
import { CupomDeDesconto } from '../cupom-de-desconto.entity';

@Injectable()
export class CriarCupomDeDescontoMemoriaRepository {
  private db: CupomDeDesconto[] = [];

  public criar(cupomDeDesconto: CupomDeDesconto): CupomDeDesconto {
    this.db.push(cupomDeDesconto);
    return cupomDeDesconto;
  }
}
