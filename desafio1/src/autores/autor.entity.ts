type props = {
  nome: string;
  email: string;
  descricao: string;
};

export class Autor {
  private readonly nome: string;
  private readonly email: string;
  private readonly descricao: string;
  private readonly criadoEm: Date;

  constructor(props: props) {
    this.nome = props.nome;
    this.email = props.email;
    this.descricao = props.descricao;
    this.criadoEm = new Date();
  }
}
