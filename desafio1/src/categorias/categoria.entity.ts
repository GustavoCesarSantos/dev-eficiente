import { randomUUID } from 'crypto';

export class Categoria {
  private readonly id: string;
  private readonly nome: string;

  constructor(nome: string) {
    this.id = randomUUID();
    this.nome = nome;
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }
}
