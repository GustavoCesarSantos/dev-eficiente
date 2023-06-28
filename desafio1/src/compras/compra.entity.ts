import { randomUUID } from 'node:crypto';

type ItemCarrinho = {
  idLivro: string;
  quantidade: number;
};

type Carrinho = {
  total: number;
  itens: ItemCarrinho[];
};

type CompraConstructor = {
  email: string;
  nome: string;
  sobrenome: string;
  documento: string;
  endereco: string;
  complemento: string;
  cidade: string;
  idPais: string;
  idEstado: string;
  telefone: number;
  cep: number;
  status?: 'iniciada';
  carrinho: Carrinho;
};
export class Compra {
  private id: string;
  private email: string;
  private nome: string;
  private sobrenome: string;
  private documento: string;
  private endereco: string;
  private complemento: string;
  private cidade: string;
  private idPais: string;
  private idEstado: string;
  private telefone: number;
  private cep: number;
  private status: 'iniciada';
  private carrinho: Carrinho;

  constructor(props: CompraConstructor) {
    this.id = randomUUID();
    this.email = props.email;
    this.nome = props.nome;
    this.sobrenome = props.sobrenome;
    this.documento = props.documento;
    this.endereco = props.endereco;
    this.complemento = props.complemento;
    this.cidade = props.cidade;
    this.idPais = props.idPais;
    this.idEstado = props.idEstado;
    this.telefone = props.telefone;
    this.cep = props.cep;
    this.status = props.status ?? 'iniciada';
    this.carrinho = props.carrinho;
  }

  public getCarrinho() {
    return this.carrinho;
  }
}
