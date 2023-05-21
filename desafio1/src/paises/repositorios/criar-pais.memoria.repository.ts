import { Pais } from '../pais.entity';

export class CriarPaisMemoriaRepository {
  private readonly db: Pais[] = [];

  public async criar(pais: Pais): Promise<Pais> {
    this.db.push(pais);
    return pais;
  }
}
