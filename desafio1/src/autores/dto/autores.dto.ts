import { IsEmail, IsString, Max, Min } from 'class-validator';

import { Autor } from '../autor.entity';

export class CriarAutorDTO {
  @IsString()
  @Max(50)
  @Min(3)
  nome: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Max(400)
  @Min(3)
  descricao: string;

  public toModel(): Autor {
    return new Autor({
      nome: this.nome,
      email: this.email,
      descricao: this.descricao,
    });
  }
}
