import { Pais } from '../pais.entity';

export class EncontrarPaisPeloNomeMemoriaRepository {
  private db: Pais[] = [];

  public async encontrar(nome: string): Promise<Pais | undefined> {
    return this.db.find((pais) => pais.getNome() === nome);
  }
}
