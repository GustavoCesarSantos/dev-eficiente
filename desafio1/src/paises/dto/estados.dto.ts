import { IsNotEmpty, IsString } from 'class-validator';

import { Estado } from '../estado.entity';
import { IsUnique } from '../../customValidations/is-unique';

export class CriarEstadoRequest {
  @IsString()
  @IsNotEmpty()
  @IsUnique('Estado')
  nome: string;

  public toModal(idPais: string) {
    return new Estado(this.nome, idPais);
  }
}
