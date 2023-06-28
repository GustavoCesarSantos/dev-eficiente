import { Injectable } from '@nestjs/common';

import { ListarLivrosPelosIdsMemoriaRepository } from '../../livros/repositorios/listar-livros-pelos-ids-memoria.repository';
import { Compra } from '../compra.entity';

@Injectable()
export class ValidarTotalCompraService {
  constructor(
    private listarLivrosPelosIdsMemoriaRepository: ListarLivrosPelosIdsMemoriaRepository,
  ) {}

  public async execute(compra: Compra): Promise<boolean> {
    const carrinho = compra.getCarrinho();
    const ids = carrinho.itens.map((item) => item.idLivro);
    const livros = await this.listarLivrosPelosIdsMemoriaRepository.listar(ids);
    let total = 0;
    livros.forEach((livro) => (total += livro.getPreco()));
    return carrinho.total === total;
  }
}
