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
    let quantidade: Record<string, number> = {};
    const idLivros: string[] = [];
    carrinho.itens.forEach((item) => {
      quantidade = {
        ...quantidade,
        [item.idLivro]: item.quantidade,
      };
      idLivros.push(item.idLivro);
    });
    const livrosDB = await this.listarLivrosPelosIdsMemoriaRepository.listar(
      idLivros,
    );
    const total = livrosDB.reduce((total, livro) => {
      total += livro.getPreco() * quantidade[livro.getId()];
      return total;
    }, 0);
    return carrinho.total === total;
  }
}
