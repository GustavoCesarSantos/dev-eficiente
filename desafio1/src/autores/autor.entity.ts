import { randomUUID } from 'crypto';

type AutorConstructor = {
  nome: string;
  email: string;
  descricao: string;
};

export class Autor {
  private readonly id: string;
  private readonly nome: string;
  private readonly email: string;
  private readonly descricao: string;
  private readonly criadoEm: Date;

  constructor(props: AutorConstructor) {
    this.id = randomUUID();
    this.nome = props.nome;
    this.email = props.email;
    this.descricao = props.descricao;
    this.criadoEm = new Date();
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }

  getDescricao(): string {
    return this.descricao;
  }
}
