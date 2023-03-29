export class Categoria {
  private readonly nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }
}
