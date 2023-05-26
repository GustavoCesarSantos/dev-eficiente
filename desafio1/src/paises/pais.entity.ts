import { randomUUID } from 'crypto';

export class Pais {
  private readonly id: string;
  private readonly nome: string;

  constructor(nome: string) {
    (this.id = randomUUID()), (this.nome = nome);
  }

  public getId(): string {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }
}
