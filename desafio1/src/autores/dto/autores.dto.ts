import { IsEmail, IsString, Length } from 'class-validator';

import { Autor } from '../autor.entity';
import { EmailInUse } from '../customValidation/email-in-use';

export class CriarAutorDTO {
  @IsString()
  @Length(3, 50)
  nome: string;

  @IsString()
  @IsEmail()
  @EmailInUse()
  email: string;

  @IsString()
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
