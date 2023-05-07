type LivroConstructor = {
  titulo: string;
  resumo: string;
  sumario: string;
  preco: number;
  numeroPaginas: number;
  isbn: number;
  dataPublicacao: Date;
  categoria: string;
  autor: string;
};
export class Livro {
  private readonly titulo: string;
  private readonly resumo: string;
  private readonly sumario: string;
  private readonly preco: number;
  private readonly numeroPaginas: number;
  private readonly isbn: number;
  private readonly dataPublicacao: Date;
  private readonly categoria: string;
  private readonly autor: string;

  constructor(props: LivroConstructor) {
    this.titulo = props.titulo;
    this.resumo = props.resumo;
    this.sumario = props.sumario;
    this.preco = props.preco;
    this.numeroPaginas = props.numeroPaginas;
    this.isbn = props.isbn;
    this.dataPublicacao = props.dataPublicacao;
    this.categoria = props.categoria;
    this.autor = props.autor;
  }
}
