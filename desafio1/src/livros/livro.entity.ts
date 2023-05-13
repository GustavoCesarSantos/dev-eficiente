import { randomUUID } from 'crypto';

type LivroConstructor = {
  titulo: string;
  resumo: string;
  sumario: string;
  preco: number;
  numeroPaginas: number;
  isbn: string;
  dataPublicacao: string;
  idCategoria: string;
  idAutor: string;
};
export class Livro {
  private readonly id: string;
  private readonly titulo: string;
  private readonly resumo: string;
  private readonly sumario: string;
  private readonly preco: number;
  private readonly numeroPaginas: number;
  private readonly isbn: string;
  private readonly dataPublicacao: string;
  private readonly idCategoria: string;
  private readonly idAutor: string;

  constructor(props: LivroConstructor) {
    this.id = randomUUID();
    this.titulo = props.titulo;
    this.resumo = props.resumo;
    this.sumario = props.sumario;
    this.preco = props.preco;
    this.numeroPaginas = props.numeroPaginas;
    this.isbn = props.isbn;
    this.dataPublicacao = props.dataPublicacao;
    this.idCategoria = props.idCategoria;
    this.idAutor = props.idAutor;
  }

  getId(): string {
    return this.id;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getResumo(): string {
    return this.resumo;
  }

  getSumario(): string {
    return this.sumario;
  }

  getPreco(): number {
    return this.preco;
  }

  getNumeroPaginas(): number {
    return this.numeroPaginas;
  }

  getIsbn(): string {
    return this.isbn;
  }

  getDataPublicacao(): string {
    return this.dataPublicacao;
  }

  getIdCategoria(): string {
    return this.idCategoria;
  }

  getIdAutor(): string {
    return this.idAutor;
  }
}
