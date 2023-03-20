type props = {
  nome: string;
  email: string;
  descricao: string;
  criadoEm: Date;
};

export class Autor {
  private nome: string;
  private email: string;
  private descricao: string;
  private criadoEm: Date;

  constructor(props: props) {
    this.nome = props.nome;
    this.email = props.email;
    this.descricao = props.descricao;
    this.criadoEm = props.criadoEm;
  }
}
