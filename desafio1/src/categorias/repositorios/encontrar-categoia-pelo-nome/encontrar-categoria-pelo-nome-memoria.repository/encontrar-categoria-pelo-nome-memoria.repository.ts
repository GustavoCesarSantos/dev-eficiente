import { Injectable } from '@nestjs/common';
import { Categoria } from '../../../categoria.entity';

const categorias = [new Categoria('teste')];

@Injectable()
export class EncontrarCategoriaPeloNomeMemoriaRepository {
  private db: Categoria[] = categorias;

  public encontrar(nome: string): Categoria | undefined {
    return this.db.find((categoria) => categoria.getNome() === nome);
  }
}
