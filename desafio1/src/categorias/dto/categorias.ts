import { IsNotEmpty, IsString, Length } from 'class-validator';

import { Categoria } from '../categoria.entity';
import { IsUnique } from '../../customValidations/is-unique';

export class CriarCategoriaDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @IsUnique('Categoria')
  nome: string;

  public toModel(): Categoria {
    return new Categoria(this.nome);
  }
}
