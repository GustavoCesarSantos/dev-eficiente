import { IsNotEmpty, IsString } from 'class-validator';

import { Estado } from '../estado.entity';

export class CriarEstadoRequest {
  @IsString()
  @IsNotEmpty()
  nome: string;

  public toModal(idPais: string) {
    return new Estado(this.nome, idPais);
  }
}
