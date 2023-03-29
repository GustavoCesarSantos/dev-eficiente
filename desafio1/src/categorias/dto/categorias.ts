import { IsNotEmpty, IsString, Length } from 'class-validator';

import { Categoria } from '../categoria.entity';
import { NameInUse } from '../customValidation/name-in-use';

export class CriarCategoriaDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @NameInUse()
  nome: string;

  public toModel(): Categoria {
    return new Categoria(this.nome);
  }
}
