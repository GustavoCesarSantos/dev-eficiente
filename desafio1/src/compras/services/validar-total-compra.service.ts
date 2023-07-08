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
    const total = livros
      .map((livro) => {
        const item = carrinho.itens.find(
          (item) => item.idLivro === livro.getId(),
        );
        if (item) {
          return {
            preco: livro.getPreco(),
            qtd: item.quantidade,
          };
        }
        throw new Error('Livro não encontrado');
      })
      .reduce((total, livro) => {
        total += livro.preco * livro.qtd;
        return total;
      }, 0);
    return carrinho.total === total;
  }
}
