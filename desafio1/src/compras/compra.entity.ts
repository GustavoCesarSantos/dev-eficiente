import { randomUUID } from 'node:crypto';

import { CupomDeDesconto } from 'src/cupons-de-desconto/cupom-de-desconto.entity';
import { encontrarCupomDeDescontoPeloCodigo } from 'src/utils/encontrarCupomDeDescontoPeloCodigo';
import { estadoPertenceAoPaís } from '../utils/estadoPertenceAoPaís';

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
  telefone: number;
  cep: number;
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
  private idEstado?: string;
  private telefone: number;
  private cep: number;
  private status?: string;
  private carrinho: Carrinho;
  private cupomDeDesconto?: CupomDeDesconto;

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
    this.telefone = props.telefone;
    this.cep = props.cep;
    this.carrinho = props.carrinho;
  }

  public getId() {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }

  public getNome() {
    return this.nome;
  }

  public getSobrenome() {
    return this.sobrenome;
  }

  public getDocumento() {
    return this.documento;
  }

  public getEndereco() {
    return this.endereco;
  }

  public getComplemento() {
    return this.complemento;
  }

  public getCidade() {
    return this.cidade;
  }

  public getIdPais() {
    return this.idPais;
  }

  public getIdEstado() {
    return this.idEstado;
  }

  public getTelefone() {
    return this.telefone;
  }

  public getCep() {
    return this.cep;
  }

  public getStatus() {
    return this.status;
  }

  public getCarrinho() {
    return this.carrinho;
  }

  public getCupomDeDesconto() {
    return this.cupomDeDesconto;
  }

  public async setIdEstado(idEstado: string) {
    if (!this.idPais) {
      throw new Error('Não é possivel atribuir um estado sem um id de país');
    }
    await estadoPertenceAoPaís(this.idPais, idEstado);
    this.idEstado = idEstado;
  }

  public async setCupomDeDesconto(codigo: string) {
    const cupomDeDesconto = await encontrarCupomDeDescontoPeloCodigo(codigo);
    this.cupomDeDesconto = cupomDeDesconto;
  }

  public setStatus(status: string) {
    this.status = status;
  }
}
