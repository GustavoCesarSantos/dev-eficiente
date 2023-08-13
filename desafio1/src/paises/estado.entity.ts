import { randomUUID } from 'crypto';

export class Estado {
  private readonly id: string;
  private readonly nome: string;
  private readonly idPais: string;

  constructor(nome: string, idPais: string) {
    this.id = randomUUID();
    this.nome = nome;
    this.idPais = idPais;
  }

  public getId() {
    return this.id;
  }

  public getNome() {
    return this.nome;
  }

  public getIdPais() {
    return this.idPais;
  }
}
