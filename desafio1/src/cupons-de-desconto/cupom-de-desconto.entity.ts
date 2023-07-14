type CupomDeDescontoConstructor = {
  codigo: string;
  percentual: number;
  validade: string;
};
export class CupomDeDesconto {
  private codigo: string;
  private percentual: number;
  private validade: string;

  constructor(props: CupomDeDescontoConstructor) {
    this.codigo = props.codigo;
    this.percentual = props.percentual;
    this.validade = props.validade;
  }

  public getCodigo() {
    return this.codigo;
  }
}
