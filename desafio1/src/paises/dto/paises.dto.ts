import { IsNotEmpty, IsString } from 'class-validator';

import { IsUnique } from '../../customValidations/is-unique';
import { Pais } from '../pais.entity';

export class CriarPaisRequest {
  @IsString()
  @IsNotEmpty()
  @IsUnique('Pais')
  nome: string;

  public toModal() {
    return new Pais(this.nome);
  }
}
