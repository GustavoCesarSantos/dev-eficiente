import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

import { Autor } from '../autor.entity';
import { EmailInUse } from '../customValidation/email-in-use';

export class CriarAutorDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @EmailInUse()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 400)
  descricao: string;

  public toModel(): Autor {
    return new Autor({
      nome: this.nome,
      email: this.email,
      descricao: this.descricao,
    });
  }
}
