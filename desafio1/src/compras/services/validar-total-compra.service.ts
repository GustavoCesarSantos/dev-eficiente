import { Injectable } from '@nestjs/common';

import { Compra } from '../compra.entity';
import { PegarTotalSemDescontoService } from './pegar-total-sem-desconto.service';

@Injectable()
export class ValidarTotalCompraService {
  constructor(
    private readonly pegarTotalSemDescontoService: PegarTotalSemDescontoService,
  ) {}

  public async execute(compra: Compra): Promise<boolean> {
    const total = await this.pegarTotalSemDescontoService.execute(compra);
    const cupomDeDesconto = compra.getCupomDeDesconto();
    let discount = 0;
    if (cupomDeDesconto) {
      discount = (total * cupomDeDesconto.getPercentual()) % 100;
    }
    return carrinho.total === (cupomDeDesconto ? total - discount : total);
  }
}
